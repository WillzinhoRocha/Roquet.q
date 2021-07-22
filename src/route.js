const express = require("express");
const QuestionController = require("./controllers/QuestionController");

const route = express.Router();

route.get("/", (req, res) => res.render("index", { page: "enter-room" }));
route.get("/create-room", (req, res) =>
  res.render("create-room", { page: "create-room" })
);

route.get("/room", (req, res) => res.render("room"));

//Formato que o formulário de dentro da modal tem que passasr
route.post("/question/:room/:question/:action", QuestionController.index);

module.exports = route;
