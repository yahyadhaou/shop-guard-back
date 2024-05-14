var data = require("../database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
    try {
      const { email, username,cin,sex,image,phone,password,birthday} = req.body;
  
      const hashedpassword = await bcrypt.hash(password, 10);
      const formattedBirthday = new Date(birthday).toISOString().slice(0, 10);

      const sql =
        "INSERT INTO users (username, email,password,phone,cin,sex,image,birthday) VALUES (?,?,?,?,?,?,?,?) ";
        data.query(
        sql,
        [
          username,
          email,
          hashedpassword,
          phone,
          cin,
          sex,
          image,
          formattedBirthday,
          
        ],
        (err, result) => {
         if (err) console.log(err);
         else 
         res.status(201).json({ message: "user registered successfully" });
        }
      );
  
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };


const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const sql = "SELECT * FROM users WHERE email = ?";
      data.query(sql, [email], async (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else if (result.length === 0) {
          res.status(401).json({ message: "Email or password is incorrect" });
        } else {
          const user = result[0];
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
              const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '4h' });
              res.status(200).json({ message: "Login successful", token, id: user.idusers });
             
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
    register,
    login,
  };