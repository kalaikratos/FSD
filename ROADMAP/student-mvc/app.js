const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const studentController = require('./controllers/studentController');
const app = express();
mongoose.connect("mongodb://localhost:27017/studentDB", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error(error));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/', studentController.getStudents);
app.post('/', studentController.createStudent);
app.delete('/:id', studentController.deleteStudent);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
