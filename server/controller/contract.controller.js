var data = require("../database");

let getdatacontract = (req,res) => {
  const sql = `SELECT * from contract`;
  data.query(sql, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
};

let insertcontractcontractdata = (req, res) => {
    let {
      type,
      priority,
      protection,
      contract_terms,
      first_name,
      last_name,
      email,
      cin,
      start_date,
      end_date,
      brand,
      serial,
      model
    } = req.body;
  
    const sql = `INSERT INTO contract (
      type,
      priority,
      protection,
      contract_terms,
      first_name,
      last_name,
      email,
      cin,
      start_date,
      end_date,
      brand,
      serial,
      model
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  
    data.query(
      sql,
      [
        type,
        priority,
        protection,
        contract_terms,
        first_name,
        last_name,
        email,
        cin,
        start_date,
        end_date,
        brand,
        serial,
        model
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
  

const deletecontract = (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM contract WHERE id = ?`;

    data.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('contract deleted successfully');
        }
    });
};
const updatecontract= (req, res) => {
    const id = req.params.id;
    const {
        type,
        priority,
        protection,
        contract_terms,
        start_date,
        end_date,
    } = req.body;

    let sql = `UPDATE contract SET `;
    const updates = [];
    const params = [];

    if (type) {
        updates.push(`type = ?`);
        params.push(type);
    }
    if (priority) {
        updates.push(`priority = ?`);
        params.push(priority);
    }
    if (protection) {
        updates.push(`protection = ?`);
        params.push(protection);
    }
    if (contract_terms) {
        updates.push(`contract_terms = ?`);
        params.push(contract_terms);
    }
    if (start_date) {
        updates.push(`start_date = ?`);
        params.push(start_date);
    }
    if (end_date) {
        updates.push(`end_date = ?`);
        params.push(end_date);
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
                res.status(200).send('Contract updated successfully');
            }
        }
    );
};

module.exports = {
  getdatacontract,
  insertcontractcontractdata,
  deletecontract,
  updatecontract
};
