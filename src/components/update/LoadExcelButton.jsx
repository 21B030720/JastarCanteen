import useExcelWork from '@/hooks/useExcelWork';
import React from 'react';
import '../../styles/tailwind.css';

const LoadExcelButton = () => {

    const { handleFileIntoProducts } = useExcelWork();

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Загрузите файл Excel</h1>
            <label className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md cursor-pointer hover:bg-green-600 transition duration-300 ease-in-out">
                Выбрать файл
                <input 
                    type="file" 
                    accept=".xlsx, .xls" 
                    onChange={handleFileIntoProducts} 
                    className="hidden"
                />
            </label>
        </div>
    );
    
}

export default LoadExcelButton;
