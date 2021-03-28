//Production configuration options
module.exports = {
  //To sign the session identifier, use a secret string
  sessionSecret: "productionSessionSecret",
  frontendDomain: "http://localhost:4200",
  // db: "mongodb://localhost/vacctrax-db",
  // cloud database
  db: "mongodb+srv://admin:vf1erPpOREgdlGYq@vacctraxcluster.keo45.mongodb.net/vacctrax-db?retryWrites=true&w=majority",
};
