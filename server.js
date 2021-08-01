const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
let bodyParser = require('body-parser');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const routes = require('./controller/');

const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: process.env.SESS_PW,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//-------------------------------------------------------------------------------

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
