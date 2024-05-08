import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar2 from "../Navbar2";
import "../admin/AdminPanel.css";
import { Footer } from "../enter-first/comp";

function MRegister() {
  const [clubs, setClubs] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clubResponse = await axios.get(`http://localhost:3000/clubs`);
        const clubRegResponse = await axios.get(`http://localhost:3000/clubreg/${userId}`);
        const clubsData = clubResponse.data;
        const clubRegData = Array.isArray(clubRegResponse.data) ? clubRegResponse.data : [];

        // Merge club data with registration status
        const updatedClubs = clubsData.map(club => {
          const isRegistered = clubRegData.some(reg => reg.clubId === club._id);
          return { ...club, isRegistered };
        });

        console.log(updatedClubs);

        setClubs(updatedClubs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  const handleAction = async (action, clubId) => {
    try {
      if (action === "activate") {
        await axios.post(`http://localhost:3000/clubreg/${userId}`, { clubId });
        alert("Club registed successfully");
      } else if (action === "deactivate") {
        await axios.delete(`http://localhost:3000/clubreg/${userId}`, { data: { clubId } });
        alert("Registrations are not open yet ..!");
      }

      const updatedClubs = clubs.map(club =>
        club._id === clubId ? { ...club, isRegistered: action === "activate" ? true : false } : club
      );
      setClubs(updatedClubs);
    } catch (error) {
      console.error("Error updating:", error);
      alert("Registrations are not open yet ..!");
    }
  };

  return (
    <div className="fullscreen-background overflow-auto relative">
      <div className="content-overlay">
        <div className="bg-primary w-full overflow-hidden">
          <Navbar2 />
        </div>

        <div className="mt-20 w-full ml-0 form-container">
          <div className="user-list flex flex-wrap justify-center items-center">
            {clubs.map((club, index) => (
              <div key={club._id} className="flex-shrink-0 w-64 mx-4 my-4">
                <img
                  className="image-container relative rounded-full w-48 h-48 overflow-hidden"
                  src={club.url}
                  alt={club.name}
                />
                <div className="club-details">
                  <span className="club-name">{club.name.toUpperCase()}</span>
                  {club.isRegistered ? (
                    <button
                      className="button1 bg-transparent text-white border border-white hover:bg-opacity-25 hover:bg-white rounded-xl"
                      onClick={() => handleAction("deactivate", club._id)}
                    >
                      Registered
                    </button>
                  ) : (
                    <button
                      className="button1 bg-transparent text-white border border-white hover:bg-opacity-25 hover:bg-white rounded-xl"
                      onClick={() => handleAction("activate", club._id)}
                    >
                      Register
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
}

export default MRegister;
