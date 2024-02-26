const Mentor = require("../models/mentorModel");

// Create a new mentor
exports.createMentor = async (req, res) => {
    try {
        console.log("$$$$$$$$ req.body $$$$$$$", req.body);
        await Mentor.create(req.body);
        res.status(201).send("Mentor created sucessfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};