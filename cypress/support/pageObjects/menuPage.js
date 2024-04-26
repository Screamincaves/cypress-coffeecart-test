export const menuPage = {
  menuPageDisplayed: () => {
    //Simple check to make sure page loads
    cy.log('Nav bar is displayed');
    cy.get('[aria-label="Menu page"]').contains('menu').should('be.visible');
    cy.get('[aria-label="Cart page"]').contains('cart').should('be.visible');
    cy.log('First coffee cup is displayed');
    coffeeCup.coffeeCupHeadingDisplayed('Espresso');
    cy.get('h4').find('small').eq(0).contains('$').should('be.visible');
    cy.get('.cup').eq(0).should('be.visible');
  },
  verifyMenuCartValue: (cartValue) => {
    cy.get('li').find('[href="/cart"]').contains(`cart (${cartValue})`);
  },
  verifyCheckoutValue: (checkoutValue) => {
    cy.get('[data-test="checkout"]').should(
      'contain.text',
      `Total: $${checkoutValue}`
    );
  },
  addToCartModalDisplayed: () => {
    cy.get('[data-cy="add-to-cart-modal"]').then((addToCartModal) => {
      cy.wrap(addToCartModal).should('be.visible');
      cy.wrap(addToCartModal).find('button').contains('Yes');
      cy.wrap(addToCartModal).find('button').contains('No');
    });
  },
  productOfferModalDisplayed: () => {
    cy.get('.promo').should('be.visible');
    cy.get('.promo').contains(
      `It's your lucky day! Get an extra cup of Mocha for $4.`
    );
    coffeeCup.coffeeCupIngredientsDisplayed('(Discounted)-Mocha', [
      'whipped cream',
      'steamed milk',
      'chocolate syrup',
      'espresso',
    ]);
    cy.get('.promo').find('.buttons').contains('Yes, of course!');
    cy.get('.promo').find('.buttons').contains(`Nah, I'll skip.`);
  },
};

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
