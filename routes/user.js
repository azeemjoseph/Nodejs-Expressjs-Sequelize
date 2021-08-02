const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

// Get method to fetch all user from DB
router.get("/users", userController.getAllUsers);                              // don't call the method with perenthesis express middleware will handle


router.post("/GetuserByName",userController.getSpecificUserByName);

module.exports = router;

