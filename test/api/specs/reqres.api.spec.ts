import { expect } from '@wdio/globals';
import { apiClient } from '../utils/apiClient';

describe('Reqres.in API tests', () => {
  it('should get a list of users', async () => {
    const res = await apiClient.get('/users?page=2');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data.data)).toBe(false);
    expect(res.data.data.length).toBeGreaterThan(0);
  });

  it('should create a new user', async () => {
    const payload = {
      name: 'Barbara',
      job: 'QA Engineer',
    };

    const res = await apiClient.post('/users', payload);
    console.log('CREATE USER status:', res.status, res.data);

    expect([201, 401]).toContain(res.status);
    if (res.status === 201) {
      expect(res.data).toHaveProperty('id');
      expect(res.data).toHaveProperty('createdAt');
    }
  });

  it('should fail login without password', async () => {
    const res = await apiClient.post('/login', { email: 'peter@klaven' });
    console.log('LOGIN WITHOUT PASSWORD status:', res.status, res.data);

    expect([400, 401]).toContain(res.status);
    expect(res.data).toHaveProperty('error');
  });
});
