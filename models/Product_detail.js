const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./Product');

const Product_detail = sequelize.define('Product_detail', {
  detailId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false
  },
  material: {
    type: DataTypes.STRING,
    allowNull: false
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'product_details'
});

// ความสัมพันธ์ One-to-Many ระหว่าง Product และ Product_detail
Product.hasMany(Product_detail, { foreignKey: 'productId' });
Product_detail.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Product_detail;
