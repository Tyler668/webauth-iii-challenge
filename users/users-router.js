const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkDept = require('../config/check-dept.js');

router.get('/', restricted, (req, res) => {
  console.log(req.user.department)
  Users.find(req.user.department)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(404).json({message: "No such department"}));
});



module.exports = router;
