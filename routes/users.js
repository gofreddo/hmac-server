const express = require('express');

const router = express.Router();

const users = [
  {
    name: 'Fred',
  },
  {
    name: 'Joe',
  },
];

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.json(users);
});

// eslint-disable-next-line no-unused-vars
router.put('/', (req, res, next) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(users);
});

module.exports = router;
