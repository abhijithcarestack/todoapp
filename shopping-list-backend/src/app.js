const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { router } = require("./todo/todo.router");
app.use(bodyParser.json());
app.use("/", router);

const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.send(err);
};

const routeNotExist = (req, res, next) => {
  res.send(`${req.path} does not exist`);
};

app.use(morgan("dev"));
app.use(errorHandler);
app.use(routeNotExist);

module.exports = app;
