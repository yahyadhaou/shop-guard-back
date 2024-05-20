const router = require("express").Router();

const {
    getdatacontract,
    insertcontractcontractdata,
    deletecontract,
    updatecontract,
    getdatacontractssbyusersid
  } = require("../controller/contract.controller");
  router.get("/getdatacontract", getdatacontract);
  router.get("/getdatacontractssbyid/:id", getdatacontractssbyusersid);
  router.post("/insertcontractcontractdata",insertcontractcontractdata)
  router.put("/updatecontract/:id",updatecontract)
  router.delete("/deletecontract/:id",deletecontract)
  module.exports = router;