import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar1 from "../Navbar1";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const { userId } = useParams(); // Corrected variable name to userId

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/profiles/${userId}`);
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        window.location.href = `/prform/${userId}`; // Corrected URL path to use userId
      }
    };

    fetchProfileData();
  }, [userId]);

  // Function to redirect to LinkedIn profile
  const redirectToLinkedIn = () => {
    if (profileData && profileData.linkedIn) {
      window.open(profileData.linkedIn, '_blank');
    }
  };

  // Function to initiate phone call
  const initiatePhoneCall = () => {
    if (profileData && profileData.contactNumber) {
      window.location.href = `tel:${profileData.contactNumber}`;
    }
  };

  return (
    <>
    <Navbar1 />
      <main className="profile-page">
        <section className="relative block h-560-px bg-black">
          {/* Background section */}
        </section>
        <section className="relative py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-xl rounded-lg py-10 px-4">
              <div className="px-6">
                {profileData && (
                  <div className="text-center">
                    <img
                      alt="Profile"
                      className="shadow-xl rounded-full h-auto align-middle border-none mx-auto mb-4"
                      src={profileData.profileImage}
                      style={{ maxWidth: "200px" }}
                    />
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-white">
                      {profileData.name}
                    </h3>
                    <div className="text-sm leading-normal mb-2 font-bold uppercase text-white">
                      <i className="fas fa-map-marker-alt mr-2 text-lg"></i>{" "}
                      {profileData.location}
                    </div>
                    <div className="mb-2 text-white">
                      <i className="fas fa-briefcase mr-2 text-lg"></i>
                      {profileData.department} {/* Changed from jobTitle */}
                    </div>
                  </div>
                )}
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-white">
                        {/* Display artist description if available */}
                        {profileData && profileData.description}
                      </p>
                      {/* Conditionally render the call button */}
                      {profileData && profileData.contactNumber && (
                        <a href={`tel:${profileData.contactNumber}`} className="mr-4">
                          <FontAwesomeIcon icon={faPhoneAlt} className="text-white" />
                        </a>
                      )}
                      {/* LinkedIn logo */}
                      <button onClick={redirectToLinkedIn}>
                        <FontAwesomeIcon icon={faLinkedin} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
