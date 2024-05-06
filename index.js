const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const port = 3000;
const newgameRoute = require('./routes/newgame');
const db = require('./database');
const pageRoute = require('./routes/page');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));
app.use('/newgame', newgameRoute);
app.use('/page', pageRoute);
newgameRoute.use(express.urlencoded({extended: true}));

app.get('/', (req,res) =>
{
    res.render('index');
});

app.listen(port, function () {
    console.log('app is running...');
});