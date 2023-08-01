/**
 * Command to login that uses a session, so the user will remain
 * logged in throughout the test file
 */
declare namespace Cypress {
  interface Chainable {
    login: Chainable;
    (username: string, password: string);
    logOut;
  }
}

Cypress.Commands.add("login", (username, password) => {
  cy.session([username, password], () => {
    cy.intercept("/api/auth/session", { fixture: "session.json" }).as(
      "session"
    );
    /**
     * Set the cookie for Cypress.
     * Must be a valid cookie so that Next-Auth can decode.
     * Cookie must be refreshed when it expires. Keep an eye out for
     * future fixes to this workaround.
     */
    cy.setCookie(
      "next-auth.session-token",
      Cypress.env("TEST_SESSION_COOKIE")
    );
  });
});

Cypress.Commands.add("logOut", () => {
  //Currently stubbing a logged out state by just clearing the cookie
  cy.intercept("api/auth/session", {});
});
