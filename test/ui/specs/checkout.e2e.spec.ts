import AuthActions from '../actions/Auth.actions';
import InventoryActions from '../actions/Inventory.actions';
import CheckoutActions from '../actions/Checkout.actions';
import OrderAssertions from '../assertions/Order.assertions';

describe('Saucedemo checkout flow (AAP)', () => {
  it('should allow standard user to buy a product', async () => {
    await AuthActions.loginAsStandardUser();

    await InventoryActions.addProductByName('Sauce Las Backpack');
    await InventoryActions.goToCart();

    await CheckoutActions.checkoutDefaultUser();

    await OrderAssertions.orderIsConfirmed();
  });
});
