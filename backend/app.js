const express = require("express")

const app = express();

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "config/.env",
    });
  }

// Example route
app.get('/', (req, res) => {
    res.send('Hello World');
  });
  
module.exports = app;