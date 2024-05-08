const express = require("express");
const router = express.Router();
const Profile = require("../models/profile");

router.use(express.json());

router.post("/profiles", async (req, res) => {
  const { name, location, department, profileImage, description } = req.body;
  try {
    const newProfile = new Profile({
      name,
      location,
      department,
      profileImage,
      description,
    });
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
