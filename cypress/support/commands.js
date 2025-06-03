// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('extractAndSaveTable', (tableSelector, fileName, sheetName) =>{
//     cy.get(tableSelector).should('be.visible').scrollIntoView().invoke('prop','outerHTML').then((tableHTML)=>{
//         console.log(tableHTML);
//         const parser = new DOMParser();
//             const doc = parser.parseFromString(tableHTML, 'text/html');
//             const rows = doc.querySelectorAll('tr');

//             const tableData = Array.from(rows).map(row => {
//                 Array.from(row.cells).map(cell => cell.textContent.trim());
//             })
//             cy.task('saveToExcel', {
//                 data: tableData,
//                 fileName : fileName ||'extracted_table.xlsx',
//                 sheetName : sheetName||  'TableData'
//             })
//         })
// })


Cypress.Commands.add('extractAndSaveTable', (tableSelector, fileName, sheetName) =>{
    cy.get(tableSelector).should('be.visible').scrollIntoView().invoke('prop','outerHTML').then((tableHTML)=>{
        console.log(tableHTML);
        const parser = new DOMParser();
            const doc = parser.parseFromString(tableHTML, 'text/html');
            const rows = doc.querySelectorAll('tr');
            let tableData=[];
            cy.get('table tr').each(($row)=>{
                const rowData=[];
                cy.wrap($row).find('th,td').each(($cell)=>{
                    rowData.push($cell.text().trim());
                }).then(()=>{
                    tableData.push(rowData);
                });
            }).then(()=>{
                cy.log(JSON.stringify(tableData));
                cy.task('saveToExcel', {
                    data: tableData,
                    fileName : fileName ||'extracted_table.xlsx',
                    sheetName : sheetName||  'TableData'
                })
            })
 
        })
})