import { useRouter } from 'next/router';
import React from 'react';

const GoBackButton = () => {

    const router = useRouter();

    return (
        <button 
            onClick={() => router.back()} 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
            Назад
        </button>
    );
    
}

export default GoBackButton;
