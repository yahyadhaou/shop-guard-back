const router = require("express").Router();

const {
    getdataClaims,
    getdataClaimsbyid,
    insertClaimsdata,
    updateClaims,
    deleteClaims,
    getdataWorkshop,
    getdataClaimsbyinsuranceid

  } = require("../controller/claims.controller");
  router.get("/getdataClaims", getdataClaims);
  router.get("/getdataWorkshop/:insuranceid", getdataWorkshop);
  router.get("/getdataClaimsbyid/:id/:insuranceid", getdataClaimsbyid);
  router.get("/getdataClaimsbyinsuranceid/:insuranceid", getdataClaimsbyinsuranceid);
  router.post("/insertClaimssdata",insertClaimsdata)
  router.put("/updateClaims/:id",updateClaims)
  router.delete("/deleteClaims/:id",deleteClaims)
  module.exports = router;