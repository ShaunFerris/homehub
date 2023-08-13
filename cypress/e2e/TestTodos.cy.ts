describe("The TODO list page", () => {
  it("loads the page correctly", () => {
    cy.visit("/todo");
  });

  /**
   * Test for access denial when logged out
   */
  it("shows access denied msg when not authenticated", () => {});
});
