const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'mysql-db',  // The container name of MySQL
  user: 'root',      // The root user for MySQL
  password: 'root',  // The password set for MySQL
  database: 'test'   // The database to use (ensure this exists or create it)
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Close the connection after 3 seconds
setTimeout(() => {
  connection.end();
}, 3000);
