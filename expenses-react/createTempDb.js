const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");
const mockUserData = require("./mockUserData");

const { expenses } = mockData;
const { users } = mockUserData;
const data = JSON.stringify({ expenses });
const userData = JSON.stringify({ users });
const filepath = path.join(__dirname, "tempDB.json");
const userFilePath = path.join(__dirname, "tempUserDB.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});

fs.writeFile(userFilePath, userData, function(err) {
  err ? console.log(err) : console.log("Mock user DB created. ");
});
