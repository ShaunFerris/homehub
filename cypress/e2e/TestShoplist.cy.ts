describe("The shopping list page", () => {
  it("loads the page correctly", () => {
    cy.visit("/shoplist");
  });

  /**
   * Test for access denial when logged out
   */
  it("Shows access denied msg when not authenticated", () => {
    cy.logOut();
    cy.get("[data-test='access-msg']").contains("Access Denied");
  });

  /**
   * Tests for the static content and titles.
   */
  it("contains the expected titles and content when logged in", () => {
    cy.login(process.env.TEST_USER, process.env.TEST_PASS);
    cy.visit("/shoplist");
    cy.get("[data-test='shoplist-title']").contains("Shopping List");
    cy.get("[data-test='shoplist-container']");
  });

  /**
   * Tests for loading spinner -> session -> rendered components
   */
});
