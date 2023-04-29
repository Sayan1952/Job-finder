import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons'

const Error = () => {
    return (
        <div className='mt-32'>
            <h1 className='text-7xl font-extrabold'>404</h1>
            <p className='Text-4xl font-semibold'>Not Found</p>
            <FontAwesomeIcon icon={faFaceFrown} className=''/>
        </div>
    );
};

export default Error;