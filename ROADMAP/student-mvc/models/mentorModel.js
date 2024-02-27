const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    name: String,
    speciality: String,
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student",
        },
    ],
});

module.exports = mongoose.model("Mentor", mentorSchema);
