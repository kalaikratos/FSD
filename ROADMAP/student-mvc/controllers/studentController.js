const Student=require('../models/studentModel');

exports.getStudents = async (req, res) => {
    try{
        const students = await Student.find();
        res.render('index', {students});
    }
    catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
exports.createStudent = async (req, res) => {
    try{
        await Student.create(req.body);
        res.redirect('/');
    }
    catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
exports.deleteStudent = async (req, res) => {
    try{
        await Student.findByIdAndDelete(req.params.id);
        res.redirect('/');
    }
    catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}