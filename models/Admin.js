const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

class Admin extends Model {
  static initModel(sequelize) {
    Admin.init(
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
        avatar: { type: DataTypes.STRING, allowNull: true },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { sequelize, modelName: "admins", timestamps: false },
    );

    Admin.prototype.isValidPassword = async function (password) {
      return await bcrypt.compare(password, this.password);
    };

    Admin.beforeCreate(async (admin, options) => {
      if (admin.changed(`password`)) {
        admin.password = await bcrypt.hash(admin.password, 8);
      }
    });

    Admin.beforeBulkCreate(async (admins, options) => {
      for (const admin of admins) {
        admin.password = await bcrypt.hash(admin.password, 8);
      }
    });

    return Admin;
  }
}

module.exports = Admin;
