/**
 * Este archivo se encarga de importar todos los seeders que se hayan definido
 * en el sistema y ejectuarlos.
 *
 * Para ejecutar este archivo se debe correr el comando:
 *
 * 👉 node seeders/runAllSeeders.js
 *
 *
 * Como alternativa, en el artchivo package.json se creó un comando "alias"
 * para que la ejecución sea un poco más corta:
 *
 * 👉 npm run seeders
 *
 */

require("dotenv").config();
const { sequelize } = require("../models");

async function runAllSeeders() {
  await sequelize.sync({ force: true });

  // Seeders:

  await require("./adminSeeder")();
  await require("./categorySeeder")();
  await require("./productSeeder")();
  await require("./statusSeeder")();
  await require("./userSeeder")();
  await require("./orderSeeder")();

  console.log("[Database] ¡All test data was inserted successfully!");
  process.exit();
}

runAllSeeders();
