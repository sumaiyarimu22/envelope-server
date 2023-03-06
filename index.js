require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//express app
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//port
const PORT = process.env.PORT || 4000;

//connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //Listening for request
    app.listen(PORT, (req, res) => {
      console.log(`connected to db and server runing on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
