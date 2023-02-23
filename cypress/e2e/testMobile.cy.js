describe('mobile-tests', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
  });
  it('Ajouter un évenement', () => {
    // cy.viewport(412, 915);
    cy.visit(
      'https://calendly.com/users/confirmation?confirmation_token=VsSGnfaEmapBZpwKsSNm'
    );
    cy.get('[name="password"]').click().type('jonathanTestCalendly123');
    cy.contains('Continuer').click();
    cy.get('#onetrust-accept-btn-handler').click();
    cy.wait(2000);
    cy.get(
      '.js-new-event-type-region > :nth-child(1) > .M5lLwMMp9XR_Ejbv83RK > .clyOGp1YInfwtQ8ffY_1 > .M_4ZJy_elGKAc65Rl6DH > ._6n0CRU_Q9ef6f3sgBGZ'
    ).click({ force: true });
    cy.get(
      '[data-component="group"] > .qAwyEnpbreTCu2tzPMOi > ._QVEO42ALEjm3yr8WTJV'
    ).click();
    cy.get('[name="name"]').click().type('Cypress');
    cy.get('.PAft3yNcTUafvfdpD_me').click();
    cy.contains('Google Meet').click();
    cy.get('[name="inviteesLimit"]').type('4');
    cy.contains('Suivant').click();
    cy.contains('Suivant').click();
    cy.get('._pBQlfr3dRDRU1QNGlgQ').click();
  });
});
