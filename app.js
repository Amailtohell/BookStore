const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.URL;


// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(`${url}`)
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
