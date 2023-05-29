describe("Multiple tests", () => {
  beforeEach(() => {
    cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");
    cy.get('[alt="Material Dark Theme"]').click();
    cy.get(".menu-title.ng-tns-c141-19").click();
    cy.get(".menu-title.ng-tns-c141-23").click();
  });
  const testData = [
    {
      filledData: {
        position: "top-right",
        title: "my title",
        content: "test content",
        time: "1000",
        type: "primary",
      },
    },
    {
      expectedResult: {
        icon: 'xmlns="http://www.w3.org/2000/svg"',
        title: "my title",
        content: "test content",
        backgroundColor: "rgb(233, 29, 99)",
        position: ["top-right", "top-left", "bottom-right", "bottom-left"],
        time: "1000",
        type: ["primary", "warning", "danger", "info"],
      },
    },
  ];

  testData.forEach(({ filledData, expectedResult }) => {
    it(`Test ${testData[0].filledData.position}`, () => {
      cy.get(".position-select .select-button").click();
      cy.contains("top-right", { timeout: 1000 }).click();
      cy.get('[name="title"]')
        .clear()
        .type(`${testData[0].filledData.title}`)
        .should("contain.value", `${testData[1].expectedResult.title}`);
      cy.get('[name="content"]')
        .clear()
        .type(`${testData[0].filledData.content}`)
        .should("contain.value", `${testData[1].expectedResult.content}`);
      cy.get('[name="timeout"]')
        .clear()
        .type(`${testData[0].filledData.time}`)
        .should("contain.value", `${testData[1].expectedResult.time}`);
      cy.get('[type="button"]').eq(2).click();
      cy.contains("primary").click();
      cy.get(".mat-ripple.appearance-filled.size-medium").eq(0).click();
      cy.get("nb-toast", { timeout: 5000 })
        .eq(0)
        .then((element) => {
          cy.wrap(element)
            .find(`[data-name="${testData[1].expectedResult.icon}"]`)
            .should("exist");
          expect(element).to.contain(testData[1].expectedResult.title);
          expect(element).to.contain(testData[1].expectedResult.content);
          expect(element).to.have.css(
            "background-color",
            testData[1].expectedResult.backgroundColor
          );
        });

      cy.get("nb-toast", { timeout: 5000 })
        .eq(0)
        .parents(".toastr-overlay-container.cdk-global-overlay-wrapper")
        .then((element) => {
          expect(element)
            .to.have.attr("style")
            .to.eq("justify-content: flex-end; align-items: flex-start;");
        });
    });
  });
});
