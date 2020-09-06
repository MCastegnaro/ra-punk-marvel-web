/// <reference types="Cypress" />

describe('Heros Page ', () => {
  beforeEach(() => {
    cy.visit('/heroes');
  });

  it('should be able to access hero content', () => {
    cy.get('.sc-AxheI').should('contain.text', 'MARVEL API');
  });

  it('should be able to list classic heroes', () => {
    cy.get('.sc-fznyAO > :nth-child(2)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Absorbing Man');
    cy.get('.sc-fznZeY > :nth-child(1) > p').should(
      'contain.text',
      'Sem descrição',
    );
  });

  it('should be able to list ultimante x-man', () => {
    cy.get('.sc-fznyAO > :nth-child(3)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Beast (Ultimate)');
    cy.get('.sc-fznZeY > :nth-child(1) > p').should(
      'contain.text',
      'Sem descrição',
    );
  });

  it('should be able to list ultimante spider man', () => {
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

  it('should be able to list age of Apocalypse', () => {
    cy.get('.sc-fznyAO > :nth-child(5)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Apocalypse');
    cy.get('.sc-fznZeY > :nth-child(1) > p').should(
      'contain.text',
      'Sem descrição',
    );
  });

  it('should be able to find a specific hero', () => {
    cy.get('input').click().type('Hulk');
    cy.get('.sc-AxmLO').click();

    cy.get('strong').should('contain.text', 'Hulk');

    cy.get('.sc-fznZeY > :nth-child(1) > p').should(
      'contain.text',
      'Caught in a gamma bomb explosion while trying to save the life of a teenager',
    );
  });

  it('should be able to find and like a specific hero', () => {
    cy.get('input').click().type('Hulk');
    cy.get('.sc-AxmLO').click();

    cy.get('strong').should('contain.text', 'Hulk');

    cy.get('.sc-fznZeY > :nth-child(1) > p').should(
      'contain.text',
      'Caught in a gamma bomb explosion while trying to save the life of a teenager',
    );

    cy.get('.sc-fzokOt > button').click();
    cy.get('.sc-fzoLsD > div > strong').should(
      'contain.text',
      'Item adicionado',
    );
  });

  it('should be able to find, like and unlike a specific hero', () => {
    cy.get('input').click().type('Hulk');
    cy.get('.sc-AxmLO').click();

    cy.get('strong').should('contain.text', 'Hulk');

    cy.get('.sc-fznZeY > :nth-child(1) > p').should(
      'contain.text',
      'Caught in a gamma bomb explosion while trying to save the life of a teenager',
    );

    cy.get('.sc-fzokOt > button').click();
    cy.get('.sc-fzoLsD > div > strong').should(
      'contain.text',
      'Item adicionado',
    );

    cy.get('.sc-fzokOt > button').click();
    cy.get('.sc-fzoLsD > div > strong').should('contain.text', 'Item removido');
  });

  it('should be able to list liked heroes', () => {
    cy.get('.sc-fznyAO > :nth-child(2)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Absorbing Man');
    cy.get('.sc-fznZeY > :nth-child(1) > p').should(
      'contain.text',
      'Sem descrição',
    );

    cy.get(':nth-child(1) > button > svg').click();
    cy.get('.sc-fzoLsD > div > strong').should(
      'contain.text',
      'Item adicionado',
    );

    cy.get('[href="/liked-heroes"]').click();
    cy.get('.sc-AxheI').should('contain.text', 'HERÓIS FAVORITOS');
    cy.get('strong').should('contain.text', 'Absorbing Man');
  });

  it('should be able to list liked heroes and back to home list', () => {
    cy.get('.sc-fznyAO > :nth-child(2)').click();
    cy.get(':nth-child(1) > strong').should('contain.text', 'Absorbing Man');
    cy.get('.sc-fznZeY > :nth-child(1) > p').should(
      'contain.text',
      'Sem descrição',
    );

    cy.get(':nth-child(1) > button > svg').click();
    cy.get('.sc-fzoLsD > div > strong').should(
      'contain.text',
      'Item adicionado',
    );

    cy.get('[href="/liked-heroes"]').click();
    cy.get('.sc-AxheI').should('contain.text', 'HERÓIS FAVORITOS');
    cy.get('strong').should('contain.text', 'Absorbing Man');
    cy.get('a').should('contain.text', 'Voltar').click();
    cy.get('.sc-AxheI').should('contain.text', 'MARVEL API');
  });
});
