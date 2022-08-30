/// <reference types = "cypress" />
require("../..");
it("form fill", () => {
  cy.visit("cypress/index.html");
  cy.fillForm("userData");
});
