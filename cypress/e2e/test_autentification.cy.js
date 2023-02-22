// <reference types="cypress" />

describe("connexion reussi a un compte", () => {
	it("connexion passante", () => {
        cy.visit("https://calendly.com/users/confirmation?confirmation_token=VsSGnfaEmapBZpwKsSNm");
        cy.get('[name="password"]').click().type('jonathanTestCalendly123');
        cy.contains('Continuer').click();
        cy.get('#onetrust-reject-all-handler').click();
        cy.get('[data-testid="event-type-card-150495372"] > .q2ovdrDio1O20z_RQrJk > .Oq2YrD4C9wTAnhviKPh1 > .A7tqJ6C1P8YpEgrEWrXi').click();
        cy.get(':nth-child(1) > :nth-child(1) > .SZMt7ETD2nqaZyzpJ27G').click();
        cy.get(':nth-child(2) > :nth-child(2) > .S1Ux16_NLOefrMjLsfrY > .EOucS6QiITe8Rc3WGfSf > .vihfdnuRI1GZ1U9jAe0Y > ._Fhv8x7S7VIOKRzoemM9 > .jUyQ4qy0XBb5sflvXnT3').click();
        cy.get('.yxQGz4TmlpbuYIBmmeqn > .G6zD78qHWQLbFGF4NRX3 > .GW7SY9S_Y6rZoSt3T8Jz > .Nt4RAzntWwS1PxuPWOZz > ._rBDIkcDYEF3OUayaJZN').click();
        cy.get('.QT1u_Phi_EtB6nHAL_JC > .gfWNF2O3oWuGTN06FN20').click();
        cy.get(':nth-child(2) > .zXzb6ccDvFv1Ps1CKKrl > tbody > :nth-child(1) > :nth-child(4) > ._G2r5Az_J2Ifw25nCbp8').click();
        cy.get(':nth-child(2) > .zXzb6ccDvFv1Ps1CKKrl > tbody > :nth-child(2) > :nth-child(2) > ._G2r5Az_J2Ifw25nCbp8').click();
        cy.get('._ljtdZ_W2eZUA5OGhfAg > .tM53syywJyhDRyPUDkhB').click();
        // cy.wait(3000);
        cy.get(':nth-child(2) > .nFgxsFof_Xf4LNSohcdQ').click();
        cy.get('input[type="checkbox"]').eq(6).check({force:true});
        cy.get('._PcAXuW5R5Zo1YeM17a5').click();
        cy.get('input[maxlength="255"]').type('Plan');
        cy.get('.Q7UGjqL_GKkhwuE5SBMq > .tM53syywJyhDRyPUDkhB').click();
        cy.get('input[name="hasAfterBuffer"]').check({force:true});
        cy.get(':nth-child(2) > .TcQI0OidLOPsh_vBPuH6 > .H6CbI5YTr5dROdAyEZMR > .PAft3yNcTUafvfdpD_me').click();
        // cy.wait(3000);
        cy.get('.c19rtmAvr7JN2jpx6_bz').find('.XDThZI4HN_JBA1xI6pMf').eq(5).click();
        cy.get('.tGhK7ML8OFGkwwjZ_BSE > .H6CbI5YTr5dROdAyEZMR > .PAft3yNcTUafvfdpD_me').click();
        cy.get('.c19rtmAvr7JN2jpx6_bz').find('.XDThZI4HN_JBA1xI6pMf').eq(3).click();
        cy.get('.XCje5h1w6nncW8JWTp61 > ._jntWzJ5Kez7y4_z6YDF > ._6n0CRU_Q9ef6f3sgBGZ').click();
	});

});