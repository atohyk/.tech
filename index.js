var express = require('express');
var app = express();
var things = require('./things.js');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.use('/things', things);

app.get('/first_template', function(req,res){
	res.render('first_view');
});

app.get('/imgtest', function(req,res){
	res.render('img_view');
});

//catch all for 404
app.get('*', function(req, res){
	res.send('Unfound 404');
});

app.listen(8080);
