import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Navbar3 from '../Navbar3';
import { Footer } from '../enter-first/comp';

const EventForm = () => {
  const { userId } = useParams();
  const [clubName, setClubName] = useState('');
  const [eventName, setEventName] = useState('');
  const [registerDate, setRegisterDate] = useState('');
  const [registerTime, setRegisterTime] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [postText, setPostText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [clubs, setClubs] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch('http://localhost:3000/clubs');
        const data = await response.json();
        setClubs(data);
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    };

    fetchClubs();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      if (clubs.length === 0) {
        console.error('Clubs data not yet fetched');
        return;
      }

      const selectedClub = clubs.find(club => club.name === clubName);
      if (!selectedClub) {
        throw new Error('Invalid club data');
      }

      const response = await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clubid: selectedClub._id,
          clubName: selectedClub.name,
          event_name: eventName,
          register_date: registerDate,
          register_time: registerTime,
          event_date: eventDate,
          details: postText,
          imageUrl: imageUrl,
          contact_number: contactNumber // Add contact number to the request body
        })
      });

      const data = await response.json();

      setPosts([...posts, data]);
      setIsFormVisible(false);
      setClubName('');
      setRegisterTime('');
      setRegisterDate('');
      setEventDate('');
      setPostText('');
      setImageUrl('');
      setContactNumber('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <Navbar3 />
      <div className="mt-20 rounded-lg" style={{ background: "black", backdropFilter: "brightness(90%)", width: "400px" }}>
        <form onSubmit={handlePostSubmit} className='form' style={{ color: "black" }}>
          <div className="mb-4">
            <select id="clubName" className="border border-gray-300 rounded-md p-2 w-full" value={clubName} onChange={(e) => setClubName(e.target.value)}>
              <option value="">Select Club</option>
              {clubs.map(club => (
                <option key={club.id} value={club.id}>{club.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <input type="text" id="eventName" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="registerDate" className="block font-semibold">Register Date:</label>
            <input type="date" id="registerDate" placeholder="Register Date" value={registerDate} onChange={(e) => setRegisterDate(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="registerTime" className="block font-semibold">Register Time:</label>
            <input type="time" id="registerTime" placeholder="Register Time" value={registerTime} onChange={(e) => setRegisterTime(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="eventDate" className="block font-semibold">Event Date:</label>
            <input type="date" id="eventDate" placeholder="Event Date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <input type="text" id="contactNumber" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <textarea id="postText" placeholder="Details" value={postText} onChange={(e) => setPostText(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full"></textarea>
          </div>
          <div className="mb-4">
            <input type="text" id="imageUrl" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <button
            className={`bg-transparent text-white py-2 px-4 rounded-md border border-white hover:bg-opacity-50 hover:bg-white transition-colors duration-300 ease-in-out`}
          >Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EventForm;
