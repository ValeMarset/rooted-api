const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        // username: {
        //   type: DataTypes.STRING(200),
        //   allowNull: false,
        // },
        email: {
          type: DataTypes.STRING(200),
          allowNull: false,
          unique: { args: true, msg: "User already exists" },
        },
        /*         birthdate: {
          type: DataTypes.DATE,
          allowNull: false,
        }, */
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: { type: DataTypes.STRING, allowNull: true },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        wishList: {
          type: DataTypes.JSON,
          allowNull: true,
          defaultValue: [],
        },
      },
      { sequelize, modelName: "users", timestamps: false },
    );

    User.prototype.isValidPassword = async function (password) {
      return await bcrypt.compare(password, this.password);
    };

    User.beforeCreate(async (user, options) => {
      if (user.changed(`password`)) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    });

    User.beforeBulkCreate(async (users, options) => {
      for (const user of users) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    });

    return User;
  }
}

module.exports = User;
