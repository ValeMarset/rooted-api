const { Sequelize } = require("sequelize");

const sequelizeOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_CONNECTION,
  logging: false,
};

if (process.env.DB_CONNECTION === "postgres") {
  sequelizeOptions.dialectModule = require("pg");
}

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD,
  sequelizeOptions, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    dialectModule: require("pg"),
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const Admin = require("./Admin");
const Category = require("./Category");
const Product = require("./Product");
const Status = require("./Status");
const Order = require("./Order");
const User = require("./User");

Admin.initModel(sequelize);
Category.initModel(sequelize);
Product.initModel(sequelize);
Status.initModel(sequelize);
Order.initModel(sequelize);
User.initModel(sequelize);

/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 */

Category.hasMany(Product);
Product.belongsTo(Category);
Status.hasMany(Order);
Order.belongsTo(Status);
User.hasMany(Order);
Order.belongsTo(User);

// Crear esquema y modelo User...

module.exports = {
  sequelize,
  Admin,
  Product,
  Category,
  User,
  Status,
  Order,
};
