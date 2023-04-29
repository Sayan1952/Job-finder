import React from 'react';

const DetailsPage = ({gt,handleAddToCart}) => {
    const {jobTitle,jobDescription,jobResponsibility,experiences,educationalRequirements,salary,contactInformation,location} = gt;
    return (
        <div>
            <h1 className='my-20 text-7xl font-bold p-10'>Job Details</h1>
            <div className='md:flex justify-center gap-32 text-left text-xl'>
                <div className='flex flex-col gap-10'>
                    <p className='text-gray-500'><span className='font-bold text-black p-2'>Job Description:</span>{jobDescription}</p>
                    <p className='text-gray-500'><span className='font-bold text-black'>Job Responsibility:</span>{jobResponsibility}</p>
                    <p className='font-bold'>Educational Requirements:</p>
                    <p className='text-gray-500'>{educationalRequirements}</p>
                    <p className='font-bold'>Experiences</p>
                    <p className='text-gray-500 mb-5'>{experiences}</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-col gap-4 bg-backgroundC p-4 rounded-lg font-bold'>
                        <h1>Job Details</h1>
                        <p>Salary : <span className='font-semibold text-gray-500'>{salary}</span> </p>
                        <p>Job Title : <span className='font-semibold text-gray-500'>{jobTitle}</span></p>
                        <h1>Contact Information</h1>
                        <p>Phone : <span className='font-semibold text-gray-500'>{contactInformation.phone}</span></p>
                        <p>Email : <span className='font-semibold text-gray-500'>{contactInformation.email}</span></p>
                        <p>Address : <span className='font-semibold text-gray-500'>{location}</span></p>
                    </div>
                    <button className='w-full bg-violet-400 p-4 mt-6 rounded-lg font-bold text-white' onClick={()=>handleAddToCart(gt)}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;