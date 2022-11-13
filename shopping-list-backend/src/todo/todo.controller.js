const {
  getToDoList,
  addToList,
  deleteFromList,
  editList,
} = require("./todo.service");

const getNotesController = async (req, res) => {
  const toDoList = await getToDoList();
  res.json({ data: toDoList });
};

const addToListController = async (req, res) => {
  const item = req.body.item;
  console.log(req.body);
  await addToList(item);
  res.send(`${item} added`);
};

const deleteFromListController = async (req, res) => {
  const id = req.params.id;
  await deleteFromList(id);
  res.send(`item with ${id} deleted`);
};

const editListController = async (req, res) => {
  const id = req.params.id;
  const item = req.body.item;
  await editList(id, item);
  res.send(`item with ${id} was edited`);
};

module.exports = {
  getNotesController,
  addToListController,
  deleteFromListController,
  editListController,
};
