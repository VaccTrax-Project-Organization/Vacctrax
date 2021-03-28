// Load the 'index' controller
const indexController = require("../controllers/index.server.controller");

// Define the routes module' method
module.exports = (app) => {
  // Mount the 'index' controller's 'render Homepage' method
  app.get("/", indexController.renderHomePage);
};
