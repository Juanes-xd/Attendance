import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item'">
                <Link className="nav-link" to='/'>Inicio</Link>
            </li>
            <li>
            <Link  className="nav-link" to='/login'>Login</Link>
            </li>
            <li>
            <Link  className="nav-link" to='/admin'>Admin</Link>
            </li>
        </ul>
        
        <button type='button' className='btn btn-danger'>Cerrar sesion</button>
        
        </nav>
    </div>
    )
}

export default Menu
