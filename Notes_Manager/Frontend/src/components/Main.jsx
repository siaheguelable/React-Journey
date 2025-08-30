import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './TasksCard';
import AddTask from './AddTask';

function Main() {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  // Handler for editing a task
  const handleEdit = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  // Handler for deleting a task
  const handleDelete = (deletedTaskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== deletedTaskId));
  };

  return (
    <div>
      <AddTask />
      <h3>Task Card</h3>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', listStyleType: 'none', padding: 10 }}>
        {Array.isArray(tasks) && tasks.map(task => (
          <li key={task.id} style={{padding: '12px', border: '1px solid #D1D5DB', borderRadius: '4px'}}>
            <TaskCard task={task} onEdit={handleEdit} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;