const {Schema, model} = require('mongoose');

const noteSchema = new Schema({
  title: { type: String, required: true, minlength: 2, maxlength: 100 },
  content: { type: String, required: true, minlength: 2, maxlength: 1000 },
  created_at: { type: Date, default: Date.now },
});


module.exports = model('Notes', noteSchema);