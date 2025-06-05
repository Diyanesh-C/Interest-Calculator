Cypress.Commands.add('extractAndSaveTable', (fileName, sheetName) =>{
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