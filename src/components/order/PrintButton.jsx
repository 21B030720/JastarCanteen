import React from 'react';
import '../../styles/tailwind.css';

const PrintButton = () => {

    const handlePrint = () => {
        window.print(); // This will trigger the print dialog
    };

    return (
        <button
            onClick={handlePrint}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
            Печать
        </button>
    );
}

export default PrintButton;
