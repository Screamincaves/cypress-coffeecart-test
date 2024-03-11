export const coffeeCup = {
  coffeeCupHeadingDisplayed: (coffeeType) => {
    cy.get('h4').contains(`${coffeeType}`).should('be.visible');
  },
  coffeeCupIngredientsDisplayed: (coffeeType, expectedIngredient) => {
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
