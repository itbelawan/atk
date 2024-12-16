const express = require('express');
 const router = express.Router();
 const {cek_login,cek_admin_user_view}  =require('../middleware/check.login')


 const dashboardController = require('../controllers/dashboard.controller');

router.get('/dashboard',cek_login,cek_admin_user_view, dashboardController.index)

module.exports = router;
 // /api/auth/signup