/// <reference types="Cypress" />

describe('Heros Page ', () => {
  beforeEach(() => {
    cy.visit('/heroes');
  });

  it('should able to access hero content', () => {
    cy.get('.sc-AxheI').should('contain.text', 'MARVEL API');
  });

  it('should able to list classic heroes', () => {
    cy.get('.sc-fznyAO > :nth-child(2)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Absorbing Man');
    cy.get('.sc-fznZeY > :nth-child(1) > p').should(
      'contain.text',
      'Sem descrição',
    );
  });

  it('should able to list ultimante x-man', () => {
    cy.get('.sc-fznyAO > :nth-child(3)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Beast (Ultimate)');
    cy.get('.sc-fznZeY > :nth-child(1) > p').should(
      'contain.text',
      'Sem descrição',
    );
  });

  it('should able to list ultimante spider man', () => {
    cy.get('.sc-fznyAO > :nth-child(4)').click();
    cy.get(':nth-child(1) > strong').should(
      'contain.text',
      'Crusher Hogan (Ultimate)',
    );
    cy.get('.sc-fznZeY > :nth-child(1) > p').should(
      'contain.text',
      'Sem descrição',
    );
  });

  it('should able to list age of Apocalypse', () => {
    cy.get('.sc-fznyAO > :nth-child(5)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Apocalypse');
    cy.get('.sc-fznZeY > :nth-child(1) > :nth-child(3)').should(
      'contain.text',
      'Sem descrição',
    );
  });

  // it('should able to find a specific beer', () => {
  //   cy.get('input').click().type('Buzz');
  //   cy.get('.sc-AxmLO').click();

  //   cy.get('strong').should('contain.text', 'Buzz');
  //   cy.get('.sc-fzqNJr > :nth-child(3)').should(
  //     'contain.text',
  //     'A Real Bitter Experience.',
  //   );
  // });

  // it('should able to find and like a specific beer', () => {
  //   cy.get('input').click().type('Buzz');
  //   cy.get('.sc-AxmLO').click();

  //   cy.get('strong').should('contain.text', 'Buzz');
  //   cy.get('.sc-fzqNJr > :nth-child(3)').should(
  //     'contain.text',
  //     'A Real Bitter Experience.',
  //   );

  //   cy.get('.sc-fzqNJr > button').click();
  //   cy.get('.jVmhHf > div > strong').should('contain.text', 'Item adicionado');
  // });

  // it('should able to find, like and unlike a specific beer', () => {
  //   cy.get('input').click().type('Buzz');
  //   cy.get('.sc-AxmLO').click();

  //   cy.get('strong').should('contain.text', 'Buzz');
  //   cy.get('.sc-fzqNJr > :nth-child(3)').should(
  //     'contain.text',
  //     'A Real Bitter Experience.',
  //   );

  //   cy.get('.sc-fzqNJr > button').click();
  //   cy.get('.jVmhHf > div > strong').should('contain.text', 'Item adicionado');

  //   cy.get('.sc-fzqNJr > button').click();
  //   cy.get('.gmnvuv > div > strong').should('contain.text', 'Item removido');
  // });
});
