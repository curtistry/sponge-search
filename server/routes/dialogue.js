const express = require('express');
const connectDB = require('../db/connect.js'); // Import the connectDB function

const router = express.Router();

// All dialogue
router.get('/', async (req, res) => {
    try {
        // Await database connection
        const db = await connectDB();
        const collection = db.collection("SB_Dialogue");
        const results = await collection.find({})
            .limit(250) // Limit to 250 results
            .toArray();
        res.status(200).send(results);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Dialogue w/ Search queries
router.get('/search', async (req, res) => {
    try {
        const { keywords, character, season } = req.query;

        const filter = {};

        // Set filters
        // $options: "i" indicates case-insensitive searches.
        if (keywords) {
            filter.dialogue = { $regex: keywords, $options: "i" }
        }
        if (character) {
            filter.character = { $regex: character }
        }
        if (season) {
            filter.season = parseInt(season);
        }

        console.log(`Filters: ${filter.keywords} || ${filter.character} || ${filter.season}`)

        // Await database connection
        const db = await connectDB();
        const collection = db.collection("SB_Dialogue");

        // Find documents based on search query/filters.
        const results = await collection.find(filter)
            .limit(250) // Limit to 250 results
            .toArray();
        res.status(200).send(results);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
