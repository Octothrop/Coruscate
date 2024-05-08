import React, { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Navbar2 from '../Navbar2';
import { Footer } from '../enter-first/comp';

const ProfileForm = () => {
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    department: '',
    profileImage: '',
    description: '',
    linkedIn: '',
    contactNumber: '',
    userId: userId
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/profiles', formData);
      console.log(response.data);
      
      window.location.href = `/profile/${userId}`;
      
      setFormData({
        name: '',
        location: '',
        department: '',
        profileImage: '',
        description: '',
        linkedIn: '',
        contactNumber: '',
        userId: userId
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="fullscreen-background bg-primary" style={{ height: '100vh', overflowY: 'auto' }}>
      <Navbar2/>
      <div className="mt-20 form-container wrapper p-10 my-10" style={{ width: '480px' }}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="input-box rounded-md text-black"
              style={{ height: '5px' }}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              required
              className="input-box rounded-md text-black"
              style={{ height: '5px' }}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="department" 
              value={formData.department}
              onChange={handleChange}
              placeholder="Department"
              required
              className="input-box rounded-md text-black"
              style={{height: '5px' }}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="profileImage"
              value={formData.profileImage}
              onChange={handleChange}
              placeholder="Profile Image URL"
              required
              className="input-box rounded-md text-black"
              style={{ height: '5px' }}
            />
          </div>
          <div className="flex flex-col">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description" 
              cols="50"
              className="input-box rounded-md text-black"
              style={{ height: '10px' }}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              placeholder="LinkedIn Profile"
              className="input-box rounded-md text-black"
              style={{  height: '5px' }}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              className="input-box rounded-md text-black"
              style={{ height: '5px' }} 
            />
          </div>
          <button className="button1" type="submit">Submit</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default ProfileForm;
