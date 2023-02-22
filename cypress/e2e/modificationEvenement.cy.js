// <reference types="cypress" />

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


