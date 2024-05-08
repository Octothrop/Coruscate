import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMenuItems } from "./MenuItems_FLC";
import logo from "../../../Landing/logo.svg";

const Navbar = () => {
  const { userId } = useParams();
  const MenuItems = getMenuItems();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    // Perform fetch to check user registration status
    const checkRegistration = async () => {
      try {
        const response = await fetch(`http://localhost:3000/clubreg/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setIsRegistered(data.isRegistered);
        } else {
          console.error("Error checking registration:", response.statusText);
        }
      } catch (error) {
        console.error("Error checking registration:", error);
      }
    };

    checkRegistration();
  }, [userId]);

  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between items-center" style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 9999 }}>
      <div>
        <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
      </div>
      <ul className="flex space-x-6">
        {MenuItems.map((item, index) => (
          item.title === "Community" && !isRegistered ? null : (
            <li key={index}>
              <Link to={`${item.url}/${userId}`} className="text-white">
                {item.title}
              </Link>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
