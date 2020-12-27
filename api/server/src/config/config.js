require("dotenv").config()

module.exports = {
  // If using onine database

  development: {
    database: "edducate",
    username: "postgres",
    password: "admin",
    host: "127.0.0.1",
    dialect: "postgres", //hangi databese ile çalıştığın (örnek mysql de olabilirdi)
  },

  /*   test: {
    database: "book_test",
    username: "steven",
    password: "admin",
    host: "127.0.0.1",
    dialect: "postgres",
  }, */

  production: {
    database: "d83vl5jf0j7mgb",
    username: "mhucwllkkkcjlr",
    password:"765fe3938d074deab0f1b32c535fa7a0729690158b3ec107d52048531b56a141",
    host: "ec2-35-168-77-215.compute-1.amazonaws.com",
    dialect: "postgres",
  },
}
