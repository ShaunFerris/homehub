describe("The pages on the budgeting app route", () => {
  /**
   * BUDGET SELECT PAGE:
   * Tests for access control and static content.
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
    cy.get("[data-test='budget-subtitle']").contains(
      "Choose an existing budget or make a new one."
    );
    cy.get("[data-test='budget-selectPageWrapper']")
      .find("[data-test='budget-selectHeading1']")
      .contains("Existing Budgets");
    cy.get("[data-test='budget-selectPageWrapper']")
      .find("[data-test='budget-selectHeading2']")
      .contains("Add a new budget tracker");
  });

  /**
   * BUDGET SELECT PAGE:
   * Tests for the operation of the form.
   */
  it("clicks the clear button and confirms the empty msg displays", () => {
    cy.get("[data-test='budget-clearBudgetsButton']").click();
    cy.wait(3000);
    cy.get("[data-test='budget-emptyListMsg']").contains(
      "No budgets available"
    );
  });

  it("confirms the form placeholders and submit button msg", () => {
    cy.get("[data-test='budget-amountInput']")
      .invoke("attr", "placeholder")
      .should("eql", "Enter budget amount...");
    cy.get("[data-test='budget-nameInput']")
      .invoke("attr", "placeholder")
      .should("eql", "Enter budget name...");
    cy.get("[data-test='budget-submitNewBudgetButton").contains(
      "Create your budget tracker"
    );
  });

  it("adds a test budget and confirms that it navigates to the new page", () => {
    cy.get("[data-test='budget-amountInput']").type("420");
    cy.get("[data-test='budget-nameInput']").type("test budget");
    cy.get("[data-test='budget-submitNewBudgetButton']").click();
    cy.wait(4000);
    cy.get("[data-test='budget-currentBudgetTitle']").contains(
      "Displaying data for: test budget"
    );
  });

  it("goes back to the budget select page and confirms the text on the clear button", () => {
    cy.visit("/budget");
    cy.wait(4000);
    cy.get("[data-test='budget-clearBudgetsButton']").contains(
      "Clear budgets list"
    );
  });

  it("confirms the new budget is listed", () => {
    cy.get("[data-test='budget-existingBudgetList']")
      .find("li")
      .contains("test budget");
  });

  /**
   * CURRENT BUDGET PAGE:
   * Tests for access control and initial content on the dynamic page.
   */
  it("follows the link to the test budget dynamic page", () => {
    cy.get("[data-test='budget-existingBudgetList']")
      .find("li")
      .contains("test budget")
      .click();
    cy.wait(4000);
    cy.get("[data-test='budget-currentBudgetTitle']").contains(
      "Displaying data for: test budget"
    );
  });

  it("verifies the layout of the values display component", () => {
    cy.get("[data-test='budget-valuesDisplayWrapper']").within(() => {
      cy.get("[data-test='budget-startingAmountDisplay']");
      cy.get("[data-test='budget-remainingAmountDisplay']");
      cy.get("[data-test='budget-spentAmountDisplay']");
    });
  });

  it("verifies the correct budget amounts", () => {
    cy.get("[data-test='budget-startingAmountDisplay']").contains(
      "Starting budget: $420"
    );
    cy.get("[data-test='budget-remainingAmountDisplay']").contains(
      "Remaining: $420"
    );
    cy.get("[data-test='budget-spentAmountDisplay']").contains(
      "Spent so far: $0"
    );
  });

  it("verifies the expense list module shows and is currently empty", () => {
    cy.get("[data-test='budget-expenseListWrapper']").should("be.visible");
    cy.get("[data-test='budget-expenseListWrapper']").contains("Expenses");
    cy.get("[data-test='budget-noExpensesMsg']").contains(
      "No expenses have been added yet"
    );
  });

  it("verifies the layout of the add expense form", () => {
    cy.get("[data-test='budget-addExpenseFormWrapper']").should("be.visible");
    cy.get("[data-test='budget-addExpenseFormTitle']")
      .contains("Add Expense")
      .should("be.visible");
  });
});
