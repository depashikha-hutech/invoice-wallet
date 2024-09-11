// src/config/dbConfig.js
const mysql = require("mysql2/promise");

// Database connection details
const dbConfig = {
  host: "newspcspl8readreplica.czv8mlypkyzf.ap-south-1.rds.amazonaws.com", // Replace with your host
  user: "sarang.bondre", // Replace with your MySQL username
  password: "0217c155c97e4941b", // Replace with your MySQL password
  database: "smcspl_v1", // Replace with your MySQL database
  port: 3306,
};

async function executeQueryInSevaSetuDB(sql) {
  let connection;
  try {
    // Create a connection to the database
    connection = await mysql.createConnection(dbConfig);
    // Execute the query
    const [rows] = await connection.execute(sql);
    // Return the result as an array of objects
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error; // Re-throw the error to handle it further up the call chain if needed
  } finally {
    if (connection) {
      // Ensure the connection is closed after the query
      await connection.end();
    }
  }
}

module.exports = { executeQueryInSevaSetuDB };
