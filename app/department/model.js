const mongoose = require('mongoose');
const departmentMasterSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
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

const departmentMasterModel = mongoose.model('department-master', departmentMasterSchema)

module.exports = departmentMasterModel