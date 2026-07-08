const express = require("express");

const verifyToken =
require("../middleware/auth");


const router = express.Router();

const arviointiController =
require("../controllers/arviointiController");

router.get("/",
    verifyToken,
    arviointiController.getAll);

router.post("/",
    verifyToken,
    arviointiController.create);

router.put("/:id",
    verifyToken,
    arviointiController.update);

router.delete("/:id",
    verifyToken,
    arviointiController.remove);

module.exports = router;