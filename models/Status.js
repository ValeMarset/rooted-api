const { Model, DataTypes } = require("sequelize");

class Status extends Model {
  static initModel(sequelize) {
    Status.init(
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
      },
      { sequelize, modelName: "status", timestamps: false },
    );
    return Status;
  }
}

module.exports = Status;
