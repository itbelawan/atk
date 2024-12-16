const moment = require('moment')
moment.locale = ('id')
const db = require('../models');
const Jenisbarang = db.jenisbarang;
const Departemen = db.departemen
const Lokasi = db.lokasi
const Satuan = db.satuan



exports.form_index = (req, res) => {
    res.render('template/layout', {
        kontent: 'master/index',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
    })
}

exports.form_jenisbarang = async (req, res) => {
    const jenis_barang = await Jenisbarang.findAll({
        where:{
            is_active:1
        },
        include: [
            {
              model: db.user,
              as: 'user'
            }
          ]
       
    })
    res.render('template/layout', {
        kontent: 'master/index',
        subkontent: 'jenis-barang/index',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
        jenis_barang
    })
}

exports.form_jenisbarang_tambah = (req, res) => {
    res.render('template/layout', {
        kontent: 'master/index',
        subkontent: 'jenis-barang/form-tambah',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
    });
}
exports.form_jenisbarang_create = async (req, res) => {


    try {
        const {
            kode,
            nama_barang,
            description
        } = req.body
        // Check if the username or email already exists
        const existingUser = await Jenisbarang.findOne({
            where: {
                nama_barang,
                is_active: 1
            }
        });
        if (existingUser) {
            req.flash('info', 'Nama Barang already exists')
            return res.redirect('/master/jenis-barang')
        }

        const jenisbarang = await Jenisbarang.create({
            kode,
            nama_barang,
            description,
            is_active: 1,
            created_by: req.session.user.id,
            created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        })
        if (jenisbarang) {
            // res.send('berhasil input ke database')
            req.flash('success', 'Data Created Success')
            return res.redirect('/master/jenis-barang')
            // console.log(JSON.stringify(jenisbarang));
        }
    } catch (error) {
        return res.send(error)
        console.log(error)
    }

}
exports.form_jenisbarang_edit = async (req,res) =>{
    try {
        const jenis_barang = await Jenisbarang.findOne({
            where: {id:req.params.id}
        })
        res.render('template/layout', {
            kontent : 'master/index',
            subkontent : 'jenis-barang/edit-barang',
            uri_segment:req.path.split('/'),
            flash_message:req.flash(),
            jenis_barang:jenis_barang
        })
        // console.log(products)
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
    
    
}
exports.form_jenisbarang_update = async(req, res, next) => {
    try {
        const {kode,nama_barang,description} = req.body
        const updateData = await Jenisbarang.findOne({
            where:{
                id: req.params.id
            }
        })
        if(updateData){
            const Update =await Jenisbarang.update({
                kode,
                nama_barang,
                description,
                updated_by: req.session.user.id,
                updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            },{
                where:{id:req.params.id}
            })
            if(Update){
                req.flash('success', 'Data Created Success')
                return res.redirect('/master/jenis-barang')
            }
           
        }

    } catch (error) {
        res.status(500).send({
            message: error.message
          });
    }
}
exports.form_jenisbarang_delete = async (req,res)=>{
    try {
        const deleteUser = await Jenisbarang.findOne({
          id:req.params.id
        })
        if(deleteUser){
          await Jenisbarang.update({
            is_active:0,
            deleted_by: req.session.user.id,
            deleted_at: moment().format('YYYY-MM-DD HH:mm:ss'),

          },{
            where:{id:req.params.id}
          })
          
        req.flash('success', 'Jenis Barang already deleted')
        res.redirect('/master/jenis-barang')
        }
      } catch (error) {
        res.status(500).send({
          message: error.message
        });
      }
}


// ================================================================
exports.form_departemen = async (req, res) => {
    const departemen = await Departemen.findAll({
        where:{
            is_active:1
        },
        include: [
            {
              model: db.user,
              as: 'user'
            }
          ]
    })
    res.render('template/layout', {
        kontent: 'master/index',
        subkontent: 'departemen/index',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
        departemen
    })
}

exports.departemen_FormTambah = (req, res, next) => {
    res.render('template/layout', {
        kontent: 'master/index',
        subkontent: 'departemen/form-tambah',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
    });
}


exports.form_departemen_create = async (req, res) => {


    try {
        const {
            kode,
            nama_departemen,
            description
        } = req.body
        // Check if the username or email already exists
        const existingUser = await Departemen.findOne({
            where: {
                nama_departemen,
                is_active: 1
            }
        });
        if (existingUser) {
            req.flash('info', 'Nama Departemen already exists')
            return res.redirect('/master/departemen')
        }

        const departemen = await Departemen.create({
            kode,
            nama_departemen,
            description,
            is_active: 1,
            created_by: req.session.user.id,
            created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        })
        if (departemen) {
            // res.send('berhasil input ke database')
            req.flash('success', 'Data Created Success')
            return res.redirect('/master/departemen')
            // console.log(JSON.stringify(jenisbarang));
        }
    } catch (error) {
        return res.send(error)
        console.log(error)
    }

}
exports.form_departemen_edit = async (req,res) =>{
    try {
        const departemen = await Departemen.findOne({
            where: {id:req.params.id}
        })
        res.render('template/layout', {
            kontent : 'master/index',
            subkontent : 'departemen/edit-departemen',
            uri_segment:req.path.split('/'),
            flash_message:req.flash(),
            departemen:departemen
        })
        // console.log(products)
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
    
    
}
exports.form_departemen_update = async(req, res, next) => {
    try {
        const {kode,nama_departemen,description} = req.body
        const updateData = await Departemen.findOne({
            where:{
                id: req.params.id
            }
        })
        if(updateData){
            const Update =await Departemen.update({
                kode,
                nama_departemen,
                description,
                updated_by: req.session.user.id,
                updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            },{
                where:{id:req.params.id}
            })
            if(Update){
                req.flash('success', 'Data Update Success')
                return res.redirect('/master/departemen')
            }
           
        }

    } catch (error) {
        res.status(500).send({
            message: error.message
          });admin
    }
}
exports.form_departemen_delete = async (req,res)=>{
    try {
        const deleteUser = await Departemen.findOne({
          id:req.params.id
        })
        if(deleteUser){
          await Departemen.update({
            is_active:0,
            deleted_by: req.session.user.id,
            deleted_at: moment().format('YYYY-MM-DD HH:mm:ss'),

          },{
            where:{id:req.params.id}
          })
          
        req.flash('success', 'departemen already deleted')
        res.redirect('/master/departemen')
        }
      } catch (error) {
        res.status(500).send({
          message: error.message
        });
      }
}

exports.form_lokasi = async (req, res) => {
    const lokasi = await Lokasi.findAll({
        where:{
            is_active:1
        },
        
        include: [
            {
              model: db.user,
              as: 'user'
            }
          ]
    })
    res.render('template/layout', {
        kontent: 'master/index',
        subkontent: 'lokasi/index',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
        lokasi
    })
}

exports.form_lokasi_tambah = (req, res) => {
    res.render('template/layout', {
        kontent: 'master/index',
        subkontent: 'lokasi/form-tambah',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
    });
}

exports.form_lokasi_create = async (req, res) => {


    try {
        const {
            kode,
            nama_lokasi,
            description
        } = req.body
        // Check if the username or email already exists
        const existingUser = await Lokasi.findOne({
            where: {
                nama_lokasi,
                is_active: 1
            }
        });
        if (existingUser) {
            req.flash('info', 'Nama lokasi already exists')
            return res.redirect('/master/lokasi')
        }

        const lokasi = await Lokasi.create({
            kode,
            nama_lokasi,
            description,
            is_active: 1,
            created_by: req.session.user.id,
            created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        })
        if (lokasi) {
            // res.send('berhasil input ke database')
            req.flash('success', 'Data Created Success')
            return res.redirect('/master/lokasi')
            // console.log(JSON.stringify(jenisbarang));
        }
    } catch (error) {
        return res.send(error)
        console.log(error)
    }

}
exports.form_lokasi_edit = async (req,res) =>{
    try {
        const lokasi = await Lokasi.findOne({
            where: {id:req.params.id}
        })
        res.render('template/layout', {
            kontent : 'master/index',
            subkontent : 'lokasi/edit-lokasi',
            uri_segment:req.path.split('/'),
            flash_message:req.flash(),
            lokasi:lokasi
        })
        // console.log(products)
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
    
    
}
exports.form_lokasi_update = async(req, res, next) => {
    try {
        const {kode,nama_lokasi,description} = req.body
        const updateData = await Lokasi.findOne({
            where:{
                id: req.params.id
            }
        })
        if(updateData){
            const Update =await Lokasi.update({
                kode,
                nama_lokasi,
                description,
                updated_by: req.session.user.id,
                updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            },{
                where:{id:req.params.id}
            })
            if(Update){
                req.flash('success', 'Data Created Success')
                return res.redirect('/master/lokasi')
            }
           
        }

    } catch (error) {
        res.status(500).send({
            message: error.message
          });
    }
}
exports.form_lokasi_delete = async (req,res)=>{
    try {
        const deleteUser = await Lokasi.findOne({
          id:req.params.id
        })
        if(deleteUser){
          await Lokasi.update({
            is_active:0,
            deleted_by: req.session.user.id,
            deleted_at: moment().format('YYYY-MM-DD HH:mm:ss'),

          },{
            where:{id:req.params.id}
          })
          
        req.flash('success', 'lokasi already deleted')
        res.redirect('/master/lokasi')
        }
      } catch (error) {
        res.status(500).send({
          message: error.message
        });
      }
}

exports.form_satuan = async (req, res) => {
    const satuan = await Satuan.findAll({
        where:{
            is_active:1
        },
        
        include: [
            {
              model: db.user,
              as: 'user'
            }
          ]
    }
        
    )
    res.render('template/layout', {
        kontent: 'master/index',
        subkontent: 'satuan/index',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
        satuan
    })
}


exports.form_satuan_tambah = (req, res) => {
    res.render('template/layout', {
        kontent: 'master/index',
        subkontent: 'satuan/form-tambah',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
    });
}


exports.form_satuan_create = async (req, res) => {


    try {
        const {
            kode,
            nama_satuan,
            description
        } = req.body
        // Check if the username or email already exists
        const existingUser = await Satuan.findOne({
            where: {
                nama_satuan,
                is_active: 1
            }
        });
        if (existingUser) {
            req.flash('info', 'Nama satuan already exists')
            return res.redirect('/master/lokasi')
        }

        const satuan = await Satuan.create({
            kode,
            nama_satuan,
            description,
            is_active: 1,
            created_by: req.session.user.id,
            created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        })
        if (satuan) {
            // res.send('berhasil input ke database')
            req.flash('success', 'Data Created Success')
            return res.redirect('/master/satuan')
            // console.log(JSON.stringify(jenisbarang));
        }
    } catch (error) {
        return res.send(error)
        console.log(error)
    }

}
exports.form_satuan_edit = async (req,res) =>{
    try {
        const satuan = await Satuan.findOne({
            where: {id:req.params.id}
        })
        res.render('template/layout', {
            kontent : 'master/index',
            subkontent : 'satuan/edit-satuan',
            uri_segment:req.path.split('/'),
            flash_message:req.flash(),
            satuan:satuan
        })
        // console.log(products)
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
    
    
}
exports.form_satuan_update = async(req, res, next) => {
    try {
        const {kode,nama_satuan,description} = req.body
        const updateData = await Satuan.findOne({
            where:{
                id: req.params.id
            }
        })
        if(updateData){
            const Update =await Satuan.update({
                kode,
                nama_satuan,
                description,
                updated_by: req.session.user.id,
                updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            },{
                where:{id:req.params.id}
            })
            if(Update){
                req.flash('success', 'Data Created Success')
                return res.redirect('/master/satuan')
            }
           
        }

    } catch (error) {
        res.status(500).send({
            message: error.message
          });
    }
}
exports.form_satuan_delete = async (req,res)=>{
    try {
        const deleteUser = await Satuan.findOne({
          id:req.params.id
        })
        if(deleteUser){
          await Satuan.update({
            is_active:0,
            deleted_by: req.session.user.id,
            deleted_at: moment().format('YYYY-MM-DD HH:mm:ss'),

          },{
            where:{id:req.params.id}
          })
          
        req.flash('success', 'satuan already deleted')
        res.redirect('/master/satuan')
        }
      } catch (error) {
        res.status(500).send({
          message: error.message
        });
      }
}