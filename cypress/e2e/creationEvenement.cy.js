describe('', () => {
  it("Suppression d'un évenement", () => {
    cy.visit(
      'https://calendly.com/users/confirmation?confirmation_token=VsSGnfaEmapBZpwKsSNm'
    );
    cy.get('[name="password"]').click().type('jonathanTestCalendly123');
    cy.contains('Continuer').click();
    cy.get('#onetrust-reject-all-handler').click();
    cy.get('input[type="checkbox"]').each(($elem, index) => {
      if (index === 1) {
        cy.wrap($elem).click({ force: true });
      }
    });
    cy.get(
      '[class="QDMFZL84dmkYn_0UnY8k RCy3C8tdsCfUkZ4tL6_j Y9hbVvdzlYyJiEWjJ9oy fmlLT3BGyLhEUKMImecT _drff0xP0ecktVJak07B _9FU_yg64fo4CH5kkNow cBJ4O_EakspfEJbJujzx"]'
    ).click();
    cy.get(
      '.Q7UGjqL_GKkhwuE5SBMq > .tM53syywJyhDRyPUDkhB > ._6n0CRU_Q9ef6f3sgBGZ'
    ).click();
  });
});
