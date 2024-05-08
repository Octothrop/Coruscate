import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./log-sign.css";
import { FaUserAstronaut } from "react-icons/fa";
import { TbUfo } from "react-icons/tb";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        console.log(data);
        if (data.role === "core") {
          window.location.href = `/cdashboard/${data.userId}`;
        } else if (data.role === "admin") {
          window.location.href = `/adashboard/${data.userId}`;
        } else {
          window.location.href = `/home/${data.userId}`;
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred, please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="log">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
          <div className="input-box backdrop-blur-10 bg-transparent">
            <select
              value={role}
              onChange={handleRoleChange}
              className="custom-select rounded-3xl"
            >
              <option value=""> Select Role</option>
              <option value="core"> Core</option>
              <option value="admin"> Admin</option>
              <option value="member"> Member</option>
            </select>
          </div>
          <div className="px-6 pt-4 ">
            {error && <p className="error-message text-center">{error}</p>}
          </div>
          <button type="submit" disabled={loading}>
            Login
          </button>

          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="a">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
