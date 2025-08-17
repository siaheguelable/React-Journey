import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './TasksCard';
import AddTask from './AddTask'; // Assuming you have an AddTask component


function Main() {
  const [tasks, setTasks] = useState([]);
axios.get("http://localhost:5000/tasks")
  .then(res => {
    //console.log(res.data); // inspect API response
    const data = Array.isArray(res.data) ? res.data : res.data.task; 
    setTasks(data || []); // ensure it's always an array
  })
  .catch(err => console.error("Error fetching tasks:", err));

  return (
    <div>
      <AddTask />

      <h3>Task Card</h3>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', listStyleType: 'none', padding: 10 }}>
        {Array.isArray(tasks) && tasks.map(task => (
          <li key={task.id} style={{padding: '12px', border: '1px solid #D1D5DB', borderRadius: '4px'}}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;