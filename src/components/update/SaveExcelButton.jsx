import useExcelWork from '@/hooks/useExcelWork';
import React from 'react';
import '../../styles/tailwind.css';

const SaveExcelButton = () => {
    const { handleSaveProducts } = useExcelWork();

    return (
        <div className="flex items-center justify-center mt-10">
            <button 
              onClick={handleSaveProducts} 
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg"
            >
                Сохранить
            </button>
        </div>
    );
}

export default SaveExcelButton;
