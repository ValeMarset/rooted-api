const db = require("../models");

async function reset(req, res) {
  try {
    await db.sequelize.sync({ force: true });
    console.log("[Database] ¡All fields were created successfully!");

    await require("../seeders/adminSeeder")();
    await require("../seeders/categorySeeder")();
    await require("../seeders/productSeeder")();
    await require("../seeders/statusSeeder")();
    await require("../seeders/userSeeder")();
    await require("../seeders/orderSeeder")();

    return res.status(200).json({ message: "Database reset complete!" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  reset,
};
