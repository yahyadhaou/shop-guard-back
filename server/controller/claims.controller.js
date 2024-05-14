var data = require("../database");

let getdataClaims = (req, res) => {
    const sql = `SELECT * from claims`;
    data.query(sql, (err, result) => {
      if (err) res.send(err);
      else res.send(result);
    });
  };
  let getdataClaimsbyid= (req,res)=>{
    const id = req.params.id;
    data.query('SELECT * FROM claims WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.send(results[0]);
      });
    };
    let insertClaimsdata = (req, res) => {
        let {
            name,
            model,
            category,
            price,
            color,
            image,
            size,
            brand
        } = req.body;
    
        const sql = `INSERT INTO claims (
            name,
            model,
            category,
            price,
            color,
            image,
            size,
            brand
        ) VALUES (?,?,?,?,?,?,?,?)`;
    
        data.query(
            sql,
            [
                name,
                model,
                category,
                price,
                color,
                image,
                size,
                brand
            ],
            (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Internal Server Error');
                } else {
                    res.status(200).send(result);
                }
            }
        );
    };

    const deleteClaims = (req, res) => {
        const id = req.params.id;
    
        const sql = `DELETE FROM claims WHERE id = ?`;
    
        data.query(sql, [id], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).send('Claims deleted successfully');
            }
        });
    };
  
  module.exports ={
    getdataClaims,
    getdataClaimsbyid,
    insertClaimsdata,
    deleteClaims
  }