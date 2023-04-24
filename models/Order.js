const { Model, DataTypes } = require("sequelize");
const Product = require("../models/Product");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        products: {
          type: DataTypes.JSON,
        },
        firstname: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { sequelize, modelName: "order", timestamps: false },
    );

    Order.beforeCreate(async (order, options) => {
      order.statusId = 1;

      const allProducts = await Product.findAll();

      for (const orderedProduct of order.products) {
        for (const product of allProducts) {
          if (product.id === orderedProduct.productId && product.stock < orderedProduct.quantity) {
            throw new Error(`Insufficient stock for product ${product.id}`);
          }
        }
      }
    });

    return Order;
  }
}

module.exports = Order;
