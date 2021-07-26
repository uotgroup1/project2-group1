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
      'description',
      'start_date',
      'end_date',
      'is_active',
    ],
    include: [
      {
        model: Questions,
        attributes: ['id', 'survey_ID', 'question_type', 'question'],
      },
    ],
  }).then((dbPost) => {
    res.json(dbPost);
  });
});

router.get('/:id', (req, res) => {
  Survey.findAll({
    where: {
      id: req.params.id,
    },
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

module.exports = router;
