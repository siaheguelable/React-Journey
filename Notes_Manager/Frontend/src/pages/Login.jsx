import React from "react"; 
import  Register from "./Register"; // Import the Register component
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const styles = {
  formContainer: {
    width: "400px",
    margin: "0 auto",
    padding: "150px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    textAlign: "center",
    marginTop: "30px", // centers text and button
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "60px",
    

  },
  input: {
    width: "100%",
    padding: "15px",
    paddingRight: "-20px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  signInButton: {
    display: "block",
    margin: "0 auto", // centers the button horizontally
    padding: "15px 30px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    try {
      const response = await axios.post("http://localhost:5000/users", {
        username,
        password,
      });
      console.log("✅Login successful:", response.data);
    } catch (error) {
      console.error("❌ Error logging in:", error);
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={{ fontSize: "30px", marginTop: "-25px" }}>Sign In</h2>
     <form onSubmit={handleSubmit}>
       <input type="text"  name="username" placeholder="Username" style={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} />
       <input type="password" name="password" placeholder="Password" style={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
       <button style={styles.signInButton}>Sign In</button>
     </form>
      <div>
        <p style={{ marginTop: "20px",fontSize: "25px" }}>Don't have an account?<Link to="/register">Register</Link></p>
      </div>
      <div>
        <p style={{ marginTop: "20px",fontSize: "25px" }}>Forgot your password? <a>Reset it here</a></p>
      </div>
      <div>
        <p style={{ marginTop: "20px",fontSize: "25px" }}>Need help? <a>Visit our help center </a></p>
      </div>
      </div>
  );
}
export default SignInForm;