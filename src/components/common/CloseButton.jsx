import React from 'react';

const CloseButton = ({ closeModal }) => {
    return (
        <button
            onClick={closeModal}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
            Закрыть
        </button>
    );
}

export default CloseButton;
