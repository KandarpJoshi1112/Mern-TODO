import Todo from "../model/todo.model.js";

export const createTodo = async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    user: req.user._id, //associating the loggedin user with the todo
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json({ message: "Todo created successfully", newTodo });
  } catch (error) {
    res.status(400).json({ message: " Error in Todo Creation " });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id }); //find all todos associated with the loggedin user
    res.status(200).json({ message: "Fetched Todos Successfully", todos });
  } catch (error) {
    res.status(404).json({ message: "Error in Fetching Todos" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Todo Updated Successfully", todo });
  } catch (error) {
    res.status(404).json({ message: "Error in Updating Todos" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo Deleted Successfully" });
  } catch (error) {
    res.status(404).json({ message: "Error in Deleting Todos" });
  }
};
