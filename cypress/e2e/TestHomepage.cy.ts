describe("The homepage", () => {
  it("loads the page correctly", () => {
    cy.visit("/");
  });

  it("contains the expected titles and content", () => {
    cy.get(".head_text").contains("homeHub");
    cy.get(".logo_text").contains("homeHub");
    cy.get(".desc").contains(
      "Organize your life and keep track of tasks that need to be done to keep your house in order."
    );
    cy.get(".site_footer_1")
      .get(".site_footer_2") //test if it still selects with the gone
      .get("p")
      .contains("a"); //filter by text content instead of anchor tag
    //apply another filter for the other footer p tag here
  });

  //grab the links in the footer and follow them to confirm

  it("displays the card menu", () => {
    cy.get(".card_container");
  });
});
