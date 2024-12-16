const express = require('express');
 const router = express.Router();
 const {cek_login,cek_admin_user}  =require('../middleware/check.login')


 const barangmasukcontroller        = require('../controllers/barangmasuk.controller');
 const barangkeluarcontroller       = require('../controllers/barangkeluar.controller');


router.get('/barang-masuk',cek_login,cek_admin_user, barangmasukcontroller.index)
router.post('/barang-masuk/tambah',cek_login,cek_admin_user, barangmasukcontroller.form_tambah_barangmasuk)
router.post('/barang-masuk/delete/:id',cek_login,cek_admin_user, barangmasukcontroller.form_delete_barangmasuk)


//barangkeluar

router.get('/barang-keluar',cek_login,cek_admin_user, barangkeluarcontroller.index)
router.post('/barang-keluar/tambah',cek_login,cek_admin_user, barangkeluarcontroller.form_tambah_barangkeluar)
router.post('/barang-keluar/delete/:id',cek_login,cek_admin_user, barangkeluarcontroller.form_delete_barangkeluar)


module.exports = router;
 // /api/auth/signup