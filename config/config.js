require('dotenv-safe').config();

module.exports = {
    PORT : process.env.PORT || 3000,
    NODE_ENV : process.env.NODE_ENV || 'local',
    MONGO_URL : process.env.NODE_ENV === 'local'
    ? 'mongodb://localhost:27017/graphql-demo'
    : process.env.MONGO_URL
}