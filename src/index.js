Cypress.Commands.add("fillForm", function (fileName) {
  cy.fixture(fileName).then((data) => {
    cy.log(data);
    Cypress._.keys(data).forEach((key) => {
      const value = data[key];
      cy.task("getFakerData", value).then((value) => {
        cy.get(`[name='${key}']`).then((element) => {
          const eleTag = element.prop("tagName");
          cy.wrap(element).as("queryElement");
          cy.log(eleTag);
          if (eleTag.toLowerCase() === "select") {
            cy.get("@queryElement").parent().click({ force: true });
            cy.selectFromDropDown(value);
          } else {
            cy.wrap(element).type(value);
          }
        });
      });
    });
  });
});
