const mongoose = require('mongoose');

exports.loginForm = (req, res) => {
  res.render('login', { title: 'Login'} );
}

exports.registerForm = (req, res) => {
  res.render('register', { title: 'Register' });
}

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name').notEmpty();
  req.sanitizeBody('email').normalizeEmail();
  req.checkBody('email', 'That Email is not valid!').isEmail({});
}