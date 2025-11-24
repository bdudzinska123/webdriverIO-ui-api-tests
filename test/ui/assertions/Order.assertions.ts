import CheckoutPage from '../pages/Checkout.page';
import CartPage from '../pages/Cart.page';
import { expect } from '@wdio/globals';

class OrderAssertions {
  async orderIsConfirmed() {
    await expect(CheckoutPage.successHeader).toBeDisplayed();
    await expect(CheckoutPage.successHeader).toHaveText(expect.stringContaining('Thank you'));
  }

  async cartContainsItems(count: number) {
    const items = await CartPage.cartItems;
    expect(items.length).toBe(count);
  }
}

export default new OrderAssertions();
