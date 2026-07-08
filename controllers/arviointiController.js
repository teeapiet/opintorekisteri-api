const Arviointi =
require("../models/arviointiModel");

const getAll = (req, res) => {

    Arviointi.getAll(
        (err, results) => {

            if (err) {
                return res
                    .status(500)
                    .json(err);
            }

            res.json(results);

        }
    );

};

const create = (req, res) => {

    Arviointi.create(
        req.body,
        (err, result) => {

            if (err) {
                return res
                    .status(500)
                    .json(err);
            }

            res.status(201).json({
                message:
                    "Arviointi lisätty",
                id:
                    result.insertId
            });

        }
    );

};

const update = (req, res) => {

    const id = req.params.id;

    Arviointi.update(
        id,
        req.body,
        (err, result) => {

            if (err) {
                return res
                    .status(500)
                    .json(err);
            }

            res.json({
                message:
                    "Arviointi päivitetty"
            });

        }
    );

};

const remove = (req, res) => {

    const id = req.params.id;

    Arviointi.remove(
        id,
        (err, result) => {

            if (err) {
                return res
                    .status(500)
                    .json(err);
            }

            res.json({
                message:
                    "Arviointi poistettu"
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