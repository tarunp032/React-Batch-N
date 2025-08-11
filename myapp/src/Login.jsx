import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setMessage("No user found. Please signup first.");
      setUserData(null);
      return;
    }

    if (storedUser.email !== email && storedUser.password !== password) {
      setMessage("Email and Password are wrong");
      setUserData(null);
    } else if (storedUser.email !== email) {
      setMessage("Email is wrong");
      setUserData(null);
    } else if (storedUser.password !== password) {
      setMessage("Password is wrong");
      setUserData(null);
    } else {
      setMessage("Login successfully");
      setUserData(storedUser);
    }

    setEmail("");
    setPassword("");
  };

  const handleSignout = () => {
    setUserData(null);
    localStorage.removeItem("user");
    setMessage("You have signed out successfully.");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login form</h2>
        {!userData ? (
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div style={{ marginTop: "20px" }}>
            {message && <p>{message}</p>}
            <h3>User Details:</h3>
            <p>
              <b>Name:</b> {userData.name}
            </p>
            <p>
              <b>Email:</b> {userData.email}
            </p>
            <p>
              <b>Phone:</b> {userData.phone}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "20px",
              }}
            >
              <button onClick={handleSignout}>Sign Out</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
