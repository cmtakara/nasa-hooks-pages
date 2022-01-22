import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            {/* React router dom way of doing anchor tags <a> */}
            <Link to='/'>Home</Link>
            <Link to='nasalist'>NASA List</Link>
            <Link to='about'>About</Link>
            <Link to='giphy'>Giphy</Link>
        </nav>
    );
}

export default Nav;