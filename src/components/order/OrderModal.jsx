import useProductStore from '@/store/useProductStore';
import '../../styles/tailwind.css';
import React from 'react';
import ProductOrderedList from './ProductOrderedList';
import ConfirmOrderButton from './ConfirmOrderButton';

const OrderModal = ({ toggleModal }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Заказать</h2>

            <ProductOrderedList />
            
            <div className="flex justify-between items-center mt-6">
            <button
                onClick={toggleModal}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
                Закрыть
            </button>

            <ConfirmOrderButton />
            </div>
          </div>
        </div>
    );
}

export default OrderModal;
