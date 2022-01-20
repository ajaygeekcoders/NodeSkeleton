const apiRoutes = require('express').Router();
const StudentController = require('./student.controller');


apiRoutes.post('/', StudentController.addStudent);
apiRoutes.get('/', StudentController.getAllStudents);
apiRoutes.get('/:_id', StudentController.getSingleStudent);
apiRoutes.put('/:_id', StudentController.updateStudent);
apiRoutes.delete('/:_id', StudentController.removeSingleStudent);


module.exports = apiRoutes;