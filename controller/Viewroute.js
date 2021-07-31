const router = require('express').Router();
const sequelize = require('../config/connection');
const { Answers, Questions, Survey, Users, UserAnswers } = require('../models');

// get all surveys for homepage
router.get('/', (req, res) => {
  // res.render('homepage');
  //Send all of the surveys to 'homepage.handlebars' as an object
  Survey.findAll({
    attributes: [
      'id',
      'user_id',
      'description',
      'start_date',
      'end_date',
      'is_active',
    ]
  }
  )
    .then((dbPostData) => {
     // console.log('bbbbbbbbbbbbbbbb', dbPostData);
      const surveys = dbPostData.map((post) => post.get({ plain: true }));
     // console.log('aaaaaaaaaaaa', surveys);
      res.render('homepage', {
        surveys, 
        loggedIn: req.session ?  req.session.loggedIn : false ,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(ernodemonr);
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
        model: Questions
      },
      {
        model: Users,
        attributes: ['user_name'],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
  
      // serialize the data
      const survey = dbPostData.get({ plain: true });
      console.log('dbpostdata', survey);
      // pass data to template
      res.render('updatesurvey', {
        survey,
        questions: survey.questions,
        loggedIn: req.session ?  req.session.loggedIn : false ,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

router.get('/newsurvey', (req, res) => {
  res.render('newsurvey');
});
module.exports = router;
