/// <reference types="Cypress" />

describe('Beers Page ', () => {
  beforeEach(() => {
    cy.visit('/beers');
  });

  it('should able to access beers content', () => {
    cy.get('.sc-AxheI').should('contain.text', 'PUNK API');
  });

  it('should able to list all beers', () => {
    cy.get('.sc-fznyAO > :nth-child(2)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Buzz');
    cy.get('.sc-fznZeY > :nth-child(1) > :nth-child(3)').should(
      'contain.text',
      'A Real Bitter Experience.',
    );
  });

  it('should able to list darker beers', () => {
    cy.get('.sc-fznyAO > :nth-child(3)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Pilsen Lager');
    cy.get('.sc-fznZeY > :nth-child(1) > :nth-child(3)').should(
      'contain.text',
      'Unleash the Yeast Series.',
    );
  });
  it('should able to list clearer beers', () => {
    cy.get('.sc-fznyAO > :nth-child(4)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Trashy Blonde');
    cy.get('.sc-fznZeY > :nth-child(1) > :nth-child(3)').should(
      'contain.text',
      'You Know You Shouldn',
    );
  });

  it('should able to list bitter beers', () => {
    cy.get('.sc-fznyAO > :nth-child(5)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Buzz');
    cy.get('.sc-fznZeY > :nth-child(1) > :nth-child(3)').should(
      'contain.text',
      'A Real Bitter Experience.',
    );
  });

  it('should able to list smooth beers', () => {
    cy.get('.sc-fznyAO > :nth-child(6)').click();
    cy.get(':nth-child(1) > strong').should(
      'contain.text',
      'Berliner Weisse With Yuzu - B-Sides',
    );
    cy.get('.sc-fznZeY > :nth-child(1) > :nth-child(3)').should(
      'contain.text',
      'Japanese Citrus Berliner Weisse.',
    );
  });

  it('should able to list high alcohol content beers', () => {
    cy.get('.sc-fznyAO > :nth-child(7)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Buzz');
    cy.get('.sc-fznZeY > :nth-child(1) > :nth-child(3)').should(
      'contain.text',
      'A Real Bitter Experience.',
    );
  });

  it('should able to list low alcohol content beers', () => {
    cy.get('.sc-fznyAO > :nth-child(8)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Skull Candy');
    cy.get('.sc-fznZeY > :nth-child(1) > :nth-child(3)').should(
      'contain.text',
      'Pacific Hopped Amber Bitter.',
    );
  });

  it('should able to find a specific beer', () => {
    cy.get('input').click().type('Buzz');
    cy.get('.sc-AxmLO').click();

    cy.get('strong').should('contain.text', 'Buzz');
    cy.get('.sc-fzqNJr > :nth-child(3)').should(
      'contain.text',
      'A Real Bitter Experience.',
    );
  });

  it('should able to find and like a specific beer', () => {
    cy.get('input').click().type('Buzz');
    cy.get('.sc-AxmLO').click();

    cy.get('strong').should('contain.text', 'Buzz');
    cy.get('.sc-fzqNJr > :nth-child(3)').should(
      'contain.text',
      'A Real Bitter Experience.',
    );

    cy.get('.sc-fzqNJr > button').click();
    cy.get('.jVmhHf > div > strong').should('contain.text', 'Item adicionado');
  });

  it('should able to find, like and unlike a specific beer', () => {
    cy.get('input').click().type('Buzz');
    cy.get('.sc-AxmLO').click();

    cy.get('strong').should('contain.text', 'Buzz');
    cy.get('.sc-fzqNJr > :nth-child(3)').should(
      'contain.text',
      'A Real Bitter Experience.',
    );

    cy.get('.sc-fzqNJr > button').click();
    cy.get('.jVmhHf > div > strong').should('contain.text', 'Item adicionado');

    cy.get('.sc-fzqNJr > button').click();
    cy.get('.gmnvuv > div > strong').should('contain.text', 'Item removido');
  });
});
