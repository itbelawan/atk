const moment        = require('moment')
moment.locale =('id')

const db= require('../models')
const User          = db.user;
const Jenisbarang   = db.jenisbarang
const Departemen    = db.departemen
const Lokasi        = db.lokasi
const Satuan        = db.satuan
const Stokbarang    = db.stokbarang


exports.index = (req,res)=>{
    res.render('template/layout', {
        kontent          : 'reports/index',
        uri_segment     : req.path.split('/'),
        flash_message   : req.flash(),
    })
}


exports.getbarangmasuk =async (req,res)=>{
    try {
        const jenisbarang = await Jenisbarang.findAll({
            where: {
                is_active: 1
            },
            include: [
                {
                    model: db.user,
                    as: 'user'
                }
            ]
        });
        
        const departemen = await Departemen.findAll({
            where: {
                is_active: 1
            },
            include: [
                {
                    model: db.user,
                    as: 'user'
                }
            ]
        });
        
        const lokasi = await Lokasi.findAll({
            where: {
                is_active: 1
            },
            include: [
                {
                    model: db.user,
                    as: 'user'
                }
            ]
        });
        
        const satuan = await Satuan.findAll({
            where: {
                is_active: 1
            },
            include: [
                {
                    model: db.user,
                    as: 'user'
                }
            ]
        });
        const stok_masuk = await Stokbarang.findAll({
            where:{
                is_active: 1,
                stok_awal: { [db.Sequelize.Op.gt]: 0 }
            },
            include:[
                {
                    model: db.user,
                    as: 'user'
                },
                {
                    model:db.jenisbarang,
                    as: 'jenisbarang'
                }
            ]
        })
        res.render('template/layout', {
            kontent          : 'reports/index',
            subkontent       : 'barang-masuk/index',
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            moment          : moment,
            jenisbarang,
            departemen,
            lokasi,
            satuan,
            stok_masuk
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    
}

exports.getbarangkeluar =async (req,res)=>{
    try {
        const jenisbarang = await Jenisbarang.findAll({
            where: {
                is_active: 1
            },
            include: [
                {
                    model: db.user,
                    as: 'user'
                }
            ]
        });
        
        const departemen = await Departemen.findAll({
            where: {
                is_active: 1
            },
            include: [
                {
                    model: db.user,
                    as: 'user'
                }
            ]
        });
        
        const lokasi = await Lokasi.findAll({
            where: {
                is_active: 1
            },
            include: [
                {
                    model: db.user,
                    as: 'user'
                }
            ]
        });
        
        const satuan = await Satuan.findAll({
            where: {
                is_active: 1
            },
            include: [
                {
                    model: db.user,
                    as: 'user'
                }
            ]
        });
        const stok_keluar = await Stokbarang.findAll({
            where:{
                is_active: 1,
                stok_keluar: { [db.Sequelize.Op.lt]: 0 },
            },
            order:[['id','desc']],
            include:[
                {
                    model: db.user,
                    as: 'user'
                },
                {
                    model:db.jenisbarang,
                    as: 'jenisbarang'
                }
            ]
        })
        res.render('template/layout', {
            kontent          : 'reports/index',
            subkontent       : 'barang-keluar/index',
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            moment          : moment,
            jenisbarang,
            departemen,
            lokasi,
            satuan,
            stok_keluar
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    
}

exports.getbarangakhir = async(req, res) => {
    try {
        const jenisbarang = await Jenisbarang.findAll({
            where: {
                is_active: 1
            },
            include: [
                {
                    model: db.user,
                    as: 'user'
                }
            ]
        });
        
        const departemen = await Departemen.findAll({
            where: {
                is_active: 1
            },
            include: [
                {
                    model: db.user,
                    as: 'user'
                }
            ]
        });
        
        const lokasi = await Lokasi.findAll({
            where: {
                is_active: 1
            },
            include: [
                {
                    model: db.user,
                    as: 'user'
                }
            ]
        });
        
        const satuan = await Satuan.findAll({
            where: {
                is_active: 1
            },
            include: [
                {
                    model: db.user,
                    as: 'user'
                }
            ]
        });
        const stok_akhir = await Stokbarang.findAll({
            where:{
                is_active: 1,
                stok_keluar: { [db.Sequelize.Op.lt]: 0 },                
                jenisbarangId: { [db.Sequelize.Op.ne]: null }
            },
            order: [['id', 'desc'], ['jenisbarangId', 'ASC'] ], // Corrected order syntax
            include:[
                {
                    model: db.user,
                    as: 'user'
                },
                {
                    model:db.jenisbarang,
                    as: 'jenisbarang'
                }
            ],
            
            offset:0
        })
        res.render('template/layout', {
            kontent          : 'reports/index',
            subkontent       : 'rekap/index',
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            moment          : moment,
            jenisbarang,
            departemen,
            lokasi,
            satuan,
            stok_akhir
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}