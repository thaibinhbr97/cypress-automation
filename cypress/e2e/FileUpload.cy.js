import 'cypress-file-upload';

describe('File Upload', () => {
    it('Single File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('Screenshot 2022-11-30 at 8.38.30 PM.png');
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })

    it('File Upload - Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({ filePath: 'Screenshot 2022-11-30 at 8.38.30 PM.png', fileName: 'myfile.png' });
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })

    it('File Upload - Drag and Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile("hormann-garage-door-display-animated.html", { subjectType: 'drag-n-drop' });
        cy.wait(3000);
        cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
            .contains("hormann-garage-door-display-animated.html");
    })

    it('Multiple files Upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get("#filesToUpload").attachFile(["hormann-garage-door-display-animated.html", "Screenshot 2022-11-30 at 8.38.30 PM.png"]);
        cy.wait(3000);
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:');
    })

    it.only('File Upload - Shadow Dom', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/');
        cy.get('.smart-browse-input', { includeShadowDom: true }).attachFile("hormann-garage-door-display-animated.html");
        cy.wait(3000);
        cy.get('.smart-item-name', { includeShadowDom: true }).contains('hormann-garage-door-display-animated.html');
    })
})