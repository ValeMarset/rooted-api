const { Status } = require("../models");
const status = require("../db.status");

module.exports = async () => {
  await Status.bulkCreate(status);
  console.log("[Database] Status seeder ran successfully.");
};
