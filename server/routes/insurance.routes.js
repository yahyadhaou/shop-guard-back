const router = require("express").Router();

const {
    registerinsurance,
    logininsurance,
  } = require("../controller/insurance.controller");
  router.post("/registerinsurance",registerinsurance)
  router.post("/logininsurance",logininsurance)
  module.exports = router;