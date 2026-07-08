const db = require("../config/db");

const getAll = (callback) => {
    const sql = "SELECT * FROM Opiskelija";

    db.query(sql, callback);
};

const create = (opiskelija, callback) => {

    const sql = `
        INSERT INTO Opiskelija
        (etunimi, sukunimi, sahkoposti)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [
            opiskelija.etunimi,
            opiskelija.sukunimi,
            opiskelija.sahkoposti
        ],
        callback
    );
};

const update = (id, opiskelija, callback) => {

    const sql = `
        UPDATE Opiskelija
        SET etunimi = ?,
            sukunimi = ?,
            sahkoposti = ?
        WHERE opiskelija_id = ?
    `;

    db.query(
        sql,
        [
            opiskelija.etunimi,
            opiskelija.sukunimi,
            opiskelija.sahkoposti,
            id
        ],
        callback
    );
};

const remove = (id, callback) => {

    const sql = `
        DELETE FROM Opiskelija
        WHERE opiskelija_id = ?
    `;

    db.query(
        sql,
        [id],
        callback
    );
};

module.exports = {
    getAll,
    create,
    update,
    remove
};