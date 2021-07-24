const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require ('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controller/')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
