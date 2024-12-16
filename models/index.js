const {
    Sequelize,
    DataTypes
} = require('sequelize');
require('dotenv').config();
const dbConfig = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    define: {
        freezeTableName: true, // untuk kesamaan antara nama model & table
        timestamps: false, // untuk mematikan fitur timestamps bawaan sequelize
    }
};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./user.model.js')(sequelize, DataTypes);
db.jenisbarang = require('./jenisbarang.mode.js')(sequelize, DataTypes);
db.departemen = require('./departemen.model.js')(sequelize, DataTypes);
db.lokasi = require('./lokasi.model.js')(sequelize, DataTypes);
db.satuan = require('./satuan.model.js')(sequelize, DataTypes);
db.stokbarang = require('./stokbarang.model.js')(sequelize, DataTypes);


db.user.hasMany(db.jenisbarang, {
    as: 'jenisbarang'
});
db.jenisbarang.belongsTo(db.user, {
    foreignKey: 'created_by',
    as: 'user'
});


db.user.hasMany(db.departemen, {
    as: 'departemen'
});
db.departemen.belongsTo(db.user, {
    foreignKey: 'created_by',
    as: 'user'
});


db.user.hasMany(db.lokasi, {
    as: 'lokasi'
});
db.lokasi.belongsTo(db.user, {
    foreignKey: 'created_by',
    as: 'user'
});


db.user.hasMany(db.satuan, {
    as: 'satuan'
});
db.satuan.belongsTo(db.user, {
    foreignKey: 'created_by',
    as: 'user'
});


db.user.hasMany(db.stokbarang, {
    as: 'stokbarangs'
});
db.stokbarang.belongsTo(db.user, {
    foreignKey: 'created_by',
    as: 'user'
});


db.jenisbarang.hasMany(db.stokbarang);
db.stokbarang.belongsTo(db.jenisbarang, {
    foreignKey: 'jenisbarangId',
    as: 'jenisbarang'
});


module.exports = db;