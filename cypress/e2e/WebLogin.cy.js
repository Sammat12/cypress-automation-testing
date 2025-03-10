const Email = Cypress.env('Email')
const Password = Cypress.env('Password')
const Email1 = Cypress.env('Email1')
const Password1 = Cypress.env('Password1')
describe("Africhange Web Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
    it("Africhange Login Using Valid credential", () => {
    cy.loginToAfrichangeWeb(Email, Password);
  });
  it("Africhange Login Using Invalid Password", () => {
    cy.InvalidPassword(Email1, Password1);
  });
  it("Africhange Login Using Invalid Email", () => {
    cy.InvalidEmail('sammat12@yahoo.c', Password);
  });
  it("Africhange Display Password", () => {
    cy.DisplayPassword(Email, Password); 
   });
 
});
