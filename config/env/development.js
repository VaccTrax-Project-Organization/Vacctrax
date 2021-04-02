//Development configuration options
module.exports = {
  //To sign the session identifier, use a secret string
  sessionSecret: "developmentSessionSecret",
  frontendLocalDomain: "http://localhost:4200",
  // frontendDomain: "https://localhost:4200",  
  frontendDomain: "https://vacctrax-project-organization.github.io",
  // cloud database
  db: "mongodb+srv://admin:vf1erPpOREgdlGYq@vacctraxcluster.keo45.mongodb.net/vacctrax-db?retryWrites=true&w=majority",
  // local database
  // db: "mongodb://localhost/vacctrax-local"
};
