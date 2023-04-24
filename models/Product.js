const { Model, DataTypes } = require("sequelize");
const slugify = require("slugify");
class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        summary: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        upkeep: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        price: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        img: { type: DataTypes.STRING, allowNull: false },
        stock: { type: DataTypes.INTEGER, allowNull: false },
        slug: { type: DataTypes.STRING, allowNull: true },
      },
      { sequelize, modelName: "products", timestamps: false },
    );

    Product.beforeCreate(async (product, options) => {
      product.slug = slugify(product.name, {
        replacement: "-",
        remove: undefined,
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      });
    });

    Product.beforeBulkCreate(async (products, options) => {
      for (const product of products) {
        product.slug = slugify(product.name, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: true,
          locale: "en",
          trim: true,
        });
      }
    });
    return Product;
  }
}

module.exports = Product;
