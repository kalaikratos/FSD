const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const studentController = require("./controllers/studentController");
const mentorController = require("./controllers/mentorController");

const app = express();
require("dotenv").config();
 const db_url=process.env.DB_URL;

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

app.get("/", studentController.getStudents);
app.get("/students/:id/edit", studentController.getEditForm);
app.post("/students", studentController.createStudent);
app.put("/students/:id", studentController.updateStudent);
app.delete("/students/:id", studentController.deleteStudent);

app.post("/mentors", mentorController.createMentor);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));