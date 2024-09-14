import useProductStore from '@/store/useProductStore';
import convertKeys from '@/tools/update/convertKeys';
import React from 'react';
import * as XLSX from 'xlsx';

const UseExcelToProduct = () => {

    const { setProducts } = useProductStore();
    
    const handleFileIntoProducts = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
      
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
      
          // Assuming the first sheet contains the products
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet);
      
          // Convert each product's keys and add 'quantity: 0' and a unique 'key'
          const convertedProducts = jsonData.map((product, index) => ({
            ...convertKeys(product),
            quantity: 0,        // Add quantity 0 to each product
            id: index,  // Add a unique key based on the index
          }));
    
          // Update the product state with the converted data
          setProducts(convertedProducts);
        };
      
        reader.readAsArrayBuffer(file);
    };

    return { handleFileIntoProducts }

}

export default UseExcelToProduct;
