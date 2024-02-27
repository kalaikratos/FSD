const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
  },
  previousmentors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mentor",
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
