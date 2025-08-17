import express from "express";
import cors from "cors";
import db from "./DB/connection.js"

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

// all the task from the db
app.get("/tasks", (req, res) => {
  const sql = "SELECT * FROM tasks"; // your tasks table
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching tasks:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "No tasks found" });
    }

    // ✅ Send all tasks directly as an array
    res.json(results);
  });
});

// Define your routes here and select task from the database and show the recent task added to the database

app.get("/tasks/:id", (req, res) => {
  const sql = "SELECT * FROM tasks WHERE id = ?";
  db.query(sql, [req.params.id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error", details: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    // ✅ return directly
    res.json(results[0]);
  });
});

// Create a new task
app.post("/tasks", (req, res) => {
    const { title, description } = req.body;
    const sql = "INSERT INTO tasks (title, description) VALUES (?, ?)";
    db.query(sql, [title, description], (err, results) => {
        if (err) {
            console.error("Error creating task:", err);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
        res.status(201).json({ id: results.insertId, title, description });
    });
});

// delete task from database
app.delete("/tasks/:id", (req, res) => {
    const sql = "DELETE FROM tasks WHERE id = ?";
    db.query(sql, [req.params.id], (err, results) => {
        if (err) {
            console.error("Error deleting task:", err);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
        res.status(204).send();
    });
});

// Update task in the database
app.put("/tasks/:id", (req, res) => {
    const { title, description } = req.body;
    const sql = "UPDATE tasks SET title = ?, description = ? WHERE id = ?";
    db.query(sql, [title, description, req.params.id], (err, results) => {
        if (err) {
            console.error("Error updating task:", err);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
        res.status(200).json({ id: req.params.id, title, description });
    });
});

// the environment variables
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";
const HOST = process.env.HOST || "localhost"; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});