import React from 'react';
import '../../styles/tailwind.css';

const MediumTitleText = ({ children }) => {
    return (
        <p className='mb-7 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
            {children}
        </p>
    );
}

export default MediumTitleText;
