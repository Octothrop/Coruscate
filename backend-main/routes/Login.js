const express = require("express");
const router = express.Router();
const Login = require("../models/Login");
const Club = require("../models/Clubs");
const SP = require("../models/Core");
const Profile = require("../models/profile");

//Login
router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required fields" });
    }

    const user = await Login.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (user.ban) {
      return res.status(403).json({ message: "You are banned. Please contact the administrator." });
    }

    if (role === "core") {
      const spEntry = await SP.findOne({ userId: user._id });
      if (!spEntry) {
        return res.status(403).json({ message: "You are not authorized as core member" });
      }
    }

    const userRole = user.role || "member" ;
    if (userRole !== role && role!== "core") {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    return res
      .status(200)
      .json({
        message: "Login successful",
        userId: user._id,
        role: role,
        user,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


//singin
router.post("/signin", async (req, res) => {
  const { password, email } = req.body;

  try {
    const existingUser = await Login.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new Login({
      password,
      email,
      role: "member",
    });

    await newUser.save();

    return res.status(201).json({ message: "Sign-In successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

//users.get
router.get("/users", async (req, res) => {
  try {
    const users = await Login.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

//ban
router.put("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { ban } = req.body;

    const club = await Login.findByIdAndUpdate(userId, { ban: ban }, { new: true });

    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    res.json(club);
  } catch (error) {
    console.error("Error updating club registration:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//clubs.get
router.get("/clubs", async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (error) {
    console.error("Error fetching clubs:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

//admin.role
router.post("/sp", async (req, res) => {
  try {
    const { userId, clubId } = req.body;
    await SP.findOneAndUpdate({ userId }, { clubId }, { upsert: true });
    res.status(200).send("User added to SP table successfully.");
  } catch (error) {
    console.error("Error adding user to SP table:", error);
    res.status(500).send("Internal Server Error");
  }
});

//admin.get role
router.get("/sp", async (req, res ) => {
  try {
    const specialEntries = await SP.find();
    res.status(200).json(specialEntries);
  } catch (error) {
    console.error("Error fetching special entries:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//admin.delete role
router.delete("/sp/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    await SP.deleteOne({ userId: userId });
    res.status(200).json({ message: "User role removed successfully" });
  } catch (error) {
    console.error("Error removing user role:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//profile fill
router.post("/profiles", async (req, res) => {
  const {
    userId,
    name,
    location,
    department,
    profileImage,
    description,
    linkedIn,
    contactNumber,
  } = req.body;
  try {
    const newProfile = new Profile({
      userId,
      name,
      location,
      department,
      profileImage,
      description,
      linkedIn,
      contactNumber,
    });
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//profile get
router.get("/profiles/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const profile = await Profile.findOne({ userId });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/clubs/:id", async (req, res) => {
  try {
    const clubId = req.params.id;
    const { register } = req.body;

    const club = await Club.findByIdAndUpdate(clubId, { Register: register }, { new: true });

    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    res.json(club);
  } catch (error) {
    console.error("Error updating club registration:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// club.controller.js
const ClubR = require('../models/ClubReg');

// Route for registering a user to a club
router.post('/clubreg/:userId', async (req, res) => {
  const { userId } = req.params;
  const { clubId } = req.body;

  try {
    const existingRegistration = await ClubR.findOne({ userId, clubId });
    if (existingRegistration) {
      return res.status(409).json({ message: 'User is already registered to the club' });
    }

    const clubRegistration = new ClubR({ userId, clubId });
    await clubRegistration.save();

    res.status(201).json({ message: 'User registered to the club successfully' });
  } catch (error) {
    console.error('Error registering user to club:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for checking if a user is registered to a club
router.get('/clubreg/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const existingRegistration = await ClubR.findOne({ userId });
    if (existingRegistration) {
      res.status(200).json({ isRegistered: true });
    } else {
      res.status(200).json({ isRegistered: false });
    }
  } catch (error) {
    console.error('Error checking user registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;