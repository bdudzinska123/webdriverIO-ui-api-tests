class CartPage {
  get cartItems() {
    return $$('.cart_item');
  }
  get checkoutButton() {
    return $('#checkout');
  }

  itemByName(name: string) {
    return $(`.inventory_item_name=${name}`);
  }
}

export default new CartPage();
