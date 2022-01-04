const express = require('express')
const router = express.Router()


const userRoute = require('../users/routes')
const departmentMasterRoute = require('../department/routes')

router.use('/user', userRoute);
router.use('/department', departmentMasterRoute);

module.exports = router