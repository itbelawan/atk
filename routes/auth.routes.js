const express = require('express');
 const router = express.Router();
 const {cek_login,cek_admin}  =require('../middleware/check.login')
 const authController = require('../controllers/auth.controller');



router.get('/',authController.form_login) 
router.post('/login', authController.login);
router.get('/allsignupusers',cek_admin,cek_login,authController.AllSignUpUser)



module.exports = router;
 // /api/auth/signup