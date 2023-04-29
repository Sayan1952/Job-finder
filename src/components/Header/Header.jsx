import React from 'react';
import JobCatagoryList from '../JobCatagoryList/JobCatagoryList';
import { useLoaderData } from 'react-router-dom';



const Header = () => {

    return (
        <div>
            <div className='md:flex items-center mt-4 mx-auto gap-4'>
                <div className='md:text-left text-center'>
                    <h1 className='font-extrabold text-7xl mb-6'>One Step <br /> Closer To Your <span className='text-violet-500'>Dream Job</span></h1>
                    <p className='font-md text-lg mb-6 text-neutral-500'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='font-bold bg-blue-500 p-3 rounded-md text-white'>Get Started</button>
                </div>
                <div>
                    <img src="All Images/P3OLGJ11.png" alt="" />
                </div>
            </div>
            <div className='mt-20'>
            <h1 className='mb-4 text-5xl font-bold'>Job Category List</h1>
            <p className='text-slate-500 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
        </div>
    );
};

export default Header;