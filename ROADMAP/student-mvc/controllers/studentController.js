const Student = require("../models/studentModel");
const Mentor = require("../models/mentorModel");

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.render("index", { students });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    console.log("$$$$$$$$ req.body $$$$$$$", req.body);
    await Student.create(req.body);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Delete a new student
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Display the edit form for a student
exports.getEditForm = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.render("edit", { student });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Update a student's information
exports.updateStudent = async (req, res) => {
  try {
    const { name, age, grade } = req.body;
    await Student.findByIdAndUpdate(req.params.id, { name, age, grade });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};


// Assign multiple students to a Mentor
exports.assignStudentToMentor = async (req, res) => {
  try {
    const { mentorId, studentsId } = req.body;
    await Student.updateMany(
      { _id: { $in: studentsId } }, // Find students by id in array of ids
      { mentor: mentorId } // Assign the mentor to each student
    );
    res.status(201).send("Students assigned to mentor successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

//To display students without mentor
exports.getStudentsWithoutMentor = async (req, res) => {
  try {
    const students = await Student.find({ mentor: { $exists: false } });
    res.render("index", { students });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

//update Mentor for particular Student
exports.changeMentor = async (req, res) => {
  try {
    const { studentId, newMentorId } = req.body;
    await Student.findByIdAndUpdate(studentId, { mentor: newMentorId }, { new: true });

    // Find the previous mentor of the student and update the mentor arrays
    const previousMentor = await Mentor.findOne({ students: studentId });
    if (previousMentor) {
      previousMentor.students.pull(studentId);
      await previousMentor.save();
      Student.previousmentors.push(previousMentor._id);
    }


    res.status(200).send("Mentor for student updated successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

//To get students for particular mentor
exports.getStudentsForParticularMentor = async (req, res) => {
  try {
    const { mentorId } = req.body;
    const students = await Student.find({ mentor: mentorId });
    console.log("Students:", students);
    if (!students) {
      return res.status(404).send("No students found for this mentor.");
    }
    res.render("index", { students });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

//To get previously assigned mentor
exports.getPreviousMentor = async (req, res) => {
  try {
    const { studentId } = req.body;
    const student = await Student.findById(studentId).populate('mentor');
    if (student) {
      const previousMentor = student.mentor;
      console.log('Previously assigned mentor:', previousMentor);
    } else {
      console.log('Student not found.');
    }

  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// API to show the previously assigned mentors for a particular student
const mentorslist = async (req, res) => {
  try {
    const id = req.body;
    // Find the student by ID
    const student = await Student.findById(id);

    // Get the list of previous mentors from the student's data
    const list = student.previousmentors;

    // Send the list of previous mentors as a response
    res.status(200).send({
      message: `Previous Mentors List of ${student.Name} are displayed here`,
      mentorslist: list,
    });
  } catch (error) {

    res.status(500).send({
      message: "Internal server Error",
      error: error.message,
    });
  }
};