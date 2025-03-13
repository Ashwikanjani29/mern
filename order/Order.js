const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    items: [
        {
            name: String,
            price: Number,
            quantity: Number
        }
    ],
    status: { type: String, default: 'Processing' }  
}, { timestamps: true });  
module.exports = mongoose.model('Order', OrderSchema);
