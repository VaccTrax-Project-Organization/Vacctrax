const accountsController = require("../controllers/accounts.server.controller");
const loginController = require("../controllers/login.server.controller");


module.exports = (app) => {

    app.post("/api/setPasswordVerifyToken", accountsController.verifyTokenForSetPassword);

    app.post("/api/setPassword", loginController.verifyToken, accountsController.setPassword);

    app.post("/api/signIn", loginController.signIn);

    app.get("/api/getAllAccounts", accountsController.getAllUserAccounts);

    app.put("/api/updateAccount/:id", accountsController.updateAccount);
};
