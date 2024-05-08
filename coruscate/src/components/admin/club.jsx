import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar4 from "../Navbar4";
import "./AdminPanel.css";
import { Footer } from "../enter-first/comp";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clubsResponse = await axios.get("http://localhost:3000/clubs");
        setClubs(clubsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAction = async (action, itemId) => {
    try {
      let updatedClubs = [...clubs];
      const clubIndex = updatedClubs.findIndex((club) => club._id === itemId);

      if (action === "activate") {
        await axios.put(`http://localhost:3000/clubs/${itemId}`, {
          register: true,
        });
        updatedClubs[clubIndex].Register = true;
        alert("Club registration activated successfully");
      } else if (action === "deactivate") {
        await axios.put(`http://localhost:3000/clubs/${itemId}`, {
          register: false,
        });
        updatedClubs[clubIndex].Register = false;
        alert("Club registration deactivated successfully");
      }

      setClubs(updatedClubs);
    } catch (error) {
      console.error("Error updating:", error);
      alert("Error occurred. Please try again.");
    }
  };

  return (
    <div className="fullscreen-background overflow-auto relative">
      <div className="content-overlay">
        <div className="bg-primary w-full overflow-hidden">
          <Navbar4 />
        </div>

        <div className="mt-20 w-full ml-0 form-container">
          <div className="user-list flex flex-wrap justify-center items-center">
            {clubs.map((club, index) => (
              <div key={club._id} className="flex-shrink-0 w-64 mx-4 my-4">
                <img className="image-container relative rounded-full w-48 h-48 overflow-hidden" src={club.url} alt={club.name} />
                <div className="club-details">
                  <span className="club-name">{club.name.toUpperCase()}</span>
                  {club.Register ? (
                    <button
                      className="button1 bg-transparent text-white border border-white hover:bg-opacity-25 hover:bg-white rounded-xl"
                      onClick={() => handleAction("deactivate", club._id)}
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      className="button1 bg-transparent text-white border border-white hover:bg-opacity-25 hover:bg-white rounded-xl"
                      onClick={() => handleAction("activate", club._id)}
                    >
                      Activate
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clubs;
