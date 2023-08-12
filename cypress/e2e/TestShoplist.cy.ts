describe("The shopping list page", () => {
  it("loads the page correctly", () => {
    cy.visit("/shoplist");
  });

  /**
   * Test for access denial when logged out
   */
  it("Shows access denied msg when not authenticated", () => {
    cy.accessCheck("/shoplist");
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

  /**
   * Tests for the functionality of the list. Adding removing and
   * marking items as complete.
   */
  it("adds an item on submit", () => {
    cy.get("[data-test='shoplist-input']").type("test item");
    cy.get("[data-test='shoplist-submit']").click();
    cy.get("[data-test='shoplist-list']").should(
      "contain",
      "test item"
    );
  });

  it("checks the initial status of the item", () => {
    cy.get("[data-test='shoplist-item']")
      .invoke("attr", "class")
      .then((classList) => classList.split(" "))
      .should("contain", "bg-white");
  });

  it("checks item status change functionality", () => {
    cy.intercept("PATCH", "/api/shoplist/**").as("itemUpdate");
    cy.intercept("GET", "/api/shoplist").as("listUpdate");
    cy.get("[data-test='shoplist-markComplete']").click();
    cy.wait("@itemUpdate").then(() => {
      cy.wait("@listUpdate").then(() => {
        cy.wait(5000);
        cy.get("[data-test='shoplist-item']")
          .invoke("attr", "class")
          .then((classList) => classList.split(" "))
          .should("contain", "bg-green-500");
      });
    });
  });

  it("deletes a single item", () => {
    cy.intercept("DELETE", "/api/shoplist/**").as("itemUpdate");
    cy.intercept("GET", "/api/shoplist").as("listUpdate");
    cy.get("[data-test='shoplist-delete']").click();
    cy.wait("@itemUpdate").then(() => {
      cy.wait("@listUpdate").then(() => {
        cy.wait(5000);
        cy.get("[data-test='shoplist-list']").should(
          "not.contain",
          "test item"
        );
      });
    });
  });

  it("adds two items, clears the list and checks for empty", () => {
    cy.get("[data-test='shoplist-clear']").click();
    cy.get("[data-test='shoplist-list']").should("be.empty");
    cy.get("[data-test='shoplist-input']").type("test item");
    cy.get("[data-test='shoplist-submit']").click();
    cy.wait(2000);
    cy.get("[data-test='shoplist-input']").type("test item 2");
    cy.get("[data-test='shoplist-submit']").click();
    cy.get("[data-test='shoplist-list']")
      .children()
      .should("contain", "test item")
      .and("contain", "test item 2");
    cy.get("[data-test='shoplist-clear']").click();
    cy.get("[data-test='shoplist-list']").should("be.empty");
  });
});
