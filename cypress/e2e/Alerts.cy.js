

describe('Alerts', () => {
    // JS alert: it will have some texts and 'Ok' button
    it('JS alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert');
        })
        // alert automatically closed by cypress
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    // JS Comfirmation alert: It will have some texts with 'Ok' and 'Cancel' button
    it('JS confirmation alert - Ok', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        })
        // alert automatically closed alert window by using ok button - Default
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })
    it('JS confirmation alert - Cancel', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.on('window:confirm', () => false);
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    // JS Prompt Alert: It will have some texts with a box for user input along with 'Ok'
    it('JS prompt alert - Ok', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click()
        // cypress will automatically close the prompted alert - use the 'Ok' button by default
        cy.get('#result').should('have.text', 'You entered: welcome')
    })
    // JS Prompt Alert: It will have some texts with a box for user input along with 'Ok'
    it('JS prompt alert - Cancel', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.on('window:prompt', () => false);
        cy.get('#result').should('have.text', 'You entered: welcome')
    })
    // JS Auth Alert
    it.only('JS auth alert', () => {

        // approach 1
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')

        // approach 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')

    })
})