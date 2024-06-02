var path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars')

const app = express();
const port = 3000;

// Template engine
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    return res.render('home');
});

app.get('/news', (req, res) => {
    return res.render('news');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));