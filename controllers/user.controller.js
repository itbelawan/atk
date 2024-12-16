const db = require('../models');
const User = db.user;
const bcrypt = require('bcryptjs');


exports.form_user = async (req, res, next) => {
  const is_active=1
  const users = await User.findAll({});
 
  res.render('template/layout',{
    kontent:'users/index',users,
    uri_segement: req.path.split('/'),
    flash_message:req.flash(),            
})
}

// Signup function
exports.create_user = async (req, res) => {
    try {
      const {
        username,
        password,
        roles,
      } = req.body;
  
      // Check if the username or email already exists
      const existingUser = await User.findOne({
        where: {
          username
        }
      });
      if (existingUser) {
        req.flash('info', 'Username already exists')
        res.redirect('/')
      }
  
      // Hash password
      const hashedPassword = bcrypt.hashSync(password, 8);
      // Save user to database
      const user = await User.create({
        username,
        password: hashedPassword,
        roles,
        is_active:1
      });
  
     if (user){
      req.flash('info', 'Username already registered')
      res.redirect('/users/index')
     }
    } catch (err) {
      res.status(500).send({
        message: err.message
      });
    }
  };

  
  exports.deleteUser=async(req, res, next) => {
    try {
      const deleteUser = await User.findOne({
        id:req.params.id
      })
      if(deleteUser){
        await User.update({
          is_active:0
        },{
          where:{id:req.params.id}
        })
        
      req.flash('success', 'Username already deleted')
      res.redirect('/users/index')
      }
    } catch (error) {
      res.status(500).send({
        message: err.message
      });
    }
  }