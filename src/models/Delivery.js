const mongoose = require('mongoose');

// Delivery Schema
const deliverySchema = new mongoose.Schema({
    deliveryId: {
        type: String,
        required: true,
        unique: true
    },
    customerId: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    deliveryStatus: {
        type: String,
        enum: ['Pending', 'On the way', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    geolocation: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: {
            type: [Number],
            index: '2dsphere' 
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    earnings: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Create geospatial index

// Ensure that the geolocation is indexed for efficient querying

deliverySchema.index({ geolocation: '2dsphere' });

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;