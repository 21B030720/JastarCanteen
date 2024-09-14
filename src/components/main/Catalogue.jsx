import React from 'react';
import Card from './Card';
import useProductData from '@/hooks/useProductData';
import useProductStore from '@/store/useProductStore';
import '../../styles/tailwind.css';

const Catalogue = () => {

  // const { products, loading, error } = useProductData();
  const { products } = useProductStore();

  return (
    <div className="catalogue grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mb-[200px]">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Catalogue;
