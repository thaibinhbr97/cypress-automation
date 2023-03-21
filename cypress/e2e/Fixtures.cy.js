describe("MyTestSuite", () => {
    // // Direct access
    // it.only("FixturesDemoTest", () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //     cy.fixture('orangehrm.json').then((data) => {
    //         cy.get("input[placeholder='Username']").type(data.username);
    //         cy.get("input[placeholder='Password']").type(data.password);
    //         cy.get("button[type='submit']").click();
    //         cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
    //             .should('have.text', data.expected);
    //     })
    // })


    // Access through Hook - for multiple it blocks
    let userData;
    beforeEach(() => {
        cy.fixture("orangehrm").then((data) => {
            userData = data;
        })
    })

    it('FixturesDemoTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type(userData.username);
        cy.get("input[placeholder='Password']").type(userData.password);
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text', userData.expected);
    })
})