
import SignUpToAfrichange from "../support/SignUpFunctions";
describe('Signup To Africhange', () =>{
    beforeEach(() => {
      cy.visit("/")
    })
    it("Singup with valid credential", () => {
        cy.SignUpToAfrichange();


    })
  })