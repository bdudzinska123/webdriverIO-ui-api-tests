import InventoryPage from '../pages/Inventory.page';

class InventoryActions {
  async addProductByName(name: string) {
    const btn = await InventoryPage.addToCartButtonFor(name);
    await btn.waitForClickable();
    await btn.click();
  }

  async goToCart() {
    await InventoryPage.cartLink.waitForDisplayed();
    await InventoryPage.cartLink.click();
  }
}

export default new InventoryActions();
