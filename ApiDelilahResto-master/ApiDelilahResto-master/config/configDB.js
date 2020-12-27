let mysql = require('mysql');

//Set database connection credentials
let configDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Edwin123',
    database: 'delilahr',
});

configDB.connect(err => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Conectado Correctamente a la Base de Datos Delilah DB');
    }
})

module.exports = configDB;