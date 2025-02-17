'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     return await queryInterface.createTable('baseserver_users', 
      { id: {
           type:Sequelize.UUID,
           primaryKey:true,
           defaultValue:Sequelize.UUIDV4,
           autoIncrement:false,
           allowNull:false,
         },
        full_name:{
          type:Sequelize.TEXT,
          allowNull:false,
        } ,
        email:{
          type:Sequelize.STRING,
          unique:true,
          allowNull:false,
        },
        password_hash:{
          type:Sequelize.TEXT,
        },
        is_active:{
          type:Sequelize.BOOLEAN,
          defaultValue:true,
        },
        blocked:{
           type:Sequelize.BOOLEAN,
           defaultValue:false,
        },
        last_action:{
          type:Sequelize.DATE,
          allowNull:false,
        },
        created_at:{
          type:Sequelize.DATE,
          allowNull:false,
        },
        updated_at:{
          type:Sequelize.DATE,
          allowNull:false,
        },
      });

  },

  async down (queryInterface, Sequelize) {
     return await queryInterface.dropTable('baseserver_users');
  }
};
