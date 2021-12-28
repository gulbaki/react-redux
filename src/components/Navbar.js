import React from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className='nav-wrapper red darken-3'>
            <div className='container'>
                <a className='brand-logo'>Baki times</a>
                <ul className='right'>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <NavLink to='/about'>about</NavLink></li>
                    <li> <NavLink to='/contact'>contact</NavLink></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;