import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar1 from "../Navbar1";
import { FaPhone } from "react-icons/fa"; // Import phone icon
import styles from "../enter-first/comp/style";
import "./com.css";
import { Footer } from "../enter-first/comp";

const Com = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [registrationStatus, setRegistrationStatus] = useState({});

  useEffect(() => {
    fetchEvents();
    // Retrieve registration status from local storage on component mount
    const storedStatus = localStorage.getItem("registrationStatus");
    if (storedStatus) {
      setRegistrationStatus(JSON.parse(storedStatus));
    }
  }, []);

  useEffect(() => {
    // Save registration status to local storage whenever it changes
    localStorage.setItem(
      "registrationStatus",
      JSON.stringify(registrationStatus)
    );
  }, [registrationStatus]);

  const fetchEvents = async () => {
    try {
      const responseEvents = await fetch("http://localhost:3000/events");
      const responseClubs = await fetch("http://localhost:3000/clubs");

      if (!responseEvents.ok || !responseClubs.ok) {
        throw new Error("Failed to fetch data");
      }

      const dataEvents = await responseEvents.json();
      const dataClubs = await responseClubs.json();

      const postsWithId = dataEvents.map((post) => {
        const club = dataClubs.find((club) => club._id === post.clubid);
        return { ...post, eventId: post.id, clubLogoUrl: club ? club.url : "" };
      });

      setPosts(postsWithId);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleRegistration = async (index) => {
    try {
      if (posts.length === 0) {
        console.log("Posts data is not available yet.");
        return;
      }

      const response = await fetch("http://localhost:3000/eventregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          eventId: posts[index]._id,
        }),
      });

      if (response.status === 201) {
        setRegistrationStatus((prevStatus) => ({
          ...prevStatus,
          [index]: !prevStatus[index],
        }));
        showNotification("Registration successful");
      } else if (response.status === 200) {
        setRegistrationStatus((prevStatus) => ({
          ...prevStatus,
          [index]: !prevStatus[index],
        }));
        showNotification("Withdraw successful");
      } else {
        setRegistrationStatus({});
      }
    } catch (error) {
      console.error(error);
    }
  };

  const showNotification = (message) => {
    alert(message);
  };

  // Function to format date in 'YYYY-MM-DD' format
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }
      return dateString.split("T")[0];
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  // Function to check if register time has passed
  const isRegisterTimePassed = (registerTime, registerByDate) => {
    console.log("Register Time:", registerTime);
    console.log("Register By Date:", registerByDate);

    const currentTime = new Date();
    const registerDateTime = new Date(registerTime);
    const registerByDateTime = new Date(registerByDate);

    console.log("Current Time:", currentTime);
    console.log("Register Date Time:", registerDateTime);
    console.log("Register By Date Time:", registerByDateTime);

    // Check if current time is after the register time or the current date is after the register by date
    return currentTime > registerDateTime || currentTime > registerByDateTime;
  };

  return (
    <div className="com" style={{ background: "black", color: "white" }}>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar1 />
          </div>
        </div>
      </div>
      <div className="mt-20 mx-auto max-w-xl text-white custom-width">
        {posts.map((post, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 mb-4 rounded-md relative flex flex-col items-center" // Add flex and items-center classes
          >
            {/* Club Logo and Name */}
            <div className="flex justify-between w-full items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={post.clubLogoUrl}
                  alt="Club Logo"
                  className="w-full h-full object-cover transform scale-x-(-1)"
                />
              </div>
              <div className="flex items-center">
                <a
                  href={`tel:${post.contact_number}`}
                  className="text-white mr-2"
                >
                  <FaPhone />
                </a>
                <span className="text-white">Contact</span>
              </div>
            </div>
            {/* Event Name */}
            <h1 className="text-xl font-bold mb-2 text-center bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
              {post.event_name}
            </h1>

            {/* Event Details */}
            <p className="mb-2">
              <strong>Register by:</strong> {post.register_time}
            </p>
            <p className="mb-2">
              <strong>Register Date:</strong> {formatDate(post.register_date)}
            </p>
            <p className="mb-2">
              <strong>Event Date:</strong> {formatDate(post.event_date)}
            </p>
            <img src={post.imageUrl} alt="Event" className="mb-2" />
            <p className="mb-2">
              <strong>Details:</strong> {post.details}
            </p>
            {/* Registration Button */}
            <button
              className={`bg-transparent py-2 px-4 rounded-md border hover:bg-opacity-50 transition-colors duration-300 ease-in-out ${
                isRegisterTimePassed(post.register_time, post.register_date)
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white border-white hover:bg-white"
              }`}
              onClick={() => toggleRegistration(index)}
              disabled={isRegisterTimePassed(
                post.register_time,
                post.register_date
              )}
            >
              {registrationStatus[index]
                ? "Withdraw"
                : isRegisterTimePassed(post.register_time, post.register_date)
                ? "Closed"
                : "Register"}
            </button>
          </div>
        ))}

        <div style={{ paddingBottom: "20px" }}></div>
      </div>

      <Footer />
    </div>
  );
};

export default Com;
