import useExcelWork from '@/hooks/useExcelWork';
import React from 'react';
import '../../styles/tailwind.css';

const SaveExcelButton = () => {

    const { handleSaveProducts } = useExcelWork();

    return (
        <div>
            <button onClick={handleSaveProducts}>Сохранить</button>
        </div>
    );

}

export default SaveExcelButton;
