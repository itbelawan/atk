const express = require('express');
 const router = express.Router();
 const {cek_login,cek_admin,cek_user,cek_admin_user,cek_admin_user_view}  =require('../middleware/check.login')

 const reportcontroller             = require('../controllers/report.controller');
//reports

router.get('/',cek_login,cek_admin_user_view, reportcontroller.index)
router.get('/barang-masuk',cek_login,cek_admin_user_view, reportcontroller.getbarangmasuk)
router.get('/barang-keluar',cek_login,cek_admin_user, reportcontroller.getbarangkeluar)
router.get('/barang-akhir',cek_login,cek_admin_user, reportcontroller.getbarangakhir)
module.exports = router;
 // /api/auth/signup