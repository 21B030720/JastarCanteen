import useProductStore from '@/store/useProductStore';
import React from 'react';

const QuantityPlusButton = ({ id }) => {

    const { increase } = useProductStore();

    return (
        <button
          onClick={() => increase(id)}
          className="bg-green-500 text-white px-10 py-8 rounded-full flex items-center justify-center text-2xl shadow-md"
        >
          +
        </button>
    );

}

export default QuantityPlusButton;
