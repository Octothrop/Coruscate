const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const SP = require("../models/Core")

router.post("/events", async (req, res) => {
  try {
    const {
      clubid,
      clubName,
      register_date,
      register_time,
      event_date,
      event_name,
      details,
      imageUrl,
      contact_number,
    } = req.body;
    console.log(req.body);
    const newEvent = new Event({
      clubid,
      clubName,
      register_date,
      register_time,
      event_date,
      event_name,
      details,
      imageUrl,
      contact_number,
    });

    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/events/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const coreDet = await SP.findOne({ userId: userId });

    if (!coreDet) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(coreDet);
    const events = await Event.find({ clubid: coreDet.clubId });

    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
