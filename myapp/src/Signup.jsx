import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!(name && email && phone && password)) {
    //   setError("All input field are required");
    //   return
    // }

    // const allError = {};
    // if (!name) allError.Error.name = "name is required";
    // if (!email) allError.Error.name = "email is required";
    // if (!phone) allError.Error.name = "phone is required";
    // if (!password) allError.Error.name = "password is required";
    // setError(allError)

    const result = { name, email, phone, password };
    console.log(`>>>>>>result`, result);
    localStorage.setItem("user", JSON.stringify(result));
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    alert("Signup Successful!");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign up Form</h2>
        {/* {error && <p style={{color:'red'}}>{error}</p>} */}
        <form onSubmit={handleSubmit} className="signup-form">
          {/* <div> */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {/* {error.name && <p style={{color:'red'}}>{error.name}</p>} */}
          {/* </div> */}
          {/* <div> */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* {error.email && <p style={{color:'red'}}>{error.email}</p>} */}
          {/* </div> */}
          {/* <div> */}
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {/* {error.phone && <p style={{color:'red'}}>{error.phone}</p>} */}
          {/* </div> */}
          {/* <div> */}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* {error.password && <p style={{color:'red'}}>{error.passowrd}</p>} */}
          {/* </div> */}
          <button type="submit">Create Account</button>
        </form>
        <p className="login-text" style={{ fontWeight: "900" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
