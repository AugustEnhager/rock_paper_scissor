describe("Application interface", () => {
  it("successfully renders", () => {
    cy.visit("http://localhost:3000");
    cy.get("#header").should("contain", "Rock Paper Scissor");
    cy.get("#footer").should("contain", "Made with React");
    cy.get("#hello").should("contain", "Hello Wolrd");
  });
});
