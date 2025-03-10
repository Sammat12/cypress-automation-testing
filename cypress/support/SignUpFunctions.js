Cypress.Commands.add('SignUpToAfrichange', () => {
    cy.contains('a', 'Sign Up Now').click();
    cy.contains("Phone Number");
    cy.select('class="flex gap-2 items-center"]');
    cy.findByPlaceholderText("9000000000").first().type("6135180432");
    
});