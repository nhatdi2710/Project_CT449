const express = require("express");
const adminController = require("../controllers/admin.controller");

const router = express.Router();

// router.route("/login").post(adminController.login);

// Manage Books
router.route("/book")
    .get(adminController.showAllBook)
    .post(adminController.createBook)
    .delete(adminController.deleteAllBook)
;

router.route("/book/:id")
    .get(adminController.findOneBook)
    .put(adminController.updateBook)
    .delete(adminController.deleteBook)
;

// Manage Publishing Comp
router.route("/pcomp")
    .get(adminController.showAllPC)
    .post(adminController.createPC)
    .delete(adminController.deleteAllPC)
;

router.route("/pcomp/:id")
    .get(adminController.findOnePC)
    .put(adminController.updatePC)
    .delete(adminController.deletePC)
;

// router.route("/logout").get(adminController.logout);

module.exports = router;