const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

const loginRoute = require("./routes/Login");
const eventRegistration = require("./routes/EventRegistration");
const events = require("./routes/Event");
const profile = require("./routes/Profile");

connectDB();

app.use(express.json());
app.use(cors());

app.use("/", loginRoute);
app.use("/", eventRegistration);
app.use("/", events);
app.use("/", profile);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
