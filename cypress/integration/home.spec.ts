/// <reference types="Cypress" />

describe('Home Page ', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should list two cards to choice', () => {
    cy.get('[href="/heroes"]').should('be.visible');
    cy.get('[href="/beers"]').should('be.visible');
  });

  it('should list a heroes card', () => {
    cy.get('[href="/heroes"] > .sc-AxhCb > div > strong').should(
      'contain.text',
      'Heróis',
    );
  });

  it('should be list a Beers card', () => {
    cy.get('[href="/beers"] > .sc-AxhCb > div > strong').should(
      'contain.text',
      'Cervejas',
    );
  });

  it('should be able to access heroes content', () => {
    cy.get('[href="/heroes"]').click();
    cy.get('.sc-AxheI').should('contain.text', 'MARVEL API');
  });

  it('should be able to access beers content', () => {
    cy.get('[href="/beers"]').click();
    cy.get('.sc-AxheI').should('contain.text', 'PUNK API');
  });
});
