const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    farmName: {
        type: String,
        required: true
    },
    farmLocation: {
        type: { type: String, enum: ['Point'] },
        coordinates: {
            type: [Number],
            index: '2dsphere', // Geospatial index
            required: true
        }
    },
    certifications: {
        type: [String],
        default: []
    },
    products: {
        type: [String],
        default: []
    },
    shops: {
        type: [String],
        default: []
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    verified: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Farmer', farmerSchema);