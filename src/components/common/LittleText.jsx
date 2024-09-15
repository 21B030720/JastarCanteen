import React from 'react';

const LittleText = ({ children }) => {
    return (
        <p 
            className='
                mb-7 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white
                text-2xl md:text-2xl lg:text-2xl
            '
        >
            {children}
        </p>
    );
}

export default LittleText;
