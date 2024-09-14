import useProductStore from '@/store/useProductStore';
import React, { useState } from 'react';
import CheckModal from './CheckModal';

const ConfirmOrderButton = () => {
    const { total } = useProductStore();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <button onClick={toggleModal} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                <p className="text-lg">Подтвердить: {total}тг</p>
            </button>

            {isModalOpen && (
                <CheckModal toggleModal={toggleModal} />
            )}
        </div>
    );

}

export default ConfirmOrderButton;
