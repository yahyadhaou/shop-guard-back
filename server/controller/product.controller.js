var data = require("../database");

let getdataProduct = (req, res) => {
    const sql = `SELECT * from products`;
    data.query(sql, (err, result) => {
      if (err) res.send(err);
      else res.send(result);
    });
  };
  
  let getdataProductbyid= (req,res)=>{
    const id = req.params.id;
    data.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.send(results[0]);
      });
    };

    let insertproductsdata = (req, res) => {
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
    
        const sql = `INSERT INTO products (
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

    const deleteProduct = (req, res) => {
        const id = req.params.id;
    
        const sql = `DELETE FROM products WHERE id = ?`;
    
        data.query(sql, [id], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).send('Product deleted successfully');
            }
        });
    };
    
    const updateProduct = (req, res) => {
        const id = req.params.id;
        const {
            name,
            model,
            category,
            price,
            color,
            image,
            size,
            brand
        } = req.body;
    
        let sql = `UPDATE products SET `;
        const updates = [];
        const params = [];
    
        if (name) {
            updates.push(`name = ?`);
            params.push(name);
        }
        if (model) {
            updates.push(`model = ?`);
            params.push(model);
        }
        if (category) {
            updates.push(`category = ?`);
            params.push(category);
        }
        if (price) {
            updates.push(`price = ?`);
            params.push(price);
        }
        if (color) {
            updates.push(`color = ?`);
            params.push(color);
        }
        if (image) {
            updates.push(`image = ?`);
            params.push(image);
        }
        if (size) {
            updates.push(`size = ?`);
            params.push(size);
        }
        if (brand) {
            updates.push(`brand = ?`);
            params.push(brand);
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
                    res.status(200).send('Product updated successfully');
                }
            }
        );
    };



  module.exports = {
    getdataProduct,
    getdataProductbyid,
    insertproductsdata,
    updateProduct,
    deleteProduct
  };