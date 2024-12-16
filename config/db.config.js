//code// config/db.config.js
  
module.exports = {    
    HOST: process.env.DB_HOST,    
    USER: process.env.DB_USER,      
    PASSWORD: process.env.DB_PASSWORD,      
    DB: process.env.DB_NAME,    
    dialect: "mysql",    
    pool: {      
            max: 5,      
            min: 0,      
            acquire: 30000,      
            idle: 10000,    
          },  
    
          define: {
            freezeTableName: true, // untuk kesamaan antara nama model & table
            timestamps: false, // untuk mematikan fitur timestamps bawaan sequelize
        }
    
  };