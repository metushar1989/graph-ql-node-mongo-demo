const mongoose = require('mongoose');
const config = require('./config');
const DB_URL = config.MONGO_URL;


module.exports = () => {
    const connect = () => {
      mongoose.Promise = global.Promise
  
      mongoose.connect(
        DB_URL,
        {
          // poolSize: parseInt(config.MONGO_MAX_CONNECTIONS),
          keepAlive: true,
          useNewUrlParser: true,
          useUnifiedTopology: true
        },
        (err) => {
          let dbStatus = ''
          if (err) {
            dbStatus = `*    Error connecting to DB: ${err}\n****************************\n`
          }
          dbStatus = `*    DB Connection: OK\n****************************\n`
          if (config.NODE_ENV !== 'test') {
            // Prints initialization
            console.log('****************************')
            console.log('*    Starting Server 🚀')
            console.log(`*    Graph-QL-Demo`)
            console.log(`*    Port: ${config.PORT || 3000}`)
            console.log(`*    NODE_ENV: ${config.NODE_ENV}`)
            console.log(`*    MONGO: ${DB_URL}`)
            console.log(`*    Database: MongoDB`)
            console.log(dbStatus)
          }
        }
      )
    }
    connect()
  
    mongoose.connection.on('error', console.log)
    mongoose.connection.on('disconnected', connect)
  }