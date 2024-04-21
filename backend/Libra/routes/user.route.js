const express = require("express");
const userController = require("../controllers/user.controller")

const router = express.Router();

// router.route("/login").post(userController.login);

router.route("/").get(userController.showAllBook);

router.route("/:id").get(userController.findOneBook);

// router.route("/logout/").get(userController.logout);

module.exports = router;