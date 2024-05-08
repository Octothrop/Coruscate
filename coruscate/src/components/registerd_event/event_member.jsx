import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './em.css';
import Navbar3 from '../Navbar3';

function RegisteredMembers() {
  const { userId } = useParams();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [registeredMembers, setRegisteredMembers] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchEvents();
    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      fetchRegisteredMembers(selectedEvent);
    }
  }, [selectedEvent]);

  const fetchEvents = async () => {
    try {
      // Fetch the user's club ID from the "sp" table
      const spResponse = await axios.get(`http://localhost:3000/sp`);
      const clubId = spResponse.data.clubId;

      // Fetch events associated with the user's club
      const response = await axios.get(`http://localhost:3000/events/${userId}`);
      setEvents(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchRegisteredMembers = async (eventId) => {
    try {
      const response = await axios.get(`http://localhost:3000/registeredMembers/${eventId}`);
      setRegisteredMembers(response.data);
    } catch (error) {
      console.error('Error fetching registered members:', error);
    }
  };

  const getUserEmail = (memberId) => {
    const user = users.find(u => u._id === memberId);
    return user ? user.email : null; // Return null if email not found
  };

  return (
    <div className="fullscreen-background">
      <Navbar3 />
      <div className="content-overlay">

        <div className="mt-20 form-container">
          <div className="wrapper">
            <label>Select Event:</label><br /><br />
            <select value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)} className="custom-select">
              <option value="">Select an event</option>
              {events.map(event => (
                <option key={event._id} value={event._id}>{event.event_name}</option>
              ))}
            </select>

            {selectedEvent && (
              <div>
                <br/><br /><h2>Registered Members:</h2><br />
                <ul>
                  {registeredMembers.map(member => (
                    <li key={member.userId} onMouseEnter={() => setHoveredMember(member.userId)} onMouseLeave={() => setHoveredMember(null)}>
                      {getUserEmail(member.userId) && (
                        <span className="member-email">{getUserEmail(member.userId)}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisteredMembers;
