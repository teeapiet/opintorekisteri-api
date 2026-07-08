const express = require("express");

const router = express.Router();

const verifyToken =
require("../middleware/auth");

const opiskelijaController =
require("../controllers/opiskelijaController");

router.get("/",
    verifyToken,
    opiskelijaController.getAll);

router.post("/",
    verifyToken,
    opiskelijaController.create);

router.put("/:id",
    verifyToken,
    opiskelijaController.update);

router.delete("/:id",
    verifyToken,
    opiskelijaController.remove);

module.exports = router;