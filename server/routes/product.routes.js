const router = require("express").Router();

const {
    getdataProduct,
    getdataProductbyid,
    insertproductsdata,
    updateProduct,
    deleteProduct
  } = require("../controller/product.controller");
  router.get("/getdataProduct", getdataProduct);
  router.get("/getdataProductbyid/:id", getdataProductbyid);
  router.post("/insertproductsdata",insertproductsdata)
  router.put("/updateProduct/:id",updateProduct)
  router.delete("/deleteProduct/:id",deleteProduct)
  module.exports = router;