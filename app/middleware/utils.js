const moment = require('moment');
const logTag = 'middleware-utils';

exports.removeExtenionsFromFile = (file) =>{
    try {
        return file.split('.').slice(0, -1).join('.').toString()
    } catch (error) {
        console.log(`Error | ${logTag} | removeExtenionsFromFile | ${error}`)
    }
}