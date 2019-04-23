const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  database: "tim_burton"
});

class SqlRunner {
  static run(sqlQuery, values = []) {
    return pool.query(sqlQuery, values).then(results => {
      return results;
    });
  }
}

module.exports = SqlRunner;
