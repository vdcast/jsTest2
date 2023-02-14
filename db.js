const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
	'mydb',
	'mydbuser',
	'pass',
	{
		host: 'localhost',
		port: '5432',
		dialect: 'postgres'
	}
)

