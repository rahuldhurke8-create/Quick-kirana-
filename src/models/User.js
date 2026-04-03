const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ['customer', 'shop_owner', 'farmer', 'delivery_partner'],
        required: true
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /[0-9]{10}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: {
            type: [Number],
            index: '2dsphere',
            required: true
        }
    },
    isActive: {
        type: Boolean,
        default: true
    },
},{ timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;