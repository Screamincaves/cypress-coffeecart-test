import { coffeeCup } from '../support/pageObjects/menuPage';
import { menuPage } from '../support/pageObjects/menuPage';

describe('Coffee-cart menu tests', () => {
  beforeEach('Navigate to site', () => {
    cy.log('Navigate to coffee-cart menu page');
    cy.visit('/');
    menuPage.menuPageDisplayed();
  });

  it('Should display expected coffee products', () => {
    //Grab each coffee cup product and verify that they are displayed
    cy.log('Coffee products are displayed');
    //Espresso product displayed
    coffeeCup.coffeeCupHeadingDisplayed('Espresso');
    coffeeCup.coffeeCupIngredientsDisplayed('Espresso', ['espresso']);
    //Espresso Macchiato product displayed
    coffeeCup.coffeeCupHeadingDisplayed('Espresso Macchiato');
    coffeeCup.coffeeCupIngredientsDisplayed('Espresso-Macchiato', [
      'espresso',
      'milk foam',
    ]);
    //Cappuccino product displayed
    coffeeCup.coffeeCupHeadingDisplayed('Cappuccino');
    coffeeCup.coffeeCupIngredientsDisplayed('Cappuccino', [
      'espresso',
      'milk foam',
      'steamed milk',
    ]);
    //Mocha product displayed
    coffeeCup.coffeeCupHeadingDisplayed('Mocha');
    coffeeCup.coffeeCupIngredientsDisplayed('Mocha', [
      'espresso',
      'whipped cream',
      'chocolate syrup',
      'steamed milk',
    ]);
    //Flat White product displayed
    coffeeCup.coffeeCupHeadingDisplayed('Flat White');
    coffeeCup.coffeeCupIngredientsDisplayed('Flat-White', [
      'espresso',
      'steamed milk',
    ]);
    //Americano product displayed
    coffeeCup.coffeeCupHeadingDisplayed('Americano');
    coffeeCup.coffeeCupIngredientsDisplayed('Americano', ['espresso', 'water']);
    //Cafe Latte product displayed
    coffeeCup.coffeeCupHeadingDisplayed('Cafe Latte');
    coffeeCup.coffeeCupIngredientsDisplayed('Cafe-Latte', [
      'espresso',
      'milk foam',
      'steamed milk',
    ]);
    //Espresso Con Panna product displayed
    coffeeCup.coffeeCupHeadingDisplayed('Espresso Con Panna');
    coffeeCup.coffeeCupIngredientsDisplayed('Espresso-Con Panna', [
      'espresso',
      'whipped cream',
    ]);
    //Cafe Breve product displayed
    coffeeCup.coffeeCupHeadingDisplayed('Cafe Breve');
    coffeeCup.coffeeCupIngredientsDisplayed('Cafe-Breve', [
      'espresso',
      'steamed cream',
      'steamed milk',
      'milk foam',
    ]);
  });

  it('Single product added to cart', () => {
    cy.log('Verify cart is empty');
    menuPage.verifyMenuCartValue(0);
    menuPage.verifyCheckoutValue('0.00');

    cy.log('Add coffee product to cart');
    //Add a single coffee product to cart
    cy.clickDataElement('Espresso');
    menuPage.verifyMenuCartValue(1);
    menuPage.verifyCheckoutValue('10.00');
  });

  it('Multiple coffee products added to cart', () => {
    cy.log('Verify cart is empty');
    menuPage.verifyMenuCartValue(0);
    menuPage.verifyCheckoutValue('0.00');

    cy.log('Add two coffee products to basket');
    //Add two coffee products to basket
    cy.clickDataElement('Espresso');
    cy.clickDataElement('Americano');
    menuPage.verifyMenuCartValue(2);
    menuPage.verifyCheckoutValue('17.00');
  });

  it('Displays confirm modal when right clicking on coffee product', () => {});
});
