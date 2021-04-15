// Load the module dependencies
const config = require("./config");
const express = require("express");
const morgan = require("morgan");
const compress = require("compression");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const swaggerUI = require("swagger-ui-express");
const cors = require('cors');
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

  app.use((req, res, next) => {
    const allowedOrigins = [config.frontendDomain, config.frontendLocalDomain];
    const origin = req.headers.origin;
    console.log("origin", origin);
    console.log("allowedOrigins", allowedOrigins);
    // if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    // }
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(cors({
    // I HAVE TO COMMENT OUT THIS origin: '*', cause for some reason if I don't I get a CORS error when calling get for vaccines
    // This is a temporary fix, I'll probably uncomment this later - Asad
    origin: config.frontendDomain, // specify the domain origin that is allowed to make requests to this server

    //For now, this previous solution works and fixes the issue, will figure out whats causing the above later
    // origin: config.frontendLocalDomain, // specify the domain origin that is allowed to make requests to this server
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }));

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
        title: "VaccTrax Api",
        version: "1.0.0",
        description: "Rest Api's for VaccTrax Application."
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
  require("../app/routes/patients.server.routes.js")(app);
  require("../app/routes/accounts.server.routes.js")(app);
  // Configure static file serving
  app.use(express.static("./public"));

  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  // Return the Express application instance
  return app;
};
