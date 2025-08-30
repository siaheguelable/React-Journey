import { useState } from "react";
import axios from "axios";
// define a addtask component to add a new task

function AddTask() {
  // define state for form values and message to hold message and set message later on
  // latter on when when want to show success or error message
  const [values, setValues] = useState({
    title: "",
    description: ""
  });
  // define state for message to hold message and set message later on

  const [message, setMessage] = useState("");
  // define a handleSubmit function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate form
    if (!values.title || !values.description) {
      setMessage("❌ Please fill in all fields.");
      return;
    }
    // get token from local storage
    const token = localStorage.getItem("token");
    // using axios to send a POST request to the backend 
    axios.post(
      "http://localhost:5000/tasks",
      // send task data
      { title: values.title, description: values.description },
      {
        // set content type to application/json

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          // add any other headers here
        },
      }
    )
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
