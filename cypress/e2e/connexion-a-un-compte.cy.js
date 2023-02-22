// <reference types="cypress" />


describe("connexion reussi a un compte", () => {
	it("connexion passante", () => {
        cy.visit("https://calendly.com/");
        cy.wait(3000);
        cy.get('#onetrust-accept-btn-handler').click();
        cy.wait(3000);
        cy.get('#right-side-components > :nth-child(1) > .sc-1e4rkx0-0').click();
        cy.wait(3000);
        // cy.get('.sc-r1giur-0').type('zitoune59200@yahoo.com');
        cy.get('.sc-r1giur-0').type('iammmahfoud@gmail.com', {force:true});
        cy.get('[data-testid="primary-button"]').click({force:true});
        cy.get('form').within(() => {
                
                cy.get('input[name="password"]').type('Test2023');
                cy.get('button').find('div').click({force:true});
                cy.wait(2000);
        })

        
	});

        it("Connexion non passante avec un mot de passe erroné", () => {
                cy.visit("https://calendly.com/");
                cy.wait(3000);
                cy.get('#onetrust-accept-btn-handler').click();
                cy.wait(3000);
                cy.get('#right-side-components > :nth-child(1) > .sc-1e4rkx0-0').click();
                cy.wait(3000);
                // cy.get('.sc-r1giur-0').type('zitoune59200@yahoo.com');
                cy.get('.sc-r1giur-0').type('iammmahfoud@gmail.com', {force:true});
                cy.get('[data-testid="primary-button"]').click({force:true});
                cy.get('form').within(() => {
                        
                        cy.get('input[name="password"]').type('test2023');
                        cy.get('button').find('div').click({force:true});
                        cy.wait(2000);
                        cy.contains('Invalid password.').should('be.visible')
                })
                
                
        });
        it("Connexion non passante avec un email erroné", () => {
                cy.visit("https://calendly.com/");
                cy.wait(3000);
                cy.get('#onetrust-accept-btn-handler').click();
                cy.wait(3000);
                cy.get('#right-side-components > :nth-child(1) > .sc-1e4rkx0-0').click();
                cy.wait(3000);
                // cy.get('.sc-r1giur-0').type('zitoune59200@yahoo.com');
                cy.get('.sc-r1giur-0').type('iammmahfoudgmail.com', {force:true});
                cy.get('[data-testid="primary-button"]').click({force:true});
                cy.contains('Please enter a valid email address.').should('be.visible')
               
                
                        
                        });
});

