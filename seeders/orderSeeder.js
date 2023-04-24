const { faker } = require("@faker-js/faker");
const { Order } = require("../models");
const { User } = require("../models");
const orders = require("../db.orders");
faker.locale = "en";

module.exports = async () => {
  for (const order of orders) {
    order.statusId = Math.floor(Math.random() * 3) + 1;
    order.userId = Math.floor(Math.random() * 10) + 1;

    const randomUser = await User.findByPk(order.userId);

    order.firstname = randomUser.firstname;
    order.lastname = randomUser.lastname;
    order.email = randomUser.email;
    order.address = randomUser.address;
    order.phone = randomUser.phone;
  }

  await Order.bulkCreate(orders);
  console.log("[Database] Orders seeder ran successfully.");
};
