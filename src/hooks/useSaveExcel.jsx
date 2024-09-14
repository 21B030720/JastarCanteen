import useProductStore from '@/store/useProductStore';
import React from 'react';

const useSaveExcel = () => {
    
    const { products } = useProductStore();

    const handleSaveProducts = async () => {
        localStorage.setItem('products', JSON.stringify(products));
    }

    return { handleSaveProducts }
}

export default useSaveExcel;
