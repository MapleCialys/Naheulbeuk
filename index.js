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

// Utilisation de bodyParser avant le routage
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
// Utilisation de bodyParser avant le routage
newgameRoute.use(express.urlencoded({ extended: true }));
app.use('/newgame', newgameRoute);
app.use('/page', pageRoute);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log('App is running...');
});
