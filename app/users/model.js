const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    mobile_number: {
        type: Number,
        default: null
    },
    emailId: {
        type: String,
        unique: true
    },
    department_id: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'department-master'
    },
    joining_date: {
        type: Date,
    },
    address: {
        city: {
            type: String,
            default: null
        },
        state: {
            type: String,
            default: null
        },
        country: {
            type: String,
            default: null
        },
        landmark: {
            type: String,
            default: null
        }
    },
    status: {
        type: String,
        enum: ['active', 'deleted'],
        index: true,
        default: 'active'
    },
}, {
    timestamps: true
});

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel