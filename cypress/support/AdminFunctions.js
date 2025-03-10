Cypress.Commands.add('loginToAfrichange', (email = 'loray@africhange.com', password = 'Passw0rd@') => {
    cy.visit('https://africhange-admin-test.herokuapp.com/');
    cy.get("input[type='email']").type(email);
    cy.get("input[type='password']").type(password);
    cy.get("button[type='submit']").click();
});
