process.env.NODE_ENV = process.env.NODE_ENV || "development";
const dotenv = require('dotenv');

// Load the module dependencies
const configureExpress = require("./config/express");
const configureMongoose = require("./config/mongoose");
// const cors = require('cors');

// configure variables from.env file
dotenv.config()

// Create a new Mongoose connection instance
const db = configureMongoose();

// Create a new Express application instance
const app = configureExpress();

// Use the Express application instance to listen to the '3000' port
app.listen(process.env.PORT || 3000);

// Log the server status to the console
console.log("Server running at http://localhost:3000/");
console.log("Swagger at http://localhost:3000/api-docs");

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;
