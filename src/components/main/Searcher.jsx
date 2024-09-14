import React from 'react';

const Searcher = () => {

    return (
        <div className='p-4' >
            <input
                type="text"
                className="
                    w-full
                    p-2 pl-6
                    sm:p-3 sm:pl-6
                    md:p-4 md:pl-12
                    lg:p-5 lg:pl-20
                    border border-gray-400
                    sm:text-md md:text-lg
                    rounded-full
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                "
                placeholder="Поиск"
            />
        </div>
    );
    
}

export default Searcher;
