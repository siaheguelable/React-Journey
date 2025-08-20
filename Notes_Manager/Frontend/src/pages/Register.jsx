import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";

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



function Register() {

  // user registered message
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
 


  axios.post("http://localhost:5000/users", {
    username,
    email,
    password
  })
  .then(response => {
    console.log("Registration successful:", response.data);
    // Handle successful registration (e.g., redirect to login page)
    setMessage("✅ Registration successful! You can now log in.");
    navigate("/login"); // Redirect to login page after successful registration
  })
  .catch(error => {
    console.error("There was an error registering:", error);
    // Handle registration error (e.g., show error message)
    setMessage("❌ Registration failed. Please try again.");
  });

};
  return (
    <div style={styles.formContainer}>
      <h2 style={{ fontSize: "30px", marginTop: "-25px" }}>Register</h2>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" name="username" placeholder="Username" style={styles.input}
        value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" name="email" placeholder="Email" style={styles.input}
        value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Password" style={styles.input}
        value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" style={styles.signInButton}>Register</button>
      </form>

      <div>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
      {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
    </div>
  );
}
export default Register;