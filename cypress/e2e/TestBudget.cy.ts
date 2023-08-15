describe("The pages on the budgeting app route", () => {
  /**
   * BUDGET SELECT PAGE:
   *    Tests for access control and static content.
   */
  it("loads the budget select page correctly", () => {
    cy.visit("/budget");
  });

  it("shows access denied msg when not authenticated", () => {
    cy.accessCheck("/budget");
  });

  it("displays the titles and content containers when logged in", () => {
    cy.login(process.env.TEST_USER, process.env.TEST_PASS);
    cy.visit("/budget");
    cy.wait(3000);
    cy.get("[data-test='budget-title']").contains("Budget Tracking");
    cy.get("[data-test='budget-subtitle'").contains(
      "Choose an existing budget or make a new one."
    );
    cy.get("[data-test='budget-selectPageWrapper']")
      .find("[data-test='budget-selectHeading1']")
      .contains("Existing Budgets");
  });
});
