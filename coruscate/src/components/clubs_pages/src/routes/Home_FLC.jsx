import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar_FLC";
import { useParams } from "react-router-dom";

function Home_FLC() {
  const [isRegistered, setIsRegistered] = useState(false);
  const { userId } = useParams();
  const clubId = "660c5a40312d186459eb77c9";

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const response = await fetch(`http://localhost:3000/clubreg/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setIsRegistered(data.isRegistered);
        } else {
          // Handle other status codes if needed
        }
      } catch (error) {
        console.error("Error checking registration:", error);
      }
    };
  
    checkRegistration();
  }, [userId]);
  
  const handleRegister = async () => {
    try {
      const response = await fetch(`http://localhost:3000/clubreg/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ clubId })
      });

      if (response.ok) {
        setIsRegistered(true);
        alert("Registration successful!");
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed!");
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://wallpapercave.com/wp/wp13396133.png"
        buttonText={isRegistered ? "Registered" : "Register Today"}
        onClick={!isRegistered ? handleRegister : null}
        btnClass="show" // Ensure this class is properly defined in your CSS
      />
    </>
  );
}

export default Home_FLC;
