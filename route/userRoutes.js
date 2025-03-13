const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../config/db');
const router = express.Router();


router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'User registered successfully' });
    });
});


router.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(401).json({ message: 'User not found' });

        const match = await bcrypt.compare(password, results[0].password);
        if (!match) return res.status(401).json({ message: 'Incorrect password' });

        res.json({ message: 'Login successful', user: results[0] });
    });
});

module.exports = router;
