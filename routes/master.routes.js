const express = require('express');
 const router = express.Router();
 const {cek_login,cek_admin}  =require('../middleware/check.login')
 const mastercontroller = require('../controllers/master.controller');
 
router.get('/index',cek_login,cek_admin,mastercontroller.form_index)


//jenisbarang
router.get('/jenis-barang',cek_login,cek_admin,mastercontroller.form_jenisbarang)
router.get('/jenis-barang/tambah',cek_login,cek_admin,mastercontroller.form_jenisbarang_tambah)
router.post('/jenis-barang/create',cek_login,cek_admin,mastercontroller.form_jenisbarang_create)
router.get('/jenis-barang/edit/:id',cek_login,cek_admin,mastercontroller.form_jenisbarang_edit)
router.post('/jenis-barang/update/:id',cek_login,cek_admin,mastercontroller.form_jenisbarang_update)
router.post('/jenis-barang/delete/:id',cek_login,cek_admin,mastercontroller.form_jenisbarang_delete)

//departemen
router.get('/departemen',cek_login,cek_admin,mastercontroller.form_departemen)
router.get('/departemen/tambah',cek_login,cek_admin,mastercontroller.departemen_FormTambah)
router.post('/departemen/create',cek_login,cek_admin,mastercontroller.form_departemen_create)
router.get('/departemen/edit/:id',cek_login,cek_admin,mastercontroller.form_departemen_edit)
router.post('/departemen/update/:id',cek_login,cek_admin,mastercontroller.form_departemen_update)
router.post('/departemen/delete/:id',cek_login,cek_admin,mastercontroller.form_departemen_delete)

//lokasi
router.get('/lokasi',cek_login,cek_admin,mastercontroller.form_lokasi)
router.get('/lokasi/tambah',cek_login,cek_admin,mastercontroller.form_lokasi_tambah)
router.post('/lokasi/create',cek_login,cek_admin,mastercontroller.form_lokasi_create)
router.get('/lokasi/edit/:id',cek_login,cek_admin,mastercontroller.form_lokasi_edit)
router.post('/lokasi/update/:id',cek_login,cek_admin,mastercontroller.form_lokasi_update)
router.post('/lokasi/delete/:id',cek_login,cek_admin,mastercontroller.form_lokasi_delete)



//satuan
router.get('/satuan',cek_login,cek_admin,mastercontroller.form_satuan)
router.get('/satuan/tambah',cek_login,cek_admin,mastercontroller.form_satuan_tambah)
router.post('/satuan/create',cek_login,cek_admin,mastercontroller.form_satuan_create)
router.get('/satuan/edit/:id',cek_login,cek_admin,mastercontroller.form_satuan_edit)
router.post('/satuan/update/:id',cek_login,cek_admin,mastercontroller.form_satuan_update)
router.post('/satuan/delete/:id',cek_login,cek_admin,mastercontroller.form_satuan_delete)



module.exports = router;