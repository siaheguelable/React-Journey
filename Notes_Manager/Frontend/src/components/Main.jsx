import { useState, useEffect } from "react";
import axios from "axios";
import TaskCard from "./TasksCard";
import AddTask from "./AddTask"


function Main() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);



 
  return (
    <div>
      <div>
        <AddTask/>
      </div>

     
      <div>
        <h3>Task Card</h3>
        {/* Render the list of notes here */}
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', listStyleType: 'none', padding: 10 }}>
            <li style={{padding: '12px', border: '1px solid #D1D5DB', borderRadius: '4px'}}><TaskCard task={{ id: 1, title: "Note 1", completed: false }} /></li>
            <li style={{padding: '12px', border: '1px solid #D1D5DB', borderRadius: '4px'}}><TaskCard task={{ id: 2, title: "Note 2", completed: true }} /></li>
            <li style={{padding: '12px', border: '1px solid #D1D5DB', borderRadius: '4px'}}><TaskCard task={{ id: 3, title: "Note 3", completed: false }} /></li>
            <li style={{padding: '12px', border: '1px solid #D1D5DB', borderRadius: '4px'}}><TaskCard task={{ id: 3, title: "Note 3", completed: false }} /></li>
            <li style={{padding: '12px', border: '1px solid #D1D5DB', borderRadius: '4px'}}><TaskCard task={{ id: 3, title: "Note 3", completed: false }} /></li>
            <li style={{padding: '12px', border: '1px solid #D1D5DB', borderRadius: '4px'}}><TaskCard task={{ id: 3, title: "Note 3", completed: false }} /></li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
