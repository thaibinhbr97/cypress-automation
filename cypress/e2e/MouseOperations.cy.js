import 'cypress-iframe'
import '@4tw/cypress-drag-drop'

describe("Mouse Operations", () => {
    it('Mouse Hover', () => {
        cy.visit("https://demo.opencart.com/")
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
            .should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
            .should('be.visible')
    })

    it('Right Click', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        // // Approach 1
        // cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');
        // cy.get('.context-menu-icon-copy').should('be.visible');

        // Approach 2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get('.context-menu-icon-copy').should('be.visible');
    })

    it('Double Click', () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.get('#iframeResult').should('exist')
        cy.frameLoaded('#iframeResult'); // Load the frame

        // Approach 1 - using trigger()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        cy.iframe('#iframeResult').find("#field2").should("have.value", "Hello World!")

        // Approach 2 - dblclick()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find("#field2").should("have.value", "Hello World!")
    })

    it('Drag and Drop using plugin', () => {
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')

        cy.wait(3000);
        cy.get('#box6').drag('#box106', { force: true });
    })

    it.only('Scrolling Page', () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");

        // Vietnam flag
        cy.get("img[alt='Flag of Vietnam']").scrollIntoView({ duration: 2000 });
        cy.get("img[alt='Flag of Vietnam']").should('be.visible');

        // Canada flag
        cy.get("img[alt='Flag of Canada']").scrollIntoView({ duration: 2000 })
        cy.get("img[alt='Flag of Canada']").should('be.visible')

        // Footer section
        cy.get("#footer").scrollIntoView({ duration: 2000 })
        cy.get("#footer").should('be.visible')
    })
})