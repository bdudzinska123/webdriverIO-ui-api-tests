import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://reqres.in/api',
  validateStatus: () => true,
});
