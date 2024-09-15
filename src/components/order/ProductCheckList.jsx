import useProductStore from '@/store/useProductStore';
import '../../styles/tailwind.css';
import React from 'react';

const ProductCheckList = () => {
    const { products, total } = useProductStore();

    return (
        <div className="mb-4">
            {products.length > 0 ? (
                products
                .filter((product) => product.quantity > 0) // Filter products with quantity > 0
                .map((product) => (
                    <div 
                        key={product.id} 
                        className={`mb-2 p-4 flex justify-between items-center`} //  ${product.id !== 1 ? 'mt-6 border-t pt-4' : ''}
                    >
                        <div>
                            <p className="text-lg font-semibold">{product.name}</p>
                            <p>Цена: {product.price}тг</p>
                        </div>
                        <p className="text-lg font-semibold">x{product.quantity}</p>
                    </div>
                ))
            ) : (
                <p>Нет товаров</p>
            )}
        </div>
    );
}

export default ProductCheckList;
