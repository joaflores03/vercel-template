import express from 'express';
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hola mi rey2.0");
});

app.get("/home", (req, res) => {
  res.send("holaasd mi rey2.0");
});

module.exports = app;
