import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ signupData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (!signupData) {
      setMessage("No user found. Please signup first!");
      return;
    }
    if (!email || !password) {
      setMessage("All fields are required!");
      return;
    }
    if (email === signupData.email && password === signupData.password) {
      setMessage("Welcome! Login Successful.");
    } else {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
      <p style={{ marginTop: "10px" }}>
        Don't have an Account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "50px auto",
  },
  input: {
    padding: "10px",
    margin: "5px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    margin: "5px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
