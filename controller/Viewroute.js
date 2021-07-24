const router = require('express').Router();
router.get('/', (req, res) => {
  // Send all of the books to 'index.handlebars' as an object
  const data = {
    library: books,
  };
  res.render('index', data);
});
