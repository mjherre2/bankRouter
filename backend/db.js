const mysql = require( 'mysql2/promise' );

const config = {
    host: "localhost",
    port: 3306,
    user: 'root',
    password: "MjH97!@#aO",
    database: "bankrouter"
};

async function query (sql,params) {
    const connection = await mysql.createConnection(config);
    const [results, ] = await connection.execute(sql,params);
    return results;
}


module.exports.query = query;