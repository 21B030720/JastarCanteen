import { useEffect } from 'react';
import useProductStore from '@/store/useProductStore';

const RootProvider = ({ children }) => {
    const { setProducts } = useProductStore();

    useEffect(() => {
        // Ensure this runs only on the client side
        if (typeof window !== 'undefined') {
            const storedProducts = localStorage.getItem('products');
            if (storedProducts) {
                setProducts(JSON.parse(storedProducts));
            }
        }
    }, [setProducts]);

    return <>{children}</>;
};

export default RootProvider;
