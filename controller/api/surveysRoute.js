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
      'newSurveyAnswerOption',
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
      'newSurveyAnswerOption',
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
    newSurveyAnswerOption: req.body.newSurveyAnswerOption,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
