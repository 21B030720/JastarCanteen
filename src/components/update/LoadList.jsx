import useProductStore from '@/store/useProductStore';
import React from 'react';

const LoadList = () => {

    const { products } = useProductStore();

    return (
        <div>
            {/* Display uploaded products */}
            {products.length > 0 && (
                <div>
                <h2>Loaded Products</h2>
                <ul>
                    {products.map((product, index) => (
                    <li key={index}>{product['name']} - {product['price']}тг</li>
                    ))}
                </ul>
                </div>
            )}
        </div>
    );

}

export default LoadList;
