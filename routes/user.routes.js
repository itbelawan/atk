const express = require('express');
 const router = express.Router();
 const {cek_login,cek_admin}  =require('../middleware/check.login')
 const userController = require('../controllers/user.controller');
 
router.get('/users/index',cek_login,cek_admin,userController.form_user)
router.post('/createUser',cek_login ,cek_admin,userController.create_user);
router.post('/users/delete-user/:id',cek_login,cek_admin, userController.deleteUser);
 



module.exports = router;
 // /api/auth/signup