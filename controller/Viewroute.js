const router = require('express').Router();
const sequelize = require('../config/connection');
const { Answers, Questions, Survey, Users, UserAnswers } = require('../models');

// get all surveys for homepage
router.get('/', (req, res) => {
  // Send all of the surveys to 'homepage.handlebars' as an object
  Survey.findAll({
    attributes: [
      'id',
      'user_id',
      'description',
      'start_date',
      'end_date',
      'is_active',
    ],
  })
    .then((dbPostData) => {
      console.log('bbbbbbbbbbbbbbbb', dbPostData);
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      console.log('aaaaaaaaaaaa', posts);
      res.render('dashboard', {
        posts,
        loggedIn: req.session ? req.session.loggedIn : false,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/survey/:id', (req, res) => {
  Survey.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'user_id',
      'description',
      'start_date',
      'end_date',
      'is_active',
    ],
    include: [
      {
        model: UserAnswers,
        attributes: ['id', 'question_id', 'answer_id', 'user_id'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      console.log('dbpostdata', dbPostData);
      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render('single-survey', {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
