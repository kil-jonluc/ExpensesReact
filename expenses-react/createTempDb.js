const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { expenses } = mockData;
const data = JSON.stringify({ expenses });
const filepath = path.join(__dirname, "tempDB.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
