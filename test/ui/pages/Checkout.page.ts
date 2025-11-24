class CheckoutPage {
  get firstNameInput() {
    return $('#first-name');
  }
  get lastNameInput() {
    return $('#last-name');
  }
  get postalCodeInput() {
    return $('#postal-code');
  }
  get continueButton() {
    return $('#continue');
  }
  get finishButton() {
    return $('#finish');
  }
  get successHeader() {
    return $('.complete-header');
  }

  async fillUserData(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
    await this.continueButton.click();
  }
}

export default new CheckoutPage();
