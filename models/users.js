const Sequelize = require('sequelize')

const sequelize = require('../utils/database')

const UsersDetail = sequelize.define('user',{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name:{
      type: Sequelize.STRING
    },
    number:{
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    email:{
      type: Sequelize.STRING,
      allowNull: false
    }
})

module.exports = UsersDetail