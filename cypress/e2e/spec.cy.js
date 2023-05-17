// негативні кейси не автоматизуються, крім того де негативний флоу присутній
describe("test suite", () => {
  it("Tets 1", () => {
    cy.visit("https://google.com/");
  });
  it("Tets 1", () => {
    cy.visit("https://google.com/");
  });
  it("Tets 1", () => {
    cy.visit("https://google.com/");
  });
  it("Tets 1", () => {
    cy.visit("https://google.com/");
  });
  it("Tets 1", () => {
    cy.visit("https://google.com/");
  });
});
describe("test suite 2", () => {
  it("Tets 2", () => {
    cy.visit("https://example.cypress.io");
  });
});
