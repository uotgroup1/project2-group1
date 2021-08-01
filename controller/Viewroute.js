const router = require('express').Router();
const sequelize = require('../config/connection');
const { Answers, Questions, Survey, Users, UserAnswers } = require('../models');

// get all surveys for homepage
router.get('/', (req, res) => {
  //res.render('homepage');
  //Send all of the surveys to 'homepage.handlebars' as an object
  Survey.findAll({
  })
    .then((dbPostData) => {
      const surveys = dbPostData.map((post) => post.get({ plain: true }));
      res.render('homepage', {
        surveys,
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

  res.render('dashboard');
});

router.get('/view/:id', (req, res) => {
  Survey.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'user_id',
      'newSurveyName',
      'newSurveyQuestion',
      'Option1',
      'Option2',
      'Option3',
      'Option4',
    ],
    include: [
      {
        model: Questions,
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
      res.render('viewsurvey', {
        survey,
        loggedIn: req.session ? req.session.loggedIn : false,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/survey/:id', (req, res) => {
  Survey.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'user_id',
      'newSurveyName',
      'newSurveyQuestion',
      'Option1',
      'Option2',
      'Option3',
      'Option4',
    ],
    include: [
      {
        model: Questions,
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
        loggedIn: req.session ? req.session.loggedIn : false,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('homepage');
});

router.get('/dashboard', (req, res) => {
  Survey.findAll({
    attributes: [
      'id',
      'user_id',
      'newSurveyName',
      'newSurveyQuestion',
      'Option1',
      'Option2',
      'Option3',
      'Option4',
    ],
  })
    .then((dbPostData) => {
      const surveys = dbPostData.map((post) => post.get({ plain: true }));
      const user_name =  req.session.username
      res.render('dashboard', {
        user_name,
        surveys,
        loggedIn: req.session ? req.session.loggedIn : false,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(dbPostData);
    });
});

router.get('/survey', (req, res) => {
  res.render('newsurvey');
});

router.get('/updatesurvey', (req, res) => {
  res.render('updatesurvey');
});

module.exports = router;
