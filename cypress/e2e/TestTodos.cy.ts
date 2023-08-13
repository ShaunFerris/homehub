describe("The TODO list page", () => {
  it("loads the page correctly", () => {
    cy.visit("/todo");
  });

  /**
   * Test for access denial when logged out
   */
  it("shows access denied msg when not authenticated", () => {
    cy.accessCheck("/todo");
  });

  /**
   * Tests for the static content and titles.
   */
  it("contains the expected titles and content when logged in", () => {});
});
