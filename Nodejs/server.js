const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

var { mongoose } = require('./db');
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

app.listen(Port, function(){
    console.log(`khoi tao server thanh cong :  ${Port}`);
})