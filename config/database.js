const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "123456",
  port: 5432,
});

const connectDB = () => {
  pool.connect(function (err) {
    if (err) throw err;
    console.log("Connected database");
  });
};

module.exports = { pool, connectDB };
