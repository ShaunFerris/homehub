describe("The homepage", () => {
  it("loads the page correctly", () => {
    cy.visit("/");
  });

  /**
   * Tests for all the static content and titles.
   */
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
    cy.get("[data-test='login-card-container']");
  });

  /**
   * Tests for card menu in non authenticated state.
   * Tests for login prompt when no auth cookie present.
   */
  it("displays the loading spinner on initial load", () => {
    cy.get("[data-test='loading-spinner']");
  });

  it("displays login prompt when unauthenticated", () => {
    cy.logOut();
    //next has chunk errors sometimes that don't affect ux, log and move on
    cy.logChunkError();
    cy.visit("/");
    cy.intercept("GET", "/api/auth/session").as("session");
    //wait for response from the get request before testing menu content
    cy.wait("@session", { timeout: 8000 }).then(() => {
      cy.get("[data-test='login-prompt']")
        .should("contain", "Login to access your home planning tools")
        .and(
          "contain",
          "We currently only support the home of the site's creator, so unfortunately, if you do not live with me, you cannot use this service."
        )
        .and("contain", "Login");
    });
  });

  /**
   * Tests for the card menu in a mock authenticated state.
   * Tests card menu load, card menu nav, and logout.
   */
  it("displays the card nav menu when authenticated", () => {
    cy.login(process.env.TEST_USER, process.env.TEST_PASS);
    //same work around as the above test
    cy.logChunkError();
    cy.visit("/");
    cy.intercept("GET", "/api/auth/session").as("session");
    //wait for response from the get request before testing menu content
    cy.wait("@session", { timeout: 8000 }).then(() => {
      cy.get("[data-test='card-menu']")
        .should("contain", "Budget Tracker")
        .and("contain", "TODO List")
        .and("contain", "Shopping List");
    });
  });

  it("navigates to the budget route on button press", () => {
    cy.visit("/");
    cy.wait(5000);
    cy.get("[data-test='budget-button']").click();
    cy.waitForData(8000).then(() => {
      cy.url().should("include", "budget");
    });
  });

  it("navigates to the TODO route on button press", () => {
    cy.visit("/");
    cy.wait(5000);
    cy.get("[data-test='todo-button']").click();
    cy.intercept("GET", "/api/todo").as("pageLoad");
    cy.waitForData(8000).then(() => {
      cy.url().should("include", "todo");
    });
  });

  it("navigates to the shoplist route on button press", () => {
    cy.visit("/");
    cy.wait(5000);
    cy.get("[data-test='shop-button']").click();
    cy.intercept("GET", "/api/shoplist").as("pageLoad");
    cy.waitForData(8000).then(() => {
      cy.url().should("include", "shoplist");
    });
  });

  it("clicks the logout button and checks the token is gone", () => {
    cy.visit("/");
    cy.wait(5000);
    cy.get("[data-test='logout-button']").click();
    cy.intercept("POST", "/api/auth/signout").as("signout");
    cy.wait("@signout", { timeout: 8000 }).then(() => {
      cy.getCookie("next-auth.session-token").should("not.exist");
    });
  });
});
