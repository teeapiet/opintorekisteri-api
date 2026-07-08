const jwt =
require("jsonwebtoken");

const verifyToken =
(req, res, next) => {

    const authHeader =
    req.headers.authorization;

    if (!authHeader) {

        return res
            .status(401)
            .json({
                message:
                "Token puuttuu"
            });

    }

    const token =
    authHeader.split(" ")[1];

    try {

        jwt.verify(
            token,
            "salainen_avain"
        );

        next();

    }

    catch {

        res.status(403).json({
            message:
            "Virheellinen token"
        });

    }

};

module.exports =
verifyToken;