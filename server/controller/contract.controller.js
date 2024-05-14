var data = require("../routes/contract.routes")

let getdatacontract= (res,req)=>{
    const sql = `SELECT * from contract`;
    data.query(sql, (err, result) => {
      if (err) res.send(err);
      else res.send(result);
    }); 
}
module.exports ={
    getdatacontract,
}