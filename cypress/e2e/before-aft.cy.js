describe.skip("before method", () => {
  before(() => {
    cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  }); //для зберігання повторюваного коду, виконується один раз перед тест сьютом

  it("test1", () => {
    cy.get('[placeholder="Jane Doe"]').type("Hello");
  });
  it("test2", () => {
    cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
    cy.get('[placeholder="Jane Doe"]').type("Hello");
  });
});
describe.skip("before each method", () => {
  beforeEach(() => {
    cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  }); //для зберігання повторюваного коду, виконується перед кожним тестом

  it("test1", () => {
    cy.get('[placeholder="Jane Doe"]').type("Hello");
  });
  it("test2", () => {
    cy.get('[placeholder="Jane Doe"]').type("Hello");
  });
});
//після тестів after and afterEach
describe("after method", () => {
  after(() => {
    cy.log("HELLO");
  }); //виконується після всіх тестів, до прикладу додати лог

  it("test1", () => {
    cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");
  });
  it("test2", () => {
    cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");
  });
  afterEach(() => {
    cy.log("HELLO");
  }); //виконується після всіх тестів, до прикладу додати лог
});
it("test retries", { retries: 2 }, () => {
  cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");
  cy.get('[src="assets/images/material-dark-theme.jpAß"]').click();
  cy.get('[title="Forms"]').click();
  cy.get('[title="Form Layouts"]').click();
  cy.get('[placeholder="Jane Doe"]').type("Hello");
});
