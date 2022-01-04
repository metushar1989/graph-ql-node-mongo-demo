const express = require('express');
const departmentController = require('./controller');

const router = express.Router();

router.route('/').post(departmentController.createUser)
router.route('/').put(departmentController.updateUserById)
router.route('/delete').put(departmentController.deleteUser)
router.route('/').get(departmentController.getAllUser)

module.exports = router;