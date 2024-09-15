import useProductStore from '@/store/useProductStore';
import React from 'react';

const QuantityMinusButton = ({ id }) => {

    const { decrease } = useProductStore();

    return (
        <button
          onClick={() => decrease(id)}
          className="bg-red-500 text-white px-7 py-4 rounded-full flex items-center justify-center text-2xl shadow-md"
        >
          -
        </button>
    );
}

export default QuantityMinusButton;
