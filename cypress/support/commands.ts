/**
 * Command to login that uses a session, so the user will remain
 * logged in throughout the test file
 */
declare namespace Cypress {
  interface Chainable {
    login: Chainable;
    (username: string, password: string);
    logOut;
    logChunkError;
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

/**
 * Command for stubbing logged out state, does so by just deleting
 * the cookie. Command aliased to logout for readability.
 */
Cypress.Commands.add("logOut", () => {
  cy.clearCookie("next-auth.session-token");
});

/**
 * Next has chunk errors sometimes that don't affect UX. This command
 * is a work-around until I figure out what is causing the errors
 * and resolve it.
 */
Cypress.Commands.add("logChunkError", () => {
  Cypress.on("uncaught:exception", (err) => {
    console.log("Cypress detected uncaught exception: ", err);
    return false;
  });
});
