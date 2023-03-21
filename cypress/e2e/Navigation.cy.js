// go()

describe('MySuite', () => {
    it('Navigation Test', () => {
        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq', "Your Store");
        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should("have.text", "Cameras"); // cameras page

        cy.go('back') // go back to the homepage
        cy.title().should('eq', "Your Store");

        cy.go('forward') // go forward to the cameras page
        cy.get("div[id='content'] h2").should("have.text", "Cameras"); // cameras page

        cy.go(-1) // go back to the homepage
        cy.title().should('eq', "Your Store");

        cy.go(1)  // go forward to the cameras page
        cy.get("div[id='content'] h2").should("have.text", "Cameras"); // cameras page

        cy.reload(); // reload the page
    })
})