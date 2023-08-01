/**
 * Tests to confirm that the custom cypress comands for stubbing a
 * logged in or logged out user state are working correctly
 */

describe("Emulate login and logout on the home page", () => {
  it("Visits the page and stubs logout", () => {
    cy.visit("/");
    cy.logOut();
    cy.get("[data-test='login-prompt']");
  });

  it("visits the page and stubs login", () => {
    cy.visit("/");
    cy.login(process.env.TEST_USER, process.env.TEST_PASS);
    cy.get("[data-test='card-menu']");
  });
});
