describe("The homepage", () => {
  it("loads the page correctly", () => {
    cy.visit("/");
  });

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

  //grab the links in the footer and follow them to confirm

  it("displays the card menu", () => {
    cy.get("[data-test='login-card-container']");
  });
});
