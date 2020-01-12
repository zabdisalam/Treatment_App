const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/dashboard/users/survey', ensureAuthenticated, (req, res, next) => {
  res.render('survey', {
    user: req.user
  });
});

 router.get('/dashboard/users/results', ensureAuthenticated, (req, res, next) => {
   res.render('results')
})

module.exports = router;