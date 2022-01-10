const {Router} = require('express');


const {
    getAllstudents,
    getAllpersonal,
    getStudent, 
    createCurso, 
    editPersonal,
    editStudent, 
    deleteCurso,
    deletePersonal,
    deleteStudent,
    getAllAsistencia,
   
    createAsistencia,
    editMatricula
    } = require('../controllers/admin.controller');


const router = Router();


router.get('/students', getAllstudents)

router.get('/students', getAllpersonal)
//Buscando un solo estudiante.
router.get('/students/:id',getStudent)

router.post('/cursos',createCurso)

router.delete('/cursos/:id', deleteCurso)

router.delete('/students/:id', deleteStudent)

router.delete('/personal/:id', deletePersonal)

router.get('/asistencia', getAllAsistencia)

router.post('/asistencia', createAsistencia)

router.put('/personal/:id', editPersonal)

router.put('/student/:id',editStudent)

router.post('/matricula', editMatricula)

module.exports = router;