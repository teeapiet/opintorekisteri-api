const db = require("../config/db");

const getAll = (callback) => {

    db.query(
        "SELECT * FROM Opintojakso",
        callback
    );

};

const create = (opintojakso, callback) => {

    const sql = `
        INSERT INTO Opintojakso
        (nimi, laajuus)
        VALUES (?, ?)
    `;

    db.query(
        sql,
        [
            opintojakso.nimi,
            opintojakso.laajuus
        ],
        callback
    );

};

const update = (id, opintojakso, callback) => {

    const sql = `
        UPDATE Opintojakso
        SET nimi = ?,
            laajuus = ?
        WHERE opintojakso_id = ?
    `;

    db.query(
        sql,
        [
            opintojakso.nimi,
            opintojakso.laajuus,
            id
        ],
        callback
    );

};

const remove = (id, callback) => {

    const sql = `
        DELETE FROM Opintojakso
        WHERE opintojakso_id = ?
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