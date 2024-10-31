const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  productId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  stockQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imagePath: { // ฟิลด์ใหม่สำหรับเก็บที่อยู่รูปภาพ
    type: DataTypes.STRING,
    allowNull: true // อนุญาตให้ว่างได้ หากไม่มีรูปภาพ
  }
}, {
  tableName: 'products'
});


module.exports = Product;