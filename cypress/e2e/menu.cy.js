import { coffeeCup } from '../support/pageObjects/menuPage';

describe('Coffee-cart menu tests', () => {
  beforeEach('Navigate to site', () => {
    cy.log('Navigate to coffee-cart menu page');
    cy.visit('/');
  });

  it('Should display the menu page', () => {
    cy.log('Nav bar is displayed');
    cy.get('[aria-label="Menu page"]').contains('menu').should('be.visible');
    cy.get('[aria-label="Cart page"]').contains('cart').should('be.visible');
  });

  it('Should display expected coffee products', () => {
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
});
