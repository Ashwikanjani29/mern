const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
    menu: [{ name: String, price: Number }]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
