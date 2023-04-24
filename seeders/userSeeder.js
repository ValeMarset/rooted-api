const { faker } = require("@faker-js/faker");
const { User } = require("../models");
faker.locale = "en";

module.exports = async () => {
  const users = [];
  const totalUsers = 9;

  users.push({
    firstname: "Simona",
    lastname: "Keller",
    email: "simonakeller@gmail.com",
    address: "West Avenue 5678",
    phone: "098123456",
    image: "user1.jpeg",
    password: "1234",
  });

  for (let i = 0; i < totalUsers; i++) {
    const user = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      phone: faker.phone.number(),
      image: faker.image.avatar(false),
      password: "1234",
    };
    users.push(user);
  }

  await User.bulkCreate(users);
  console.log("[Database] Users seeder ran successfully.");
};
