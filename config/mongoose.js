// Load the module dependencies
const config = require("./config");
const mongoose = require("mongoose");

// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
    const db = mongoose
        .connect(config.db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        .then(() => console.log("DB Connected!"))
        .catch((err) => {
            console.log("Error");
        });

    // Load the db models
    // Load the 'clinic' model
    require("../app/models/clinic.server.model");
  // Return the Mongoose connection instance
  return db;
};
