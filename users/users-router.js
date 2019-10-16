const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkRole = require('../config/check-role.js');

router.get('/', restricted, checkRole('Admins'), (req, res) => {
  Users.find()
    .then(users => {
      res.json({loggedInUser: req.username, users});
    })
    .catch(err => res.send(err));
});

module.exports = router;
