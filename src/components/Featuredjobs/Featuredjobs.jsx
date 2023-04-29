import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Featuredjobs = ({data}) => {
    const {companyLogo, companyName, jobTitle, remoteOrOnsite, fulltimeOrPartTime, location, salary,id} = data;
    return (
        <div>
            <div className='w-full md:h-80 p-6 border-2 border-neutral-100 text-left rounded-md'>
                <img src={companyLogo} alt="" />
                <h1 className='font-bold text-xl mt-2 text-gray-700'>{jobTitle}</h1>
                <p className='mt-2 font-semibold'>{companyName}</p>
                <div className='flex gap-4 mt-4 mb-4'>
                    <p className='border border-violet-500 px-5 py-1 rounded-md text-violet-500 font-semibold'>{remoteOrOnsite}</p>
                    <p className='border border-violet-500 px-5 py-1 rounded-md text-violet-500 font-semibold'>{fulltimeOrPartTime}</p>
                </div>
                <div className='flex items-center gap-2 font-semibold mb-7'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>{location}</p>
                    <p className='ml-10'>Salary: {salary}</p>
                </div>
                <Link to={`/details/${id}`}><button className='font-bold bg-blue-500 p-2 rounded-md text-white'>View Details</button></Link>
                
            </div>
        </div>
    );
};

export default Featuredjobs;