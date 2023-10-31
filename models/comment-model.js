const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  note_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Note",
    required: true,
  },
  text: { type: String, required: true, minlength: 1, maxlength: 500 },
  created_at: { type: Date, default: Date.now },
});

module.exports = model("Comments", commentSchema);
