const { Model, DataTypes } = require("sequelize");
const slugify = require("slugify");

class Category extends Model {
  static initModel(sequelize) {
    Category.init(
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
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        img: { type: DataTypes.STRING, allowNull: false },
        slug: { type: DataTypes.STRING, allowNull: true },
      },
      { sequelize, modelName: "categories", timestamps: false },
    );

    Category.beforeCreate(async (category, options) => {
      category.slug = slugify(category.name, {
        replacement: "-",
        remove: undefined,
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      });
    });

    Category.beforeBulkCreate(async (categories, options) => {
      for (const category of categories) {
        category.slug = slugify(category.name, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: true,
          locale: "en",
          trim: true,
        });
      }
    });

    return Category;
  }
}

module.exports = Category;
