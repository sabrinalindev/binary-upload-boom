const express = require("express");
const router = express.Router();
//create comment controller
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now
//calling the createComment 
router.post("/createComment/:id", commentsController.createComment);

module.exports = router;