const express = require('express');
const router = express.Router();
const EventRegistration = require('../models/EventRegistration');

router.post('/eventregister', async (req, res) => {
  try {
    console.log(req.body);
    const { userId, eventId } = req.body;

    const existingRegistration = await EventRegistration.findOne({ userId, eventId });

    if (existingRegistration) {
      await EventRegistration.deleteOne({ userId, eventId });
      res.status(200).json({ message: 'Event unregistered' });
    } else {
      const eventRegistration = new EventRegistration({ userId, eventId });
      await eventRegistration.save();
      res.status(201).json({ message: 'Event registration successful' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/registeredMembers/:eventId', async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const registeredMembers = await EventRegistration.find({ eventId });
    res.json(registeredMembers);
  } catch (error) {
    console.error('Error fetching registered members:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
