import axios from 'axios';
import{useState, useEffect} from 'react';
import React from 'react';
import Dashboard from './pages/Dashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
 

function App() {

 const [task, setTask] = useState([]);      


 const fetchData = async () => {
   try {
     const response = await axios.get("http://localhost:5000/tasks");
     setMessage(response.data.message);
   } catch (error) {
     console.error("Error fetching data:", error);
   }
 };

 useEffect(() => {
   fetchData();
 }, []);

 return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
 );

}

export default App;
