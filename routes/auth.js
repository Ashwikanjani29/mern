const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

router.post("/register", (req, res) => {
    const { name, email, password, address } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = "INSERT INTO users (name, email, password, address) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, hashedPassword, address], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: "User registered successfully" });
    });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, result) => {
        if (err) return res.status(500).json({ error: err });

        if (result.length === 0) return res.status(401).json({ message: "User not found" });

        const user = result[0];
        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) return res.status(401).json({ message: "Incorrect password" });

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user });
    });
});

module.exports = router;
