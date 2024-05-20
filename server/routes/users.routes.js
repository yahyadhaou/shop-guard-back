const router = require("express").Router();

const {
    register,
    login,
    getdatauserssbyid
  } = require("../controller/users.controller");
  router.post("/register",register)
  router.post("/login",login)
  router.get("/getdatauserssbyid/:id", getdatauserssbyid);
  module.exports = router;