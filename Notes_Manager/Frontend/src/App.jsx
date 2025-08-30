import axios from 'axios';
import{useState, useEffect} from 'react';
import React from 'react';    
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Register from './pages/Register';  
 

function App() {

// const [message, setMessage] = useState(""); // ✅ define it     


//  const fetchData = async () => {
//    try {
//      const response = await axios.get("http://localhost:5000/tasks");
//      setMessage(response.data.message);
//    } catch (error) {
//      console.error("Error fetching data:", error);
//    }
//  };

//  useEffect(() => {
//    fetchData();
//  }, []);    

 return (
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
    </Routes>
  </BrowserRouter>
 );

}

export default App;
