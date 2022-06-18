const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const http = require("http").createServer(app);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  credentials : true,
  origin: "*"
}));

const connection = mysql.createConnection({
  host : "remotemysql.com",
  user: "wym4khPjwJ",
  password: "IpVePeo1GV",
  database: "wym4khPjwJ",
  port: 3306
});

connection.connect((error) => {
  if(error){
    throw error;
  }

  console.log("MYSQL database is connected successfully");
});

// http://localhost:4000/api/users/list
app.get("/api/users/list", (request, response) => {
  const sql_query = `SELECT * FROM Karthick_Kumar`;
  
  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send({
        error,
        message : "Sorry something went wrong in server, pls try again!"
      });
      return;
    }

    response.status(200).send(result);

  })
});

// http://localhost:4000/api/user/create
app.post("/api/user/create", (request, response) => {
  const firstName = request.body.first_name;
  const lastName = request.body.last_name;
  const rollNumber = request.body.roll_number;
  const _location = request.body.location;
  const result = request.body.result;

  const sql_query = `INSERT INTO Karthick_Kumar (first_name, last_name, roll_number, location, result) VALUES ('${firstName}', '${lastName}', ${rollNumber}, '${_location}', ${result})`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send({
        error,
        message: "Sorry something went wrong in server, pls try again!"
      });
      return;
    }

    response.status(200).send({
      result,
      message : "Successfully User Profile has been Created"
    })
  })

})


const port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("Node JS Server is running on port 4000");
});