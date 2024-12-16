const db = require('../models');
const User = db.user;
const bcrypt = require('bcryptjs');


exports.form_login = async (req, res, next) => {
  res.render('auth/form-login', {
    flash_message: req.flash()
  })
}


// Login function
exports.login = async (req, res) => {
  try {
    const {
      username,
      password
    } = req.body;

    // Find user by email
    const user = await User.findOne({
      where: {
        username,
        is_active:1
      }
    });
    if (!user) {
      req.flash('info', 'username not existed')
      res.redirect('/')
    }
    if (user) {
      // Check password
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (passwordIsValid) {
        req.session.user = user
        return res.redirect('/dashboard')
      } else {
        req.flash('warning', 'password salah')
        res.redirect('/')
      }
    } else {
      req.flash('info', 'username not existed')
      res.redirect('/')
    }




  } catch (err) {
    return err
  }
};

exports.AllSignUpUser = async (req, res) => {

  try {

    const users = await User.findAll();

    res.status(200).send({
      users
    });

  } catch (err) {

    res.status(500).send({
      message: err.message
    });

  }
}