const moment = require('moment');
const logTag = 'middleware-utils';

exports.removeExtenionsFromFile = (file) => {
    try {
        return file.split('.').slice(0, -1).join('.').toString()
    } catch (error) {
        console.log(`Error | ${logTag} | removeExtenionsFromFile | ${error}`)
    }
}


/**
 * Success response
 * @param {Object} success - success object
 * @param {Object} res -  res object
 * @param {Object} status -  status code
 * @param {string} resObj - response object
 */

exports.success = (res, status, resObj, reqId) => {

    if (resObj) {
        res.status(status || 200).json(resObj)
    }
    return null
}

/**
 * Handles error by printing to console in development env and builds and sends an error response
 * @param {Object} res - response object
 * @param {Object} err - error object
 */
exports.handleError = (res, err, reqId) => {

    // Prints error in console
    if (process.env.NODE_ENV === 'local') {
        console.log(err)
    }
    // Sends error to user
    res.status(err && err.code ? err.code : 500).json({
        errors: {
            msg: err.message
        }
    })
}