const moment        = require('moment')
moment.locale=('id')
const db            = require('../models');
const User          = db.user;
const Jenisbarang   = db.jenisbarang
const Departemen    = db.departemen
const Lokasi        = db.lokasi
const Satuan        = db.satuan
const Stokbarang    = db.stokbarang


exports.index =async(req,res)=>{
    try {
        
        const stok_kelua=0;
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
        const stok_keluars = await Stokbarang.findAll({
          
            where:{
                is_active: 1,
                stok_keluar: { [db.Sequelize.Op.lt]: 0 }
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
            ],
            order: [['id', 'DESC']],
           
        })
        res.render('template/layout',{
            kontent: 'barang-keluar/index',
            uri_segment: req.path.split('/'),
            flash_message: req.flash(),            
            jenisbarang,
            departemen,
            lokasi,
            satuan,
            stok_keluars
        })
    } catch (error) {
        
    }
}

exports.form_tambah_barangkeluar =async(req,res)=>{
    try {

        const {f_nama_barang,f_satuan} = req.body;
        const f_stok_keluar = Number(req.body.f_stok_keluar);

        const stokAkhir = await Stokbarang.findOne({
            where:{
                jenisbarangId:f_nama_barang,
                is_active:1
            },

            order: [['id', 'DESC']] // Order by id in descending order
        })

       
        let sisa_stok = 0

        if(stokAkhir) {
            sisa_stok = Number(stokAkhir.stok_akhir)
            
        }
        if(stokAkhir.stok_akhir < f_stok_keluar){
            req.flash('danger', 'Jumlah stok tidak mencukupi')
            return res.redirect('/stokbarang/barang-keluar')
        }
       
            const simpanBarangMasuk = await Stokbarang.create({
                jenisbarangId           : req.body.f_nama_barang,
                departemenId            : req.body.f_nama_departemen,
                lokasiId                : req.body.f_nama_lokasi,
                stok_awal               : 0,
                stok_keluar             : - f_stok_keluar,
                stok_akhir              : sisa_stok - f_stok_keluar,
                satuan                  : req.body.f_satuan,
                is_active               : 1,
                created_at              : moment().format('YYYY-MM-DD HH:mm:ss'),
                created_by              : req.session.user.id,
                keterangan              : req.body.f_keterangan
            })
            if(simpanBarangMasuk){
                req.flash('success', 'Data created succesfully')
                return res.redirect('/stokbarang/barang-keluar')
            }
        
       

      

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}



exports.form_delete_barangkeluar =async (req, res, next) => {
    try {

        const stok_akhir = req.body.stok_akhir
        const stok_keluar = req.body.stok_keluar

        const stokBarangID = await Stokbarang.findOne({
            stok_akhir,
            stok_keluar,
            where:{
                id:req.params.id
            },
            

            order: [['id', 'DESC']] // Order by id in descending order
        })

        if(stokBarangID){
            const deteleBM = Stokbarang.update({
                is_active:0,
                stok_keluar:0,
                stok_akhir:0

            },{
                where:{
                    id:req.params.id
                }
            })

            if(deteleBM){
                req.flash('success', 'Data Deleted succesfully')
                return res.redirect('/stokbarang/barang-masuk')
            }
        }
        

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}