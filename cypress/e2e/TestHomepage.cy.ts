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
  it("displays login prompt when unauthenticated", () => {
    cy.get("[data-test='login-card-container']")
      .should("contain", "Login to access your home planning tools")
      .and(
        "contain",
        "We currently only support the home of the site's creator, so unfortunately, if you do not live with me, you cannot use this service."
      )
      .and("contain", "Login");
  });
});
