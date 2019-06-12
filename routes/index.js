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

router.get('/dashboard/users/Habits', ensureAuthenticated, (req, res, next) => {
  res.render('Habits', {
    user: req.user
  });
});

router.get('/dashboard/users/Sleep', ensureAuthenticated, (req, res, next) => {
  res.render('Sleep', {
    user: req.user
  });
});

router.get('/dashboard/users/Exercise', ensureAuthenticated, (req, res, next) => {
  res.render('Exercise', {
    user: req.user
  });
});

router.get('/dashboard/users/Ergonomics', ensureAuthenticated, (req, res, next) => {
  res.render('Ergonomics', {
    user: req.user
  });
});

module.exports = router;
