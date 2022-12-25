const express = require('express')
const app = express()
const cors = require('cors');

const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '5mb', type:'application/json'}));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
// parse application/json


// Path: routes/index.js


app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());

// routes

const operation = require('./routes/calculator');

app.use('/api', operation);

app.get('/',(req,res) => {
    res.send('<h1>Hello Calculator!</h1>') })

const port = 3000

app.listen(port, (res) => console.log(`Calculator api listening on port ${port}!`))


module.exports = app