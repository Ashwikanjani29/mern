const express = require("express");
const db = require("../db");

const router = express.Router();

router.post("/", (req, res) => {
    const { user_id, restaurant_id, total } = req.body;

    const sql = "INSERT INTO orders (user_id, restaurant_id, total) VALUES (?, ?, ?)";
    db.query(sql, [user_id, restaurant_id, total], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: "Order placed successfully" });
    });
});

module.exports = router;
