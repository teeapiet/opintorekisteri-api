const Opiskelija =
require("../models/opiskelijaModel");

const getAll = (req, res) => {

    Opiskelija.getAll((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });

};

const create = (req, res) => {

    Opiskelija.create(
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "Opiskelija lisätty",
                id: result.insertId
            });

        }
    );

};

const update = (req, res) => {

    const id = req.params.id;

    Opiskelija.update(
        id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Opiskelija päivitetty"
            });

        }
    );

};

const remove = (req, res) => {

    const id = req.params.id;

    Opiskelija.remove(
        id,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Opiskelija poistettu"
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