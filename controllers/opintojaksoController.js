const Opintojakso =
require("../models/opintojaksoModel");

console.log("opintojaksoController ladattu");

const getAll = (req, res) => {

    Opintojakso.getAll((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });

};

const create = (req, res) => {

    Opintojakso.create(
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "Opintojakso lisätty",
                id: result.insertId
            });

        }
    );

};

const update = (req, res) => {

    const id = req.params.id;

    Opintojakso.update(
        id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message:
                "Opintojakso päivitetty"
            });

        }
    );

};

const remove = (req, res) => {

    const id = req.params.id;

    Opintojakso.remove(
        id,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message:
                "Opintojakso poistettu"
            });

        }
    );

};

module.exports = {
    getAll,
    create,
    update,
    remove
};