import CartPage from '../pages/Cart.page';
import CheckoutPage from '../pages/Checkout.page';
import { checkoutData } from '../data/checkout';

class CheckoutActions {
  async checkoutDefaultUser() {
    const { firstName, lastName, postalCode } = checkoutData.default;
    await CartPage.checkoutButton.click();
    await CheckoutPage.fillUserData(firstName, lastName, postalCode);
    await CheckoutPage.finishButton.click();
  }
}

export default new CheckoutActions();
