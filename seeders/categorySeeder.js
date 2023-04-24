const { Category } = require("../models");
const categories = require("../db.categories");

module.exports = async () => {
  await Category.bulkCreate(categories);
  console.log("[Database] Categories seeder ran successfully.");
};
