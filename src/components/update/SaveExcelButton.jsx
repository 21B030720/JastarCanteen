import useExcelWork from '@/hooks/useExcelWork';
import React from 'react';

const SaveExcelButton = () => {

    const { handleSaveProducts } = useExcelWork();

    return (
        <div>
            <button onClick={handleSaveProducts}>Сохранить</button>
        </div>
    );

}

export default SaveExcelButton;
