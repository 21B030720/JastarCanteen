import useExcelWork from '@/hooks/useExcelWork';
import React from 'react';

const LoadExcelButton = () => {

    const { handleFileIntoProducts } = useExcelWork();

    return (
        <div>
            <div>
            <h1>Upload Products Excel File</h1>
                <input type="file" accept=".xlsx, .xls" onChange={handleFileIntoProducts} />
            </div>
        </div>
    );

}

export default LoadExcelButton;
