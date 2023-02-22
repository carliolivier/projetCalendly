// <reference types="cypress" />

describe("connexion reussi a un compte", () => {
	it("connexion passante", () => {
		cy.visit("https://calendly.com/");
		cy.wait(3000);
		cy.get("#onetrust-accept-btn-handler").click();
		cy.wait(3000);
		cy.get("#right-side-components > :nth-child(1) > .sc-1e4rkx0-0").click();
		cy.wait(3000);
		cy.get(".sc-r1giur-0").type("iammmahfoud@gmail.com", { force: true });
		cy.get('[data-testid="primary-button"]').click({ force: true });
		cy.get("form").within(() => {
			cy.get('input[name="password"]').type("Test2023");
			cy.get("button").find("div").click({ force: true });
			cy.wait(2000);
		});
	});

	it("Connexion non passante avec un mot de passe erroné", () => {
		cy.visit("https://calendly.com/");
		cy.wait(3000);
		cy.get("#onetrust-accept-btn-handler").click();
		cy.wait(3000);
		cy.get("#right-side-components > :nth-child(1) > .sc-1e4rkx0-0").click();
		cy.wait(3000);
		// cy.get('.sc-r1giur-0').type('zitoune59200@yahoo.com');
		cy.get(".sc-r1giur-0").type("iammmahfoud@gmail.com", { force: true });
		cy.get('[data-testid="primary-button"]').click({ force: true });
		cy.get("form").within(() => {
			cy.get('input[name="password"]').type("test2023");
			cy.get("button").find("div").click({ force: true });
			cy.wait(2000);
			cy.contains("Invalid password.").should("be.visible");
		});
	});
	it("Connexion non passante avec un email erroné", () => {
		cy.visit("https://calendly.com/");
		cy.wait(3000);
		cy.get("#onetrust-accept-btn-handler").click();
		cy.wait(3000);
		cy.get("#right-side-components > :nth-child(1) > .sc-1e4rkx0-0").click();
		cy.wait(3000);
		cy.get(".sc-r1giur-0").type("iammmahfoudgmail.com", { force: true });
		cy.get('[data-testid="primary-button"]').click({ force: true });
		cy.contains("Please enter a valid email address.").should("be.visible");
	});

describe("creation d'un évenement", () => {
	it("Création d'un évenement", () => {
		cy.visit(
			"https://calendly.com/users/confirmation?confirmation_token=VsSGnfaEmapBZpwKsSNm"
		);
		cy.get('[name="password"]').click().type("jonathanTestCalendly123");
                cy.get('#onetrust-accept-btn-handler').click();
		cy.contains("Continuer").click();
		cy.get(
			".js-new-event-type-region > :nth-child(1) > .M5lLwMMp9XR_Ejbv83RK > .clyOGp1YInfwtQ8ffY_1 > .M_4ZJy_elGKAc65Rl6DH > ._6n0CRU_Q9ef6f3sgBGZ"
		).click();
		cy.get(
			'[data-component="group"] > .qAwyEnpbreTCu2tzPMOi > ._QVEO42ALEjm3yr8WTJV'
		).click();
		cy.get('[name="name"]').click().type("Cypress");
		cy.get(".PAft3yNcTUafvfdpD_me").click();
		cy.contains("Google Meet").click();
		cy.get('[name="inviteesLimit"]').type("4");
		cy.contains("Suivant").click();
		cy.contains("Suivant").click();
		cy.contains("Retour").click();
		});
	});

describe("Supression d'un évenement", () => {
        it("Suppression d'un évenement", () => {
                cy.visit(
                   'https://calendly.com/users/confirmation?confirmation_token=VsSGnfaEmapBZpwKsSNm'
                );
                cy.get('[name="password"]').click().type('jonathanTestCalendly123');
                cy.get('#onetrust-accept-btn-handler').click();
                cy.contains('Continuer').click();
                cy.get('input[type="checkbox"]').each(($elem, index) => {
                        if (index === 1) {
                                cy.wrap($elem).click({ force: true });
                        }
                });
                cy.wait(3000);
                cy.get(
                        '[class="QDMFZL84dmkYn_0UnY8k RCy3C8tdsCfUkZ4tL6_j Y9hbVvdzlYyJiEWjJ9oy fmlLT3BGyLhEUKMImecT _drff0xP0ecktVJak07B _9FU_yg64fo4CH5kkNow cBJ4O_EakspfEJbJujzx"]'
                ).click();
                cy.get(
                        '.Q7UGjqL_GKkhwuE5SBMq > .tM53syywJyhDRyPUDkhB > ._6n0CRU_Q9ef6f3sgBGZ'
                ).click();
                });
        });

describe("Modification Evenement", () => {
        it("Mofification", () => {
                cy.visit(
                        'https://calendly.com/users/confirmation?confirmation_token=VsSGnfaEmapBZpwKsSNm'
                        );
                cy.get('[name="password"]').click().type('jonathanTestCalendly123');
                cy.get('#onetrust-accept-btn-handler').click();
                cy.contains('Continuer').click();
                cy.get('[data-testid="event-type-card-150496210"] > .js-drag-zone').click();
                cy.get(':nth-child(1) > .S1Ux16_NLOefrMjLsfrY > .EOucS6QiITe8Rc3WGfSf > .vihfdnuRI1GZ1U9jAe0Y > ._Fhv8x7S7VIOKRzoemM9 > .jUyQ4qy0XBb5sflvXnT3').click();
                cy.get('[name="name"]').clear().type('cypress 2');
                cy.get('.ql-editor').type('test test')
                cy.get('[name="inviteesLimit"]').clear().type('6');
                cy.get(':nth-child(8) > .F4K59uGpZ4gwOu7vpA69').click();
                cy.get('._ycHXpUVi7cUuweyfMWM').click();
                cy.get('.XCje5h1w6nncW8JWTp61 > ._jntWzJ5Kez7y4_z6YDF > ._6n0CRU_Q9ef6f3sgBGZ').click();
                cy.get('._fD7lClnPTnx7I5SbTbq > ._6n0CRU_Q9ef6f3sgBGZ').click();          
                });
        });


describe("Modification de la reservation d'un évenement", () => {
        it("modification reservation", () => {
                cy.visit("https://calendly.com/users/confirmation?confirmation_token=VsSGnfaEmapBZpwKsSNm");
                cy.get('[name="password"]').click().type('jonathanTestCalendly123');
                cy.get('#onetrust-accept-btn-handler').click();
                cy.contains('Continuer').click();
                cy.get('[data-testid="event-type-card-150495372"] > .q2ovdrDio1O20z_RQrJk > .Oq2YrD4C9wTAnhviKPh1 > .A7tqJ6C1P8YpEgrEWrXi').click();
                cy.get(':nth-child(1) > :nth-child(1) > .SZMt7ETD2nqaZyzpJ27G').click();
                cy.get(':nth-child(2) > :nth-child(2) > .S1Ux16_NLOefrMjLsfrY > .EOucS6QiITe8Rc3WGfSf > .vihfdnuRI1GZ1U9jAe0Y > ._Fhv8x7S7VIOKRzoemM9 > .jUyQ4qy0XBb5sflvXnT3').click();
                cy.get('.yxQGz4TmlpbuYIBmmeqn > .G6zD78qHWQLbFGF4NRX3 > .GW7SY9S_Y6rZoSt3T8Jz > .Nt4RAzntWwS1PxuPWOZz > ._rBDIkcDYEF3OUayaJZN').click();
                cy.get('.QT1u_Phi_EtB6nHAL_JC > .gfWNF2O3oWuGTN06FN20').click();
                cy.get(':nth-child(2) > .zXzb6ccDvFv1Ps1CKKrl > tbody > :nth-child(1) > :nth-child(4) > ._G2r5Az_J2Ifw25nCbp8').click();
                cy.get(':nth-child(2) > .zXzb6ccDvFv1Ps1CKKrl > tbody > :nth-child(2) > :nth-child(2) > ._G2r5Az_J2Ifw25nCbp8').click();
                cy.get('._ljtdZ_W2eZUA5OGhfAg > .tM53syywJyhDRyPUDkhB').click();
                cy.get(':nth-child(2) > .nFgxsFof_Xf4LNSohcdQ').click();
                cy.get('input[type="checkbox"]').eq(6).check({force:true});
                cy.get('._PcAXuW5R5Zo1YeM17a5').click();
                cy.get('input[maxlength="255"]').type('Plan');
                cy.get('.Q7UGjqL_GKkhwuE5SBMq > .tM53syywJyhDRyPUDkhB').click();
                cy.get('input[name="hasAfterBuffer"]').check({force:true});
                cy.get(':nth-child(2) > .TcQI0OidLOPsh_vBPuH6 > .H6CbI5YTr5dROdAyEZMR > .PAft3yNcTUafvfdpD_me').click();
                cy.get('.c19rtmAvr7JN2jpx6_bz').find('.XDThZI4HN_JBA1xI6pMf').eq(5).click();
                cy.get('.tGhK7ML8OFGkwwjZ_BSE > .H6CbI5YTr5dROdAyEZMR > .PAft3yNcTUafvfdpD_me').click();
                cy.get('.c19rtmAvr7JN2jpx6_bz').find('.XDThZI4HN_JBA1xI6pMf').eq(3).click();
                cy.get('.XCje5h1w6nncW8JWTp61 > ._jntWzJ5Kez7y4_z6YDF > ._6n0CRU_Q9ef6f3sgBGZ').click();
                });
        });
        
});