// Load the 'index' controller
const index = require("../controllers/index.server.controller");

// Define the routes module' method
module.exports = function (app) {
  // Mount the 'index' controller's 'render Homepage' method
  app.get("/", index.renderHomePage);
};
