var mysql = require('mysql');

// MySQL connection
var connection;

if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'kingsley1',
		database: 'burgers_db'
	})
};

// Make the connection to MySQL
connection.connect(function (err) {
	if (err) {
		console.error('MySQL connection error -- ' + err.stack + '\n\n');
		return;
	}
	console.log('Connected to MySQL' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;