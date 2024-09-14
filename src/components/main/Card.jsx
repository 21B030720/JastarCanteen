import useProductStore from '@/store/useProductStore';
import React from 'react';

const Card = ({ product }) => {
  const { increase, decrease } = useProductStore();

  return (
    <div className="product-card border p-4 rounded-lg">
      {/* Display product name in a big font */}
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>

      {/* Price and quantity display */}
      <div className="mb-4">
        <span className="text-lg">Цена: {product.price}тг</span>
      </div>

      {/* Buttons to increase and decrease quantity */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => decrease(product.id)}
          className="bg-red-500 text-white px-5 py-3 rounded-lg text-xl"
        >
          -
        </button>

        <span className="mx-4 text-xl">{product.quantity}</span>

        <button
          onClick={() => increase(product.id)}
          className="bg-green-500 text-white px-10 py-7 rounded-lg text-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
