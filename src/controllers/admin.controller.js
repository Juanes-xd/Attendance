const pool = require('../db');



 const getAllstudents = async (req,res,next ) =>{
   
   try {
    const Allstudents = await pool.query('SELECT * FROM estudiantes')
    res.json(Allstudents.rows)

   } catch (error) {
       next(error)
   }
    
}

const getAllpersonal = async (req,res,next ) =>{
   
    try {
     const Allpersonal = await pool.query('SELECT * FROM personal')
     res.json(Allpersonal.rows)
 
    } catch (error) {
        next(error)
    }
     
 }

const getStudent = async (req,res,next ) =>{
    try {
     const {id} = req.params 
     const result = await pool.query('SELECT * FROM estudiantes WHERE student_code = $1', [id])

     if (result.rows.length == 0) {
        return res.status(404).json({message: 'Estudiante no encontrado'})
     }

     res.json(result.rows[0]);

    } catch (error) {
        next(error)
    }
}

const getAllAsistencia = async (req,res,next ) =>{

    try {
        const Allstudents = await pool.query('SELECT * FROM asistencia_clase')
        res.json(Allstudents.rows)
    
       } catch (error) {
        next(error)
       }
        
}



const createCurso = async (req,res,next ) =>{
    const {codigo_c, name_c, creditos,id_profesor} = req.body
    
 try {
    const result = await pool.query("INSERT INTO cursos(codigo_c, name_c, creditos, id_profesor) VALUES($1, $2, $3,$4) RETURNING *",
    [codigo_c, name_c,creditos,id_profesor]);
  
      //console.log(result)
      res.send(result.rows[0]);
 } catch (error) {
    next(error)
 }
}


const createAsistencia = async (req,res,next ) =>{

    const {student_code, codigo_c, fecha_hora, presente} = req.body

    try {
        const result = await pool.query('INSERT INTO asistencia_clase (student_code, codigo_c, fecha_hora, presente) VALUES($1, $2, $3, $4) RETURNING *',
        [student_code, codigo_c, fecha_hora, presente]);
      
          //console.log(result)
          res.send(result.rows[0]);
     } catch (error) {
        next(error)
     }
}

 

const deleteCurso = async (req,res,next ) =>{
    
     try {
        const {id} = req.params
        const result =  await pool.query('DELETE FROM cursos WHERE codigo_c = $1 RETURNING *', [id])
      
           if (result.rows.length == 0) {
             return res.status(404).json({message: 'Curso no encontrado'})
           }
      
           return res.sendStatus(204)
         
     } catch (error) {
         next(error)
     }
}

const deleteStudent = async (req,res,next ) =>{
    
     try {
        const {id} = req.params
        const result =  await pool.query('DELETE FROM estudiantes WHERE student_code = $1 RETURNING *', [id])
   
        if (result.rows.length == 0) {
          return res.status(404).json({message: 'Estudiante no encontrado'})
        }
   
        return res.sendStatus(204)
     } catch (error) {
         next(error)
     }
}

const deletePersonal = async (req,res,next ) =>{
    try {
        const {id} = req.params
     const result =  await pool.query('DELETE FROM personal WHERE id_personal = $1 RETURNING *', [id])

     if (result.rows.length == 0) {
       return res.status(404).json({message: 'Personal no encontrado'})
     }

     return res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}

const editPersonal = async (req,res,next ) =>{
    

    try {
        const {id} = req.params
    const {name_complete, eps, arl, direccion,salario,misional,no_misional} = req.body

    const result = await pool.query('UPDATE personal SET name_complete = $1, eps = $2, arl = $3, direccion = $4, misional = $5, no_misional = $6, salario =$7 WHERE id_personal = $8 RETURNING *',
     [name_complete, eps, arl, direccion,misional, no_misional, salario, id])

    if (result.rows.length == 0) {
        return res.status(404).json({message: 'Integrante de personal no encontrado'})
    }
    
    res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}


const editStudent = async (req,res,next ) =>{
    

    try {
     const {id} = req.params
    const {student_name, student_dir} = req.body

    const result = await pool.query('UPDATE estudiantes SET student_name = $1, student_dir = $2 WHERE student_code = $3 RETURNING *',
     [student_name, student_dir, id])

    if (result.rows.length == 0) {
        return res.status(404).json({message: 'Estudiante no encontrado'})
    }
    
    res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}

const editMatricula = async (req,res,next) => {

    try {
        const {id}=req.params
        const {codigo_c,codigo_e}=req.body

        const result = await pool.query('INSERT INTO matricula(codigo_c,codigo_e) VALUES($1, $2) RETURNING *',
        [codigo_c,codigo_e])

        if (result.rows.length == 0) {
            return res.status(404).json({message: 'Estudiante no encontrado o curso no encontrado'})
        }
        
        res.json(result.rows[0])
    } catch (error) {
        next(error)
    }

}


module.exports = {
    getAllstudents,
    getAllpersonal,
    getStudent,
    createCurso,
    deleteCurso,
    deletePersonal,
    deleteStudent,
    editPersonal,
    createAsistencia,
    getAllAsistencia,
    editStudent,
    editMatricula
}