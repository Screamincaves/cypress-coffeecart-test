export const coffeeCup = {
  coffeeCupHeadingDisplayed: (coffeeType) => {
    //Checks the heading is displayed for the specified text
    cy.get('h4').contains(`${coffeeType}`).should('be.visible');
  },
  coffeeCupIngredientsDisplayed: (coffeeType, expectedIngredient) => {
    //Checks the specified coffee product and each ingredient is displayed
    cy.get(`[data-cy="${coffeeType}"]`)
      .find('.ingredient')
      .each((ingredient) => {
        cy.wrap(ingredient).should('be.visible');
        cy.wrap(ingredient).invoke('text').as('ingredientText');
      });
    validateIngredientText(expectedIngredient);
  },
};

const validateIngredientText = (expectedIngredient) => {
  cy.get('@ingredientText').then((ingredientName) => {
    expect(ingredientName).to.be.oneOf(expectedIngredient);
  });
};
