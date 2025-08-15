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
app.get("/tasks",(req,res)=>{
    const sql="SELECT * FROM tasks";// your tasks table
    const task = db.query(sql, (err, results) => {
       if (!task) return res.status(404).send('Task not found')
        
        res.json({ task: results[0] });
    });
})

// Define your routes here and select task from the database

app.get("/tasks/:id", (req, res) => {
    const sql = "SELECT * FROM tasks WHERE id = ?";
    const task = db.query(sql, [req.params.id], (err, results) => {
       if (!task) return res.status(404).send('Task not found');
        res.json({ task: results[0] });
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

// the environment variables
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";
const HOST = process.env.HOST || "localhost"; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});