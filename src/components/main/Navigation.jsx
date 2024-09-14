import React from 'react';

const Navigation = () => {

    return (
        <div 
            className='
                p-5
                flex items-center justify-center 
                space-x-2 sm:space-x-20 md:space-x-20 lg:space-x-20 xl:space-x-24
            ' 
        >
            <button className="bg-transparent  text-gray-400 px-4 py-2 rounded-full hover:bg-gray-100 active:bg-gray-300 focus:outline-none" >
                Кофе
            </button>
            <button className='bg-transparent  text-gray-400 px-4 py-2 rounded-full hover:bg-gray-100 active:bg-gray-300 focus:outline-none' >
                Первое
            </button>
        </div>
    );
    
}

export default Navigation;
