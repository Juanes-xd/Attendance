import React, {useState} from 'react'
import {Link} from 'react-router-dom';


const Admin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='row mt-5'>
        <div className='col'></div>
        <div className='col'>
            <form  className='form-group'>

                <input onChange={(e)=>{setEmail(e.target.value)}} 
                className='form-control' placeholder='Introduce el email' type="email" />

                <input onChange={(e)=>{setPassword(e.target.value)}}
                 className='form-control mt-4' placeholder='Password' type="password" />

         <center><input className='btn btn-dark btn-block mt-4' value='Registrar usuario' type="submit" /></center>
            </form>
          <center>< button className='btn btn-success btn-block mt-3' >Iniciar sesion</button></center>
            
        </div>
        <div className='col'></div>
    </div>
    )
}

export default Admin
