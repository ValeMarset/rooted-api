const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");
faker.locale = "en";

module.exports = async () => {
  const admins = [];

  admins.push({
    firstname: "Ronald",
    lastname: "Lens",
    email: "ronaldlens@gmail.com",
    address: "Virginia Avenue 4321",
    phone: "093112233",
    avatar: "admin1.jpeg",
    password: "1234",
  });

  await Admin.bulkCreate(admins);
  console.log("[Database] Admin seeder ran successfully.");
};

/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 *
 */
