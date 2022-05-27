// https://docs.cypress.io/api/introduction/api.html

describe("Wizard Test", () => {
  it("visits the app root url (step 1)", () => {
    cy.contains("h1", "Hello there");
  });
  it("presses button to proceed to step 2", () => {
    cy.contains("h1", "Hello there");
    cy.contains('Start').click();
    cy.contains("h1", "Tell us about yourself");
  });
  it("correctly fills the form on step 2", () => {
    cy.contains('Start').click();
    cy.get("button:contains('Next')").should("be.disabled");
    // fill required fields
    cy.get("input[placeholder=Add text]").type('John Doe')
    cy.get("input[placeholder=Age]").type('55')
    cy.get("button:contains('Next')").should("be.enabled");
    cy.get(".premium").should('contain.text', 'hi')
  });
});
