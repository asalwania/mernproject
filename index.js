const dotenv = require("dotenv");
const express = require("express");


const app = express();

dotenv.config({ path: "./config.env" });
require('./db/conn')

const DB = process.env.DATABASE;
const PORT = process.env.PORT;



const middleware = (req, res, next) => {
  console.log("hello middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("hello world from the server");
});

app.get("/about", middleware, (req, res) => {
  console.log("i m about");
  res.send("hello world from the about server");
});

app.get("/contact", (req, res) => {
  res.send("hello world from the contact server");
});

app.get("/signup", (req, res) => {
  res.send("hello world from then signup server");
});

app.get("/signin", (req, res) => {
  res.send("hello world from the signin server");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${8000}/`);
});
