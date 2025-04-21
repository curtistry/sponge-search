const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const dialogueRoutes = require("./routes/dialogue");
app.use('/dialogue', dialogueRoutes);

app.get("/", (req, res) => {
    res.send("The SpongeSearch API works.")
})

// Connect to the specified port, or port 5000.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}.`))