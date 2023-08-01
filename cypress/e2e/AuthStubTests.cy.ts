/**
 * Tests to confirm that the custom cypress comands for stubbing a
 * logged in or logged out user state are working correctly
 */

describe("Loads login prompt when unauthenticated", () => {
  it("Visits the page and stubs logout", () => {
    cy.logOut();
    cy.visit("/");
    cy.intercept("GET", "/api/auth/session").as("session");
    cy.wait("@session").then(() => {
      cy.get("[data-test='login-prompt']");
    });
  });

  it("loads the menu when authenticated", () => {
    cy.clearCookie("next-auth.session-token");
    cy.login(process.env.TEST_USER, process.env.TEST_PASS);
    cy.visit("/");
    cy.intercept("GET", "/api/auth/session").as("session");
    cy.wait("@session").then(() => {
      cy.get("[data-test='card-menu']");
    });
  });
});
