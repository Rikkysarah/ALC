global.db = require('./libs/db/db.js')();

var express = require("express");
var methodOverride = require("method-override");
var compress = require("compression");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var session = require('express-session')
var path = require('path');
var expressValidator = require('express-validator');
var exphbs = require('express-handlebars');
//var favicon = require('serve-favicon');
//var passport = require('passport');
//var localStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var app = express();


var router = require("./controllers/Router");
app.enabled('trust proxy');
app.set('views', path.join( __dirname, '/views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');
app.use(morgan('dev'));
app.use(compress());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.raw({type:'application/vnd.custom-type'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join('public')));


app.get('/', function(req,res){
	res.render('index');
});

app.get('/login', function(req,res){
	res.render('login');
});

app.get('/register', function(req,res){
	res.render('register');
});  

var port = process.env.PORT || 3000;
var ip = process.env.IP || '0.0.0.0';
app.listen(port,ip);

router.route(app);



console.log("server started at " + ip + " and the port is " + port);
