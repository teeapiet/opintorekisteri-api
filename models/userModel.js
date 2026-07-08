const db = require("../config/db");

const findByUsername = (
    username,
    callback
) => {

    const sql =
    "SELECT * FROM User WHERE username = ?";

    db.query(
        sql,
        [username],
        callback
    );

};

module.exports = {
    findByUsername
};