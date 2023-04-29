import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AppliedPage = ({cart}) => {
    const {companyLogo,jobTitle,companyName,fulltimeOrPartTime, remoteOrOnsite, location, salary,id } = cart;
    return (
        <div>
      
      <div className="p-4 rounded-lg md:flex items-center justify-between px-10 w-full border my-5">
        <div className="md:flex items-center gap-6">
          <img src={companyLogo} alt="" className="bg-gray-100 p-10 w-60 h-60 rounded-md" />
          <div className="text-left">
            <h1 className="font-bold text-xl">{jobTitle}</h1>
            <p>{companyName}</p>
            <div className="flex gap-4 mt-4 mb-4">
              <p className="border border-violet-500 px-5 py-1 rounded-md text-violet-500 font-semibold">
                {remoteOrOnsite}
              </p>
              <p className="border border-violet-500 px-5 py-1 rounded-md text-violet-500 font-semibold">
                {fulltimeOrPartTime}
              </p>
            </div>
            <div className='flex items-center gap-2 font-semibold mb-7'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>{location}</p>
                    <p className='ml-10'>Salary: {salary}</p>
                </div>

          </div>
        </div>
        <Link to={`/details/${id}`}><button className='font-bold bg-blue-500 p-2 rounded-md text-white'>View Details</button></Link>
      </div>
    </div>
    );
};

export default AppliedPage;