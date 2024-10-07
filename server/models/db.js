const knex = require("knex");

// const db = knex({
//   client: 'pg',
//   connection: {
//     host: '127.0.0.1',
//     port: 5432,
//     user: 'postgres',
//     password: 'test',
//     database: 'todos',
//   },
// });

const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    connectionString:
      "postgresql://profilestore_user:seyPY5L6v8tTPkRlIiN1N864qnvExs8c@dpg-cs1tamlds78s73bagit0-a.oregon-postgres.render.com/profilestore",
    ssl: {
      rejectUnauthorized: true, // Change to true for production
    },
  },
});

module.exports = db;

module.exports = db;
