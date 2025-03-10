Cypress.Commands.add('resetPassword', (email) => {
    cy.visit("https://africhange-web-staging-eab9097ac535.herokuapp.com/login");
    cy.get("a[href='/forgetpassword']").click();
    //cy.get('.required').should('contain', '*').and('be.visible');
    cy.get('input[name="Email"]').type(email);
    cy.get("button").contains("Continue").click();
    // Hello
    });
