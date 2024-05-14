const router = require("express").Router();

const {
    getdataClaims,
    getdataClaimsbyid,
    insertClaimssdata,
    updateClaims,
    deleteClaims
  } = require("../controller/claims.controller");
  router.get("/getdataClaims", getdataClaims);
  router.get("/getdataClaimsbyid/:id", getdataClaimsbyid);
  router.post("/insertClaimssdata",insertClaimssdata)
  router.put("/updateClaims/:id",updateClaims)
  router.delete("/deleteClaims/:id",deleteClaims)
  module.exports = router;