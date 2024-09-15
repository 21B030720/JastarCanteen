import useProductStore from '@/store/useProductStore';
import React from 'react';
import QuantityPlusButton from './QuantityPlusButton';
import QuantityMinusButton from './QuantityMinusButton';

const Card = ({ product }) => {

  return (
    <div className="product-card border p-4 rounded-lg shadow-lg">
      {/* Display product name in a big font */}
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>

      {/* Price and quantity display */}
      <div className="mb-4">
        <span className="text-lg">Цена: {product.price}тг</span>
      </div>

      {/* Buttons to increase and decrease quantity */}
      <div className="flex items-center justify-between mt-4">
        <QuantityMinusButton id={product.id} />
        <span className="mx-4 text-xl">{product.quantity}</span>
        <QuantityPlusButton id={product.id} />
        
      </div>
    </div>
  );

};

export default Card;
