import React from "react";  

const styles = {
  formContainer: {
    width: "400px",
    margin: "0 auto",
    padding: "150px",
    paddingRight: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    textAlign: "center",
    marginTop: "40px", // centers text and button

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
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default function SignInForm() {
  return (
    <div style={styles.formContainer}>
      <h2>Sign In</h2>
     <form action="">
       <input type="text" placeholder="Username" style={styles.input} />
       <input type="password" placeholder="Password" style={styles.input} />
       <button style={styles.signInButton}>Sign In</button>
     </form>
      <div>
        <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>
      <div>
        <p>Forgot your password? <a href="/reset-password">Reset it here</a></p>
      </div>
      <div>
        <p>Need help? <a href="/help">Visit our help center</a></p>
      </div>
    </div>
  );
}
