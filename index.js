const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello Express...!");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
