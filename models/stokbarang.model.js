module.exports = (sequelize, DataTypes) => {
    const Stokbarang = sequelize.define('stokbarangs', {
     
      jenisbarangId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stok_awal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      stok_keluar: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      stok_akhir: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      satuan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      departemenId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lokasiId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      keterangan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      
      is_active: {
        type: DataTypes.STRING,
        allowNull: true
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      deleted_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
  
    },{
        freezeTableName: true, // untuk kesamaan antara nama model & table
        
        timestamps: false, // untuk mematikan fitur timestamps bawaan sequelize
    });

  
    return Stokbarang;
  };