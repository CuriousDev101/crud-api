import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectToDB from './database/db.js';
import { Todo } from './models/todo_model.js'

dotenv.config();

const app = express();
const PORT = process.env.port || 4000;

// middleware
app.use(express.json());

connectToDB();

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});

app.get('/', async (req, res) => {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/create-todo', async (req, res) => {
  const todoDetails = req.body;
  try {
    const result = await Todo.create(todoDetails);
    res.send({
      success: true,
      message: "Todo is Created Sucessfully",
      data: result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Failed to create todo",
      data: error,
    });
  }
});

app.get('/todo/:todoId', async (req, res) => {
  const todoId = req.params.todoId;
  try {
    const result = await Todo.findById(todoId);
    res.send({
      success: true,
      message: "Todo is retrieved sucessfully",
      data: result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: "Failed To Retrieved Todo Lists",
      data: error,
    });
  }
});

app.patch('/todo/:todoId', async (req, res) => {
  const todoId = req.params.todoId;
  const updatedTodo = req.body;
  try {
    const result = await Todo.findByIdAndUpdate(todoId, updatedTodo,
      {
        new: true,
      });
    res.send({
      success: true,
      message: "Todo is Updated Sucessfully",
      data: result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Failed To Update The Todo",
      data: error,
    });
  }
});

app.delete('/delete/:todoId', async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.todoId);
    if (result) {
      res.send({
        success: true,
        message: "Todo is deleted successfully",
        data: result,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "Failed to delete the Todo",
      data: error,
    });
  }
});
app.get('/todo', async (req, res) => {
  const result = await Todo.find();
  try {
    res.send({
      success: true,
      message: "Server is Active",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to check server status",
      data: null,
    });
  }
});


