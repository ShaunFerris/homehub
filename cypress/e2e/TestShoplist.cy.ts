describe("The shopping list page", () => {
  it("loads the page correctly", () => {
    cy.visit("/shoplist");
  });

  /**
   * Test for access denial when logged out
   */
  it("Shows access denied msg when not authenticated", () => {
    cy.logChunkError();
    cy.logOut();
    cy.visit("/shoplist");
    cy.waitForData(8000).then(() => {
      cy.get("[data-test='access-msg']").contains("Access Denied");
    });
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
  it("shows the loading spinner on initial load", () => {
    cy.visit("/shoplist");
    cy.get("[data-test='loading-spinner']");
  });

  it("renders the input component post load", () => {
    cy.waitForData(8000).then(() => {
      cy.get("[data-test='shoplist-input']");
    });
  });

  it("adds an item on submit", () => {
    cy.get("[data-test='shoplist-input']").type("test item");
    cy.get("[data-test='shoplist-submit']").click();
    cy.get("[data-test='shoplist-list']").should(
      "contain",
      "test item"
    );
  });
});
