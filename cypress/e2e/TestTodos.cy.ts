describe("The TODO list page", () => {
  it("loads the page correctly", () => {
    cy.visit("/todo");
  });

  /**
   * Test for access denial when logged out.
   */
  it("shows access denied msg when not authenticated", () => {
    cy.accessCheck("/todo");
  });

  /**
   * Tests for the static content and titles.
   */
  it("displays titles and content containers when logged in", () => {
    cy.login(process.env.TEST_USER, process.env.TEST_PASS);
    cy.visit("/todo");
    cy.wait(3000);
    cy.get("[data-test='todo-title']").contains("TODO List");
    cy.get("[data-test='todo-addItemForm']");
    cy.get("[data-test='todo-listContainer']");
    cy.get("[data-test='todo-pendingListContainer']");
    cy.get("[data-test='todo-completedListContainer']");
  });

  it("displays the content subtitles when logged in", () => {
    cy.get("[data-test='todo-pendingList']").contains(
      "Pending Tasks"
    );
    cy.get("[data-test='todo-completedList']").contains(
      "Completed Tasks"
    );
  });

  /**
   * Tests for the operation of the form input
   */
  it("displays the placeholder text and button label correctly", () => {
    cy.get("[data-test='todo-input']")
      .invoke("attr", "placeholder")
      .should("eql", "Add a todo...");
    cy.get("[data-test='todo-submitButton']").contains("Submit");
  });

  it("displays an error msg when submit is clicked without entering a task name", () => {
    cy.get("[data-test='todo-submitButton']").click();
    cy.get("[data-test='todo-invalidTaskMsg']").contains(
      "Please enter a valid name for your task"
    );
  });

  it("adds a new task correctly and this removes the error msg", () => {
    cy.get("[data-test='todo-input']").type("test task 1");
    cy.get("[data-test='todo-submitButton']").click();
    cy.get("[data-test='todo-formWrapper']")
      .find("[data-test='todo-invalidTaskMsg']")
      .should("not.exist");
  });

  /**
   * Tests for operations on individual tasks.
   */
  it("toggles the status of the previously created task", () => {
    cy.get("[data-test='todo-listItem']")
      .find("[data-test='todo-statusToggle']")
      .click();
  });

  it("checks that toggling the task status made it move lists", () => {
    cy.get("[data-test='todo-pendingList']")
      .children()
      .should("not.contain", "ul");
    cy.wait(3000);
    cy.get("[data-test='todo-completedList']")
      .find("ul")
      .should("contain", "test task 1");
  });
});
