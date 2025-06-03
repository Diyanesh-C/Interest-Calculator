const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

module.exports = {
  "reporter": "cypress-mochawesome-reporter",
  "defaultCommandTimeout": 30000,
  "retries": {
    "runMode": 1,
    "openMode": 1
  },
  "video": true,
  "scrollBehavior": "nearest",
  "chromeWebSecurity": false,
  e2e: {
    "testIsolation" : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      // on('task' ,{
      //   saveToExcel({ data, fileName, sheetName }) {
      //     const worksheet = XLSX.utils.aoa_to_sheet(data);
      //     const workbook = XLSX.utils.book_new();
      //     XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

      //     const downloadDir = path.join(__dirname, 'downloads');
      //     if(!fs.existsSync(downloadDir)){
      //       fs.mkdirSync(downloadDir);
      //     }
      //     const filePath = path.join(downloadDir, fileName);
      //     XLSX.writeFile(workbook, filePath);
      //     return null;
      //   }
      // })
      on('task', {
        saveToExcel({ data, fileName, sheetName }) {
          console.log("Received Data for Excel:", data);
 
          if (!data.length || !Array.isArray(data)) {
            console.error("Error: No valid data received for Excel export.");
            return null;
          }
 
          const worksheet = XLSX.utils.aoa_to_sheet(data);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
 
          const downloadDir = path.join(__dirname, 'downloads');
          if (!fs.existsSync(downloadDir)) {
            fs.mkdirSync(downloadDir);
          }
 
          const filePath = path.join(downloadDir, fileName);
          XLSX.writeFile(workbook, filePath);
 
          console.log("Excel File Saved:", filePath);
          return null;
        }
      });
    },
  },
};
 