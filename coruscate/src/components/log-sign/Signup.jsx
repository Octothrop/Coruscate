import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./log-sign.css";
import { FaUserAstronaut } from "react-icons/fa";
import { TbUfo } from "react-icons/tb";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        // Registration successful, redirect to login
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred, please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="reg">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {error && <p className="error-message">{error}</p>}
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUserAstronaut className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TbUfo className="icon" />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          <div className="register-link">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
