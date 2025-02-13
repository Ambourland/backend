const Controller = require("../controllers/Controller")

module.exports = (app) => {
    app.post("/register", Controller.register)
    app.post("/login", Controller.login)
}
