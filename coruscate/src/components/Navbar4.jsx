import React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../components/Landing/logo.svg";

const Navbar4 = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/");
  };
  const { userId } = useParams();

  return (
    <nav
      className="bg-black text-white py-4 px-8 flex justify-between items-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
      }}
    >
      <div>
        <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to={`/adashboard/${userId}`}>Home</Link>
        </li>
        <li>
          <Link to={`/admin/${userId}`}>Roles</Link>
        </li>
        <li>
          <Link to={`/clubs/${userId}`}>Register</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar4;
