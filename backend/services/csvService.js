const fs = require("fs");
const csv = require("csv-parser");

const parseCsvFile = (filePath) =>
  new Promise((resolve, reject) => {
    const rows = [];
    let columns = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("headers", (headers) => {
        columns = headers;
      })
      .on("data", (row) => {
        rows.push(row);
      })
      .on("end", () => {
        resolve({
          rowCount: rows.length,
          columns,
          preview: rows.slice(0, 5)
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });

module.exports = {
  parseCsvFile
};
