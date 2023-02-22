const Sequelize = require('sequelize');


//this will setup a connection pool
const sequelize = new Sequelize('node-schema', 'root', 'roottoor1!', {dialect: 'mysql', host:'localhost'});
/*
 i don't want a single connection but a pool of connections which will allow us to always reach out to it whenever
we have a query to run and then we get a new connection from that pool which manages multiple connections
so that we can run multiple queries simultaneously because each query needs its own connection and once
the query is done, the connection will be handed back into the pool and it's available again for a new query
and the pool can then be finished when our application shuts down.*/

/*So I will call create pool here and I need to pass in a javascript object with some information about
our database engine,*/
// const pool = mysql.createPool({
//     host: 'localhost', //server ip adress
//     user: 'root',
//     database: 'node-schema',
//     password: 'roottoor1!'
// });


//this will create a pool

module.exports = sequelize;