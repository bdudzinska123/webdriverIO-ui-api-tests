import LoginPage from '../pages/Login.page';
import { users } from '../data/users';

class AuthActions {
  async loginAsStandardUser() {
    await LoginPage.open();
    await LoginPage.submit(users.standard.username, users.standard.password);
  }

  async loginAsLockedOutUser() {
    await LoginPage.open();
    await LoginPage.submit(users.lockedOut.username, users.lockedOut.password);
  }

  async loginAs(username: string, password: string) {
    await LoginPage.open();
    await LoginPage.submit(username, password);
  }
}

export default new AuthActions();
