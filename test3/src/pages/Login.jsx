import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // ✅ Import useDispatch
import { setUser } from "../slice/userSlice"; // ✅ Import setUser

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ Initialize dispatch

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // ✅ Save user in Redux state
      dispatch(setUser(user));

      // ✅ Save user in localStorage for persistence
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful!");
      navigate("/");
    } else {
      alert("No user found. Please signup first.");
      navigate("/signup");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}
