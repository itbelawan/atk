module.exports = (sequelize, DataTypes) => {
    const Departemen = sequelize.define('departemen', {
      kode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nama_departemen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
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
  
    return Departemen;
  };