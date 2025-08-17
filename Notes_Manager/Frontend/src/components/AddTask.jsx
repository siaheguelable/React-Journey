import { useState } from "react";
import axios from "axios";

function AddTask() {
  const [values, setValues] = useState({
    title: "",
    description: ""
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/tasks", values)
      .then(response => {
        console.log("Task added:", response.data);
        setMessage("✅ Task added successfully!");
        setValues({ title: "" }); 
      })
      .catch(error => {
        console.error("Error adding task:", error);
        setMessage("❌ Failed to add task. Please try again.");
      });
  };

  return (
    <div className="flex justify-center mt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a title"
          style={{
            width: "320px",
            padding: "20px 12px",
            border: "1px solid #D1D5DB",
            borderRadius: "4px 0 0 4px",
            outline: "none",
            boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
            marginRight: "16px"
          }}
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Add a Description"
          style={{
            width: "320px",
            padding: "20px 12px",
            border: "1px solid #D1D5DB",
            borderRadius: "4px 0 0 4px",
            outline: "none",
            boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
            marginRight: "16px"
          }}
          value={values.description}
          onChange={(e) => setValues({ ...values, description: e.target.value })}
        />
        <button
          style={{
            backgroundColor: "#3B82F6",
            color: "white",
            padding: "12px 16px",
            border: "none",
            borderRadius: "0 4px 4px 0",
            cursor: "pointer",
            gap: "10px",
            fontSize: "16px"
          }}
        >
          Add Task
        </button>
      </form>

       {message && (
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}

export default AddTask;
