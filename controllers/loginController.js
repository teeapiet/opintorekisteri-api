const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User =
require("../models/userModel");

const login = (req, res) => {

    const {
        username,
        password
    } = req.body;

    User.findByUsername(
        username,
        async (err, results) => {

            if (err) {
                return res
                    .status(500)
                    .json(err);
            }

            if (results.length === 0) {

                return res
                    .status(401)
                    .json({
                        message:
                        "Virheellinen käyttäjä"
                    });

            }

            const user = results[0];

            const valid =
            await bcrypt.compare(
                password,
                user.password
            );

            if (!valid) {

                return res
                    .status(401)
                    .json({
                        message:
                        "Virheellinen salasana"
                    });

            }

            const token =
            jwt.sign(

                {
                    user_id:
                    user.user_id
                },

                "salainen_avain",

                {
                    expiresIn: "1h"
                }

            );

            res.json({
                token
            });

        }
    );

};

module.exports = {
    login
};