const { route } = require("../app");
const {
  getNotesController,
  addToListController,
  deleteFromListController,
  editListController,
} = require("./todo.controller");

const router = require("express").Router();

router.route("/todo").get(getNotesController);

router.route("/add").post(addToListController);

router.route("/delete/:id").delete(deleteFromListController);

router.route("/edit/:id").put(editListController);

module.exports = { router };
