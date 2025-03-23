const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Create Job Posting
router.post("/", async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch All Jobs
router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
