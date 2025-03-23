const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

// Apply for a Job
router.post("/", async (req, res) => {
    try {
        const application = new Application(req.body);
        await application.save();
        res.status(201).json(application);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
