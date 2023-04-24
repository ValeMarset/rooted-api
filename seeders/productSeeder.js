const { Product } = require("../models");
const products = require("../db.products");

// for (const product of products) {
//   product.categoryId = Math.floor(Math.random() * 3) + 1;

// }

module.exports = async () => {
  await Product.bulkCreate(products);
  console.log("[Database] Products seeder ran successfully.");
};
