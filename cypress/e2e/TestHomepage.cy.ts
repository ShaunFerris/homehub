import "cypress-wait-until";

describe("The homepage", () => {
  it("loads the page correctly", () => {
    cy.visit("/");
  });

  //tests for the static titles and text content
  it("contains the expected titles and content", () => {
    cy.get("[data-test='heading-one']").contains("homeHub");
    cy.get("[data-test='heading-two']").contains(
      "Get Your Shit Together"
    );
    cy.get("[data-test='homepage-description']").contains(
      "Organize your life and keep track of tasks that need to be done to keep your house in order."
    );
    cy.get("[data-test='homepage-footer']")
      .should("contain", "Built by Shaun Ferris")
      .and("contain", "Source code available on Github.");
  });

  //TODO: grab the links in the footer and follow them to confirm

  //tests for card menu in non-authenticated state
  it("displays the card menu", () => {
    cy.get("[data-test='login-card-container']");
  });
  it("displays the loading spinner", () => {
    cy.get("[data-test='loading-spinner']");
  });
  it("displays login prompt when unauthenticated", () => {
    cy.logOut().then(() => {
      cy.visit("/");
    });
    cy.get("[data-test='login-card-container']")
      .should("contain", "Login to access your home planning tools")
      .and(
        "contain",
        "We currently only support the home of the site's creator, so unfortunately, if you do not live with me, you cannot use this service."
      )
      .and("contain", "Login");
  });

  //tests for card menu content in mock authenticated state
  it("displays the card nav menu when authenticated", () => {
    cy.login(process.env.TEST_USER, process.env.TEST_PASS);
    cy.get("[data-test='login-card-container']")
      .should("contain", "Budget Tracker")
      .and("contain", "TODO List")
      .and("contain", "Shopping List");
  });
});
