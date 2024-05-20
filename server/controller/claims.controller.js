var data = require("../database");

let getdataClaims = (req, res) => {
    const sql = `SELECT * from claims`;
    data.query(sql, (err, result) => {
      if (err) res.send(err);
      else res.send(result);
    });
  };
  let getdataClaimsusersbyid= (req,res)=>{
    const {id,usersid} = req.params
    data.query('SELECT * FROM claims WHERE id = ? And usersid = ? ', [id,usersid], (err, results) => {
        if (err) throw err;
        res.send(results[0]);
      });
    };
  let getdataClaimsbyid= (req,res)=>{
    const {id,insuranceid} = req.params
    data.query('SELECT * FROM claims WHERE id = ? And insuranceid = ? ', [id,insuranceid], (err, results) => {
        if (err) throw err;
        res.send(results[0]);
      });
    };
    const getdataClaimsbyinsuranceid = (req, res) => {
        const { insuranceid } = req.params;
        const query = `
            SELECT 
                claims.*, 
                users.phone, 
                users.email, 
                users.username 
            FROM 
                claims 
            INNER JOIN 
                users 
            ON 
                claims.usersid = users.id 
            WHERE 
                claims.insuranceid = ?`;
    
        data.query(query, [insuranceid], (err, results) => {
            if (err) throw err;
            if (results.length === 0) {
                res.status(404).send("No data found for the provided insuranceid.");
                return;
            }
            res.send(results);
        });
    };
    
    
    let insertClaimsdata = (req, res) => {
        let {
            titleofclaim,
            stolen,
            description,
            attachment,
            status,
            usersid,
            insuranceid,
            contractid,
        } = req.body;
        
        const Date_ofthe_claim = new Date()
        const sql = `INSERT INTO claims (
            titleofclaim,
            stolen,
            description,
            attachment,
            status,
            usersid,
            insuranceid,
            contractid,
            Date_ofthe_claim,
            workshop
        ) VALUES (?,?,?,?,?,?,?,?,?,?)`;
    
        data.query(
            sql,
            [
                titleofclaim,
                stolen,
                description,
                attachment,
                status,
                usersid,
                insuranceid,
                contractid,
                Date_ofthe_claim,
                "no"
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
    const updateClaims = (req, res) => {
        const id = req.params.id;
        const {
            status
        } = req.body;
    
        let sql = `UPDATE claims SET `;
        const updates = [];
        const params = [];
    
        if (status) {
            updates.push(`status = ?`);
            params.push(status);
    
            if (status === 'Repair') {
                updates.push(`workshop = 'yes'`);
            } else {
                updates.push(`workshop = no`); 
            }
        }
    
        sql += updates.join(', ') + ` WHERE id = ?`;
        params.push(id);
    
        data.query(
            sql,
            params,
            (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Internal Server Error');
                } else {
                    res.status(200).send('Claim updated successfully');
                }
            }
        );
    };
    const updateStatus = (req, res) => {
        const id = req.params.id;
    
        const status = 'Repair';
        const workshop = 'no';
    
        const sql = `UPDATE claims SET status = ?, workshop = ? WHERE id = ?`;
        const params = [status, workshop, id];
    
        data.query(sql, params, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).send('Claim updated successfully');
            }
        });
    };
    
    
    const getdataWorkshop = (req, res) => {
        const { insuranceid } = req.params;
        const query = `
        SELECT 
            claims.*, 
            contract.brand, 
            contract.type, 
            contract.model 
        FROM 
            claims 
        INNER JOIN 
            contract 
        ON 
            claims.contractid = contract.id 
        WHERE 
            claims.insuranceid = ? AND workshop = 'yes' `;
        
        data.query(query, [insuranceid], (err, results) => {
            if (err) throw err;
            if (results.length === 0) {
                res.status(404).send("No data found for the provided insuranceid.");
                return;
            }
            res.send(results);
        });
    };    

  module.exports ={
    updateClaims,
    getdataClaimsusersbyid,
    getdataClaims,
    getdataClaimsbyid,
    insertClaimsdata,
    updateClaims,
    updateStatus,
    deleteClaims,
    getdataWorkshop,
    getdataClaimsbyinsuranceid
  }