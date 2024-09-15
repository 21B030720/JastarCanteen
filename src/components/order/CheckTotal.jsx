import useProductStore from '@/store/useProductStore';
import '../../styles/tailwind.css';
import React from 'react';

const CheckTotal = () => {

    const { total } = useProductStore();

    return (
        <div>
            <div className="flex justify-between mt-6 border-t pt-4">
                <p className="text-lg font-semibold">Итого:</p>
                <p className="text-lg font-semibold">{total}тг</p>
            </div>
        </div>
    );
}

export default CheckTotal;
