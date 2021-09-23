const express = require("express");

const app = express();


//starting nodemon server
const start = async () => {
  app.listen(3033, () => {
    console.log("listening on port 3033");
  });
};

start();
