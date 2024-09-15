import useProductStore from '@/store/useProductStore';
import React from 'react';
import '../../styles/tailwind.css';
import MediumTitleText from '../common/MediumTitleText';
import LittleText from '../common/LittleText';

const LoadList = () => {

    const { products } = useProductStore();

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            {products.length > 0 ? (
                <div>
                    <LittleText>Загруженные данные</LittleText>
                    <ul className="space-y-4">
                        {products.map((product, index) => (
                            <li key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                                <span className="text-lg font-medium text-gray-800">{product['name']}</span>
                                <span className="text-lg font-semibold text-gray-600">{product['price']}тг</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="text-center text-gray-500">Нет загруженных данных</p>
            )}
        </div>
    );
}

export default LoadList;
