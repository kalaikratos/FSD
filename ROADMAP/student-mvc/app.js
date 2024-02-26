const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const studentController = require("./controllers/studentController");
const mentorController = require("./controllers/mentorController");

const app = express();

require("dotenv").config();

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.get("/", studentController.getStudents);

app.post("/students", studentController.createStudent);
app.post("/mentors", mentorController.createMentor);
app.post("/students/assign", studentController.assignStudentToMentor);
app.get("/students/withoutMentor", studentController.getStudentsWithoutMentor);
app.put("/students/changeMentor", studentController.changeMentor);
app.get("/students/particularMentor", studentController.getStudentsForParticularMentor);
app.get("/students/previousMentor", studentController.getPreviousMentor);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));