class InventoryPage {
  get cartLink() {
    return $('.shopping_cart_link');
  }

  private toSlug(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }

  addToCartButtonFor(name: string) {
    const slug = this.toSlug(name);
    return $(`button[data-test="add-to-cart-${slug}"]`);
  }

  itemTitle(name: string) {
    return $(`div.inventory_item_name=${name}`);
  }
}

export default new InventoryPage();
