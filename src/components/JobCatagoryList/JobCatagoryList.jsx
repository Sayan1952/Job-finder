import React from 'react';

const JobCatagoryList = ({job}) => {
    const {logo, categoryName, availableJobs} = job
    return (
        <div>
            <div className='p-4'>
                <div className='bg-backgroundC flex flex-col w-60 h-60 p-4 text-left rounded-lg justify-center items-center gap-2'>
                    <img src={logo} alt="" className='w-20 h-20 p-2 bg-neutral-100 rounded-md' />
                    <h3 className='font-bold'>{categoryName}</h3>
                    <p>{availableJobs} jobs available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCatagoryList;