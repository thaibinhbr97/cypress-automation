// Hooks

// before
// after
// beforeEach
// afterEach

describe('MyTestSuite', () => {
    before(() => {
        cy.log("*** launch app ***");
    })

    after(() => {
        cy.log("*** close app ***");
    })

    beforeEach(() => {
        cy.log("*** login ***")
    })

    afterEach(() => {
        cy.log("*** logout ***")
    })

    it('search', () => {
        cy.log("*** searching ***");
    })

    it('advanced search', () => {
        cy.log("*** advanced searching ***");
    })

    it('listing products', () => {
        cy.log("*** listing products ***");
    })
})

