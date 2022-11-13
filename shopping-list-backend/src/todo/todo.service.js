// const notes=require('../data/nodes-data')
const knexInstance = require("../database/connection");

const getToDoList = async (noteId) => {
  const result = await knexInstance("todo").orderBy("id"); // select('*').where('id',noteId)
  return result;
};

const addToList = async (item) => {
  try {
    const result = await knexInstance("todo").insert({ todotext: item });
    return result;
  } catch (e) {
    console.log(e);
  }
};

const deleteFromList = async (id) => {
  const result = await knexInstance("todo").where("id", id).del();
  return result;
};

const editList = async (id, value) => {
  const result = await knexInstance("todo")
    .where("id", id)
    .update({ todotext: value });
  return result;
};

module.exports = {
  getToDoList,
  addToList,
  deleteFromList,
  editList,
};
