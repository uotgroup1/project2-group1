const router = require('express').Router();
const {
  Answers,
  Questions,
  Survey,
  Users,
  UserAnswers,
} = require('../../models');

// get all users
router.get('/', (req, res) => {
  Users.findAll({
    attributes: { exclude: ['password'] },
  })
    .then((Data) => res.json(Data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Users.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Survey,
        attributes: [
          'id',
          'user_id',
          'description',
          'start_date',
          'end_date',
          'is_active',
        ],
      },
      {
        model: UserAnswers,
        attributes: ['id', 'question_id', 'answer_id', 'user_id'],
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post('/', (req, res) => {
  console.log('*********posting user', req.body);
  Users.create({
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((Data) => {
      res.json(Data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.post('/login', (req, res) => {
  Users.findOne({
    where: {
      email: req.body.email,
    },
  }).then((Data) => {
    if (!Data) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = Data.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = Data.id;
      req.session.username = Data.username;
      req.session.loggedIn = true;
    });

    res.status(200).json({ user: Data, message: 'You are now logged in!' });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put('/:id', (req, res) => {
  // pass in req.body instead to only update what's passed through
  Users.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Users.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
