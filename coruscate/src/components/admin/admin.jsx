import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar4 from "../Navbar4";
import "./AdminPanel.css"; // Import CSS file with provided styles
import { Footer } from "../enter-first/comp";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedClub, setSelectedClub] = useState("");
  const [showSelectClub, setShowSelectClub] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get("http://localhost:3000/users");
        const clubsResponse = await axios.get("http://localhost:3000/clubs");
        const specialResponse = await axios.get("http://localhost:3000/sp");

        // Filter out the admin user
        const filteredUsers = usersResponse.data.filter(
          (user) => user.role !== "admin"
        );

        setUsers(filteredUsers);

        const specialData = specialResponse.data;
        const updatedUsers = filteredUsers.map((user) => {
          const found = specialData.find((item) => item.userId === user._id);
          if (found) {
            return { ...user, isMember: true };
          } else {
            return { ...user, isMember: false };
          }
        });

        setUsers(updatedUsers);
        setClubs(clubsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUserSelection = (userId) => {
    setSelectedUser(userId);
    setShowSelectClub(true);
  };

  const handleClubChange = (event) => {
    setSelectedClub(event.target.value);
  };

  const handleAddRole = async () => {
    try {
      await axios.post("http://localhost:3000/sp", {
        userId: selectedUser,
        clubId: selectedClub,
      });

      alert("User role added successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error adding user role:", error);
      alert("Error occurred. Please try again.");
    }
  };

  const handleRemoveRole = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/sp/${userId}`);

      alert("User role removed successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error removing user role:", error);
      alert("Error occurred. Please try again.");
    }
  };

  const handleToggleBan = async (userId, isBanned) => {
    try {
      if (isBanned) {
        await axios.put(`http://localhost:3000/users/${userId}`, {
          ban: false,
        });
        alert("User reactivated successfully");
      } else {
        await axios.put(`http://localhost:3000/users/${userId}`, { ban: true });
        alert("User banned successfully");
      }

      window.location.reload();
    } catch (error) {
      console.error("Error toggling user ban:", error);
      alert("Error occurred. Please try again.");
    }
  };

  return (
    <div className="fullscreen-background overflow-auto relative">
      <div className="content-overlay">
        <div className="bg-primary w-full overflow-hidden">
          <Navbar4 />
        </div>

        <div className="mt-20 form-container">
          <div className="w-full user-list-container">
            <div className="user-list">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="user-item flex items-center border border-gray-300 rounded-md py-2 mb-4 px-4"
                >
                  <span className="text-white mr-4">{user.email}</span>
                  <div className="flex items-center ml-auto">
                    {user.profile && (
                      <>
                        <img
                          src={user.profile.profileImage}
                          alt="Profile"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <a
                          href={`tel:${user.profile.contactNumber}`}
                          className="text-white mr-2"
                        >
                          Call
                        </a>
                        <a
                          href={`/profile/${user._id}`}
                          className="text-white"
                        >
                          View Profile
                        </a>
                      </>
                    )}
                  </div>
                  <>
                    {user.isMember ? (
                      <button
                        className=" button1 bg-transparent text-white border border-white hover:bg-opacity-25 hover:bg-white rounded-xl"
                        onClick={() => handleRemoveRole(user._id)}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="button1 bg-transparent text-white border border-white hover:bg-opacity-25 hover:bg-white py-2 px-2 rounded-xl ml-auto"
                        onClick={() => handleUserSelection(user._id)}
                      >
                        Add
                      </button>
                    )}
                    <button
                      className="button1 bg-transparent text-white border border-white hover:bg-opacity-25 hover:bg-white rounded-xl ml-4"
                      onClick={() => handleToggleBan(user._id, user.ban)}
                    >
                      {user.ban ? "Reactivate" : "Ban"}
                    </button>
                  </>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showSelectClub && (
        <div className="select-club-popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            className="text-white close-button"
            onClick={() => setShowSelectClub(false)}
          >
            X
          </button>
          <form className="wrapper">
            <div className="input-box ">
              <label>Select Club:</label>
              <select
                className="custom-select"
                value={selectedClub}
                onChange={handleClubChange}
              >
                <option value="">Select a club</option>
                {clubs.map((club) => (
                  <option key={club._id} value={club._id}>
                    {club.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="ib mt-4">
              <button className="button1" type="button" onClick={handleAddRole}>
                Add Role
              </button>
            </div>
          </form>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default AdminPanel;
