describe('Handle Tables', () => {
    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type('demo')
        cy.get("#input-password").type('demo')
        cy.get("button[type='submit']").click()

        cy.get(".btn-close").click()
        // Customers -> customer
        cy.get("#menu-customer>a").click() // customers main menu
        cy.get("#menu-customer>ul>li:first-child") // customers sub/child item
    })

    it('Check # rows and columns', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7');
    })
    it('Check cell data from specific row & column', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(2)>td:nth-child(3)")
            .contains("olaola@das.com");
    })
    it('Readd all the rows & columns data in the first page', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get("td").each(($col, index, $cols) => {
                        cy.log($col.text());
                    })
                })
            })
    })
    it.only('Pagination', () => {
        // find total number of pages
        let totalPages;
        cy.get(".col-sm-6.text-end").then((e) => {
            let myText = e.text(); // Showing 1 to 10 of 11358 (1136 Pages)
            totalPages = myText.substring(myText.indexOf("(") + 1, myText.indexOf("Pages") - 1) // 11358
            cy.log("Total number of pages in a table ===>" + totalPages);
        })

        totalPages = 5; // choosing 5 for testing purpose
        for (let page = 1; page < totalPages; page++) {
            if (totalPages > 1) {
                cy.log("Active page is " + page);
                cy.get("ul.pagination>li:nth-child(" + p + ")").click();
                cy.wait(3000);
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get('td:nth-child(3)').then((e) => {
                                cy.log(e.text()); // Email address
                            })
                        })
                    })
            }
        }
    })
})
