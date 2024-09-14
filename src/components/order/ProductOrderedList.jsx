import useProductStore from '@/store/useProductStore';
import React from 'react';

const ProductOrderedList = () => {

    const { products } = useProductStore();

    return (
        <div className="mb-4">
            {products.length > 0 ? (
                products
                .filter((product) => product.quantity > 0) // Filter products with quantity > 0
                .map((product) => (
                    <div key={product.id} className="mb-2 p-4 rounded-lg border shadow-sm">
                    <p className="text-lg font-semibold">{product.name}</p>
                    <p>Количество: {product.quantity}</p>
                    <p>Цена: {product.price}тг</p>
                    </div>
                ))
            ) : (
                <p>Нет товаров</p>
            )}
        </div>
    );
}

export default ProductOrderedList;
