module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },


    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    roles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_active: {
      type: DataTypes.STRING,
      allowNull: true
    }

  });


  return User;
};