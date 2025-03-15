const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
    db.query("SELECT * FROM restaurants", (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result);
    });
});

module.exports = router;
