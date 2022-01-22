import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            THIS IS OUR HOMEPAGE. This is where we will have our navbar
            {/* <nav>
                <Link to='nasalist'>NASA List</Link>
                <Link to='about'>About</Link>
            </nav> */}

            {/* We need Outlet to render our nested route components */}
            <Outlet />
        </div>
    );
}

export default Home;