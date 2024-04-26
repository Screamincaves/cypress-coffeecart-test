import { coffeeCup } from '../support/pageObjects/menuPage';
import { menuPage } from '../support/pageObjects/menuPage';

describe('Coffee-cart cart tests', () => {
  beforeEach('Navigate to site', () => {
    cy.log('Navigate to coffee-cart menu page');
    cy.visit('/');
    menuPage.menuPageDisplayed();

    cy.log('Navigate to coffee-cart menu page');
    cy.clickDataElement('Espresso');
    menuPage.verifyMenuCartValue(1);
    cy.get('[aria-label="Cart page"]').click();
  });

  it.only('Cart updated to display single product', () => {
    menuPage.verifyCheckoutValue('10.00');
  });

  it('Increase qty in cart by 1', () => {});
});
