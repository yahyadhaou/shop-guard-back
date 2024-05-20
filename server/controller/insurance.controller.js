var data = require("../database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerinsurance = async (req, res) => {
    try {
      const {name,email,phone,password} = req.body;
  
      const hashedpassword = await bcrypt.hash(password, 10);

      const sql =
        "INSERT INTO insurance (name,email,phone,password) VALUES (?,?,?,?) ";
        data.query(
        sql,
        [
          name,
          email,
          phone,
          hashedpassword,
        ],
        (err, result) => {
         if (err) console.log(err);
         else 
         {res.status(201).json({ message: "user insurance successfully" });
        console.log(result)}
        }
      );
  
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };

  const logininsurance= async (req, res) => {
    try {
        const { email, password } = req.body;
    
        const sql = "SELECT * FROM insurance WHERE email = ?";
        data.query(sql, [email], async (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
          } else if (result.length === 0) {
            res.status(401).json({ message: "Email or password is incorrect" });
          } else {
            const insurance = result[0];
            const passwordMatch = await bcrypt.compare(password, insurance.password);
            if (passwordMatch) {
                const token = jwt.sign({ insuranceId: insurance.id }, 'secret_key', { expiresIn: '4h' });
                res.status(200).json({ message: "Login successful", token, insuranceid: insurance.insuranceid });
               
            } else {
              res.status(401).json({ message: "Email or password is incorrect" });
            }
          }
        });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    };
  



  module.exports = {
    registerinsurance,
    logininsurance,
  };