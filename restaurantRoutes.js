const express = require('express');
const Restaurant = require('../models/Restaurant');
const router = express.Router();

router.get('/', async (req, res) => {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
});

router.post('/', async (req, res) => {
    const { name, location, menu } = req.body;
    const restaurant = new Restaurant({ name, location, menu });
    await restaurant.save();
    res.json({ message: 'Restaurant added' });
});

module.exports = router;
