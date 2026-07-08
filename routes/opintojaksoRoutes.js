const express = require("express");

const verifyToken =
require("../middleware/auth");

const router = express.Router();

const opintojaksoController =
require("../controllers/opintojaksoController");

router.get("/",
    verifyToken,
    opintojaksoController.getAll);

router.post("/",
    verifyToken,
    opintojaksoController.create);

router.put("/:id",
    verifyToken,
    opintojaksoController.update);

router.delete("/:id",
    verifyToken,
    opintojaksoController.remove);

module.exports = router;