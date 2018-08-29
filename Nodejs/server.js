const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

//var { mongoose } = require('./db');
const mongoose = require('mongoose');
var { config } = require('./db');
var  employeeRouter  = require('./controllers/employee');
var  traiRouter  = require('./controllers/trai');
var  dayRouter  = require('./controllers/day');
var  chuongRouter  = require('./controllers/chuong');
var  vatNuoiRouter  = require('./controllers/vatNuoi');
var app = express();

var Port = process.env.Port || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:4200'}));

app.use('/employees',employeeRouter);
app.use('/trais',traiRouter);
app.use('/days',dayRouter);
app.use('/chuongs',chuongRouter);
//app.use('/days',dayRouter);
app.use('/vatnuois',vatNuoiRouter);

app.get('/', function(req, res){
    res.send('hello');
});

mongoose.connect(`mongodb://ngodongdac:dong300595@ds131902.mlab.com:31902/ngodongfarm`, { useMongoClient: true});
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database '+`mongodb://ngodongdac:dong300595@ds131902.mlab.com:31902/ngodongfarm`);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

app.listen(Port, function(){
    console.log(`khoi tao server thanh cong a:  ${Port}`);
})
