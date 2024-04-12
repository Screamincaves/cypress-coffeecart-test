import { coffeeCup } from '../support/pageObjects/menuPage';
import { menuPage } from '../support/pageObjects/menuPage';

describe('Coffee-cart cart tests', () => {
  beforeEach('Navigate to site', () => {
    cy.log('Navigate to coffee-cart menu page');
    cy.visit('/');
    menuPage.menuPageDisplayed();
  });

  it.only('Can add a single coffee product to cart', () => {
    //Confirm cart is empty
    cy.log('Verify cart is empty');
    cy.get('li').find('[href="/cart"]').contains('cart (0)');

    //Add coffee product to basket
    cy.clickDataElement('Espresso');
    cy.get('li').find('[href="/cart"]').contains('cart (1)');
    cy.get('[aria-label="Cart page"]').click();
    cy.get('.list-item').contains('Espresso');
    cy.get('.unit-controller').parent().next().contains('$10.00');
  });

  it('Can add multiple coffee products to cart', () => {});
});
