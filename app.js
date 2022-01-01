require('dotenv-safe').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgon = require('morgan');
const cors = require('cors');
const router = express.Router();
const initMongo = require('./config/mongo')

const app = express();

app.set(`port`, process.env.PORT || 3000);

router.get('/healthCheckapi', function (req, res) {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date()
    }
    res.status(200).send(data);
});

app.use('/api/v1', router);

app.use(bodyParser.json({
    limit:'20mb'
}));

app.use(bodyParser.urlencoded({
    limit:'20mb',
    extended:true
}));

app.use(cors());
app.use(require('./app/routes'));
app.listen(app.get('port'))

initMongo();

module.exports = app