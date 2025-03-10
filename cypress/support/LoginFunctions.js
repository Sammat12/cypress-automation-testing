Cypress.Commands.add("loginToAfrichangeWeb", (email, password) => {
  cy.fixture("Elements").then((sm) => {
    cy.findAllByPlaceholderText("name@example.com").first().type(email);
    cy.findAllByPlaceholderText("Your password").first().type(password);
    cy.get(sm.Login_button).contains("Continue").click();
    cy.get(sm.Display_Message).and("contain", "Hello");
    cy.get('[class="flex mt-5 gap-5 overflow-x-auto whitespace-nowrap"]')
      .should("be.visible")
      .and("contain", "CAD Wallet");
    cy.contains("span", "Logout").should("be.visible").click();
  });
});

Cypress.Commands.add("InvalidPassword", (email, password) => {
  cy.fixture("Elements").then((sm) => {
    cy.findAllByPlaceholderText("name@example.com").first().type(email);
    cy.findAllByPlaceholderText("Your password").first().type(password);
    cy.get(sm.Login_button).contains("Continue").click();
  });
});

Cypress.Commands.add("InvalidEmail", (email, password) => {
  cy.findAllByPlaceholderText("name@example.com").first().type(email);
  cy.contains("span", "Not a valid email address").should("be.visible");
});
Cypress.Commands.add("DisplayPassword", (email, password) => {
  cy.fixture("Elements").then((sm) => {
    cy.findAllByPlaceholderText("name@example.com").first().type(email);
    cy.findAllByPlaceholderText("Your password").first().type(password);
    cy.get('[class="w-4 h-4 text-gray-500"]').click();
    cy.get(sm.Login_button).contains("Continue").click();
  });
});
