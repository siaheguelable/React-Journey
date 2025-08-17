import React, { useState } from "react";
import axios from "axios";
import PopupFormExample from "./popUpForm"; // Make sure this is the form popup

function TaskCard({ task, onEdit, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdate = (updatedValues) => {
    axios
      .put(`http://localhost:5000/tasks/${task.id}`, { ...task, ...updatedValues })
      .then((response) => {
        console.log("Task updated:", response.data);
        onEdit(response.data); // Pass updated task back to parent
        setIsOpen(false); // close popup
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:5000/tasks/${task.id}`)
      .then(() => {
        console.log("Task deleted:", task.id);
        onDelete(task.id);
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        border: "1px solid #D1D5DB",
        borderRadius: "8px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>
        <h3>{task.title || "Untitled"}</h3>
        <p>{task.description || "No description"}</p>
        <p
          style={{
            fontSize: "14px",
            color: task.completed ? "#4CAF50" : "#F44336",
          }}
        >
          {task.completed ? "Completed" : "Not Completed"}
        </p>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: "8px 12px",
            backgroundColor: "#3B82F6",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Edit
        </button>
        <button
          onClick={deleteHandler}
          style={{
            padding: "8px 12px",
            backgroundColor: "#F44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>

      {/* Render PopupFormExample when isOpen = true */}
      {isOpen && (
        <PopupFormExample
          task={task} // pass current task so form is prefilled
          onClose={() => setIsOpen(false)}
          onSubmit={handleUpdate}
        />
      )}
    </div>
  );
}

export default TaskCard;
