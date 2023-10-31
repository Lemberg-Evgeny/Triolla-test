const Router = require("express").Router;
const noteController = require("../controllers/noteController");
const router = new Router();
const { body } = require("express-validator");

router.get("/notes", noteController.getNotes);

router.post("/notes",
  body("title").isLength({ min: 2, max: 100 }),
  body("content").isLength({ min: 2, max: 1000 }),
  noteController.createNote
);

module.exports = router;
