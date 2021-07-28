const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const routes = require('./controller/')

const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;
// Set Handlebars as the default template engine.
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controller'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//-------------------------------------------------------------------------------
const sess = {
  secret: process.env.SESS_PW,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});