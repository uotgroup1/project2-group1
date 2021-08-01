const router = require('express').Router();
const sequelize = require('../../config/connection');
const {
  Answers,
  Questions,
  Survey,
  Users,
  UserAnswers,
} = require('../../models');

// GET route for getting all of the surveys
router.get('/', (req, res) => {
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
    // include: [
    //   {
    //     model: Questions,
    //     attributes: ['id', 'survey_ID', 'question_type', 'question'],
    //     include: [
    //       {
    //         model: Answers,
    //         //attributes: [],
    //       },
    //     ],
    //   },
    // ],
  }).then((dbPost) => {
    res.json(dbPost);
  });
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
    include: [
      {
        model: Users,
        attributes: ['user_name'],
      },
    ],
  })
    .then((dbPost) => {
      res.json(dbPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(dbPostData);
    });
});

router.get('/:id', (req, res) => {
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
        attributes: ['id', 'survey_ID', 'question_type', 'question'],
        include: [
          {
            model: Answers,
            //attributes: [],
          },
        ],
      },
    ],
  }).then((dbPost) => {
    res.json(dbPost);
  });
});

router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  Survey.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No Survey found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post('/', (req, res) => {
  console.log(req.session);
  Survey.create({
    newSurveyName: req.body.newSurveyName,
    newSurveyQuestion: req.body.newSurveyQuestion,
    // newSurveyAnswerOption: req.body.newSurveyAnswerOption,
    Option1: req.body.Option1,
    Option2: req.body.Option2,
    Option3: req.body.Option3,
    Option4: req.body.Option4,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.put('/:id', (req, res) => {
  Survey.update({
    newSurveyName: req.body.newSurveyName,
    newSurveyQuestion: req.body.newSurveyQuestion,
    // newSurveyAnswerOption: req.body.newSurveyAnswerOption,
    Option1: req.body.Option1,
    Option2: req.body.Option2,
    Option3: req.body.Option3,
    Option4: req.body.Option4,
    user_id: req.session.user_id,
  }),
    {
      where: {
        id: req.params.id,
      },
    }
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;
