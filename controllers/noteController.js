const { validationResult } = require("express-validator");
const NotesModel = require("../models/note-model");

class NoteController {
  async createNote(req, res, next) {
    try {
      const { title, content, created_at } = req.body;

      const note = await NotesModel.create({ title, content, created_at });

      return res.json(note);

    } catch (e) {
      console.log("ERRRRRRR", e);
    }
  }

  async getNotes(req, res, next) {
    try {
      const notes = await NotesModel.find({});

      res.json(notes)
      
    } catch (e) {
      console.log("ERRRRRRR", e);
    }
  }
}

module.exports = new NoteController();
