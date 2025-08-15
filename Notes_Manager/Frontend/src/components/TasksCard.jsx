import axios from 'axios';
import  React, {useEffect} from 'react'
function TaskCard({ task, onEdit, onDelete }) {
  useEffect(() => {
    // Perform side effects here
    axios.get(`http://localhost:5000/tasks`)
      .then(response => {
        // Handle the response data
        console.log("Task details:", response.data);
      })
      .catch(error => {
        console.error("Error fetching task details:", error);
      });
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", border: "1px solid #D1D5DB", borderRadius: "8px", backgroundColor: "white", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <div>
        <h3 style={{ fontWeight: "600" }}>{task.title}</h3>
        <p style={{ fontSize: "14px", color: task.completed ? "#4CAF50" : "#F44336" }}>
          {task.completed ? "Completed" : "Not Completed"}
        </p>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => onEdit(task.id)}
          style={{ padding: "8px 12px", backgroundColor: "#3B82F6", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default TaskCard;