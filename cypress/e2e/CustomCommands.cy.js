// click on link using label
// over writing exisiting contains() command
// re-usuable custom command

describe("Custom Commands", () => {
    it("Handling Links", () => {
        cy.visit("https://demo.nopcommerce.com/");

        // direct - without using custom commands
        // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        // cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch");

        // using custom command
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch");
    })

    it("Overwriting existing command", () => {
        cy.visit("https://demo.nopcommerce.com/");

        // using custom command
        cy.clickLink("APPLE MACBOOK PRO 13-inch");
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch");
    })

    it("Login command", () => {
        cy.visit("https://demo.nopcommerce.com/");
        //Login
        cy.clickLink("Log in"); // customer command
        cy.wait(3000);
        cy.loginApp("testing@gmail.com", "test123"); // customer command
        cy.get('.ico-account').should('have.text', 'My account');
        //Search
    })
})