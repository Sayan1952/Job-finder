import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
    return (
        <div className=''>
            <nav className='pt-5 mx-auto md:flex justify-between items-center'>
            <h1 className='text-3xl font-bold hover:text-violet-500'><Link to="/">JobFinder</Link></h1>
            <div className='flex gap-10 text-xl'>
                <Link to="/statistics" className='text-blue-500'>Statistics</Link>
                <Link to="/appliedJobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <button className='font-bold bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-md text-white hidden md:block'>Start Applying</button>
              
            </nav>
        <Outlet />
        </div>
    );
};

export default Nav;