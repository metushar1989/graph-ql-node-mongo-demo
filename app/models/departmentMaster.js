const mongoose = require('mongoose');
const departMasterSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

const departmentMasterModel = mongoose.model('Departments-Master', departMasterSchema)

module.exports = departmentMasterModel