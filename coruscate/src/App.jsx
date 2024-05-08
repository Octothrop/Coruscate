import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/log-sign/Login.jsx";
import Signup from "./components/log-sign/Signup.jsx";
import Enter from "./components/enter-first/Enter.jsx";
import Com from "./components/community/com.jsx";
import AdminPanel from "./components/admin/admin.jsx";
import Profile from "./components/profile/prof.jsx";
import ProfileForm from "./components/profile/iprofile";
import Landing from "./components/Landing/Landing.jsx";
import EventForm from "./components/community/compost.jsx";
import RegisteredMembers from "./components/registerd_event/event_member.jsx";
import Clubs from "./components/admin/club.jsx";
import MRegister from "./components/registerationclub/mregister.jsx";

import Home from "./components/clubs_pages/src/routes/Home.jsx";
import About from "./components/clubs_pages/src/routes/About.jsx";
import Gallery from "./components/clubs_pages/src/routes/Gallery.jsx";
import Blog from "./components/clubs_pages/src/routes/Blog.jsx";
import Home_FLC from "./components/clubs_pages/src/routes/Home_FLC.jsx";
import Community_FLC from "./components/clubs_pages/src/routes/Community_FLC.jsx";
import Gallery_FLC from "./components/clubs_pages/src/routes/Gallery_FLC.jsx";
import Blog_FLC from "./components/clubs_pages/src/routes/Blog_FLC.jsx";
import Home_Authorcraft from "./components/clubs_pages/src/routes/Home_Authorcraft.jsx";
import About_Authorcraft from "./components/clubs_pages/src/routes/About_Authorcraft.jsx";
import Gallery_Authorcraft from "./components/clubs_pages/src/routes/Gallery_Authorcraft.jsx";
import Blog_Authorcraft from "./components/clubs_pages/src/routes/Blog_Authorcraft.jsx";
import Home_Rachana from "./components/clubs_pages/src/routes/Home_Rachana.jsx";
import Blog_Rachana from "./components/clubs_pages/src/routes/Blog_Rachana.jsx";
import About_Rachana from "./components/clubs_pages/src/routes/About_Rachana.jsx";
import Gallery_Rachana from "./components/clubs_pages/src/routes/Gallery_Rachana.jsx";
import About_Taleem from "./components/clubs_pages/src/routes/About_Taleem.jsx";
import Blog_Taleem from "./components/clubs_pages/src/routes/Blog_Taleem.jsx";
import Gallery_Taleem from "./components/clubs_pages/src/routes/Gallery_Taleem.jsx";
import Home_Taleem from "./components/clubs_pages/src/routes/Home_Taleem.jsx";
import AdminDashboard from "./components/CoreHandler/admin_dashboard.jsx";
import CoreDashboard from "./components/CoreHandler/core_dashboard.jsx";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/com/:userId" element={<Com />} />
          <Route path="/admin/:userId" element={<AdminPanel />} />
          <Route path="/prform/:userId" element={<ProfileForm />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/home/:userId" element={<Landing />} />
          <Route path="/eform/:userId" element={<EventForm />} />
          <Route path="/rm/:userId" element={<RegisteredMembers />} />
          <Route path="/adashboard/:userId" element={<AdminDashboard />} />
          <Route path="/clubs/:userId" element={<Clubs/>} />
          <Route path="/cdashboard/:userId" element={<CoreDashboard/>} />
          <Route path="/register/:userId" element={<MRegister/>} />
  



          <Route path="/home_yoga" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/Home_flc/:userId" element={<Home_FLC />} />
          <Route path="/community/:userId" element={<Community_FLC />} />
          <Route path="/gallery_FLC/:userId" element={<Gallery_FLC />} />
          <Route path="/blog_FLC/:userId" element={<Blog_FLC />} />

          <Route path="/Home_Authorcraft/:userId" element={<Home_Authorcraft />} />
          <Route path="/About_Authorcraft/:userId" element={<About_Authorcraft />} />
          <Route
            path="/Gallery_Authorcraft/:userId"
            element={<Gallery_Authorcraft />}
          />
          <Route path="/Blog_Authorcraft" element={<Blog_Authorcraft />} />

          <Route path="/Home_Rachana" element={<Home_Rachana />} />
          <Route path="/About_Rachana" element={<About_Rachana />} />
          <Route path="/Gallery_Rachana" element={<Gallery_Rachana />} />
          <Route path="/Blog_Rachana" element={<Blog_Rachana />} />

          <Route path="/Home_Taleem" element={<Home_Taleem />} />
          <Route path="/About_Taleem" element={<About_Taleem />} />
          <Route path="/Gallery_Taleem" element={<Gallery_Taleem />} />
          <Route path="/Blog_Taleem" element={<Blog_Taleem />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
