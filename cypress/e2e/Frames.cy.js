import 'cypress-iframe'
describe("Handling Frames", () => {
    it('Approach 1', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframe.clear().type("Welcome {cmd+a}");

        cy.get("button[title='Bold']").click();
    })
    it('Approach 2 - by using custom command', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr").clear().type("Welcome {cmd+a}");

        cy.get("button[title='Bold']").click();
    })
    it('Approach 3 - by using cypress-iframe plugin', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded("#mce_0_ifr")
        cy.iframe("#mce_0_ifr").clear().type("Welcome {cmd+a}");
        cy.get("button[title='Bold']").click();
    })
})