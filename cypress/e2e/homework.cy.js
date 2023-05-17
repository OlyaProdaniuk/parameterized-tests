describe("Multiple tests", () => {
  const testForm = (email, password) =>
    function () {
      cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");
      cy.get('[alt="Material Dark Theme"]').click();
      cy.get(".menu-title.ng-tns-c141-9").click();
      cy.get(".menu-title.ng-tns-c141-11").click();
      cy.get("#inputEmail1").type(email).should("contain.value", `${email}`);
      cy.get("#inputPassword2")
        .type(password)
        .should("contain.value", `${password}`);
      cy.get(".inner-circle").first().click();
      cy.get("[type='submit']").eq(1).should("contain.text", "Sign in").click();
    };
  it("enter email", testForm("test@email.com", "test@email.com"));
  it("enter password", testForm("1234", "1234"));
});
