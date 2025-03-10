const Email = Cypress.env('Email1')
describe('Africhange Password Reset', () => {
    it('should navigate to password reset and submit email', () => {
        cy.resetPassword(Email);
       
    });
});
