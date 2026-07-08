const db = require("../config/db");

const getAll = (callback) => {

    db.query(
        "SELECT * FROM Arviointi",
        callback
    );

};

const create = (arviointi, callback) => {

    const sql = `
        INSERT INTO Arviointi
        (
            opiskelija_id,
            opintojakso_id,
            arvosana
        )
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [
            arviointi.opiskelija_id,
            arviointi.opintojakso_id,
            arviointi.arvosana
        ],
        callback
    );

};

const update = (
    id,
    arviointi,
    callback
) => {

    const sql = `
        UPDATE Arviointi
        SET opiskelija_id = ?,
            opintojakso_id = ?,
            arvosana = ?
        WHERE arviointi_id = ?
    `;

    db.query(
        sql,
        [
            arviointi.opiskelija_id,
            arviointi.opintojakso_id,
            arviointi.arvosana,
            id
        ],
        callback
    );

};

const remove = (
    id,
    callback
) => {

    const sql = `
        DELETE FROM Arviointi
        WHERE arviointi_id = ?
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