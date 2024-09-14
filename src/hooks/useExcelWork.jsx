import useProductStore from '@/store/useProductStore';
import React from 'react';
import * as XLSX from 'xlsx';
import UseExcelToProduct from './useExcelToProduct';
import useSaveExcel from './useSaveExcel';

const useExcelWork = () => {
    
    // Function to handle file upload
    const { handleFileIntoProducts } = UseExcelToProduct();

    // Function to handle file save
    const { handleSaveProducts } = useSaveExcel();

    return { handleFileIntoProducts, handleSaveProducts };

};

export default useExcelWork;
