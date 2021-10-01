describe("the user is able to see the webpage and game interface", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("is expected to display header", () => {
    cy.get("[data-cy=header]").should(
      "contain",
      "Let's play Rock Paper Scissors!"
    )
  })

  it("is expected to display user", () => {
    cy.get("[data-cy=user]").should("contain", "Your choice:")
  })

  it("is expected to display computer", () => {
    cy.get("[data-cy=user]").should("contain", "Computers choice:")
  })

  it("is expected to display a rock button that can be pressed", () => {
    cy.get("[data-cy=buttonNumber: 0").should("contain", "Rock")
    cy.get("[data-cy=buttonNumber: 0").click()
  })

  it("is expected to display a paper button that can be pressed", () => {
    cy.get("[data-cy=buttonNumber: 1").should("contain", "paper")
    cy.get("[data-cy=buttonNumber: 1").click()
  })

  it("is expected to display a scissor button that can be pressed", () => {
    cy.get("[data-cy=buttonNumber: 1").should("contain", "scissor")
    cy.get("[data-cy=buttonNumber: 1").click()
  })
})