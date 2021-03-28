// Load the module dependencies
const config = require("./config");
const express = require("express");
const morgan = require("morgan");
const compress = require("compression");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const swaggerUI = require("swagger-ui-express");
// const swaggerJsDoc = require("swagger-jsdoc");
const swaggerDocument = require("../swagger.json");

// Define the Express configuration method
module.exports = function () {
  // Create a new Express application instance
  const app = express();

  // Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else if (process.env.NODE_ENV === "production") {
    app.use(compress());
  }

  // Use the 'body-parser' and 'method-override' middleware functions
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.use(methodOverride());
  //handle the use of PUT or DELETE methods
  //override with POST having ?_method=DELETE or
  // ?_method=PUT
  app.use(methodOverride("_method"));

  // Configure the 'session' middleware
  app.use(
    session({
      saveUninitialized: true,
      resave: true,
      secret: config.sessionSecret,
    })
  );

  const options = {
    definition : {
      openapi: "3.0.0",
      info: {
        title: "Vacctrx Api",
        version: "1.0.0",
        description: "Rest Api's for Vacctrax Application."
      },
      servers: [
        {
          url: "http://localhost:3000"
        }
      ]
    },
    apis: ["../app/routes/*.js"]
  };

  // const specs = swaggerJsDoc(options);

  // Set the application view engine and 'views' folder
  app.set("views", "./app/views");
  app.set("view engine", "ejs");

  // Load the routing files
  require("../app/routes/index.server.routes.js")(app);
  require("../app/routes/appointments.server.routes.js")(app);
  require("../app/routes/clinics.server.routes.js")(app);
  require("../app/routes/vaccine.server.route.js")(app);
  require("../app/routes/patients.server.routes.js")(app);
  require("../app/routes/healthPractitioners.server.routes.js")(app);
  // Configure static file serving
  app.use(express.static("./public"));

  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  // Return the Express application instance
  return app;
};
