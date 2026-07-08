const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jebbajebba",
    database: "opintorekisteri"
});

connection.connect((err) => {
    if (err) {
        console.error("Tietokantavirhe:", err);
        return;
    }

    console.log("Tietokanta yhdistetty");
});

module.exports = connection;