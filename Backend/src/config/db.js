require("dotenv").config();

const mongoose = require("mongoose");

//setting up password for database
const password = process.env.PASSWORD;

//connecting mongodb to the application
const connect = () => {
  return mongoose.connect(
    `mongodb+srv://qtranceDatabase:${password}@cluster0.nkrp7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  );
};

module.exports = connect;
