/// <reference types="Cypress" />

describe('Cypress ', () => {
  it('is working', () => {
    expect(true).to.eq(true);
  });

  it('visit the app', () => {
    cy.visit('/');
  });
});
