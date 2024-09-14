import { useEffect } from 'react';
import useProductStore from '@/store/useProductStore';

const useInitializeStore = () => {

    const { setProducts } = useProductStore();

    useEffect(() => {
        // Ensure this runs only on the client side
        if (typeof window !== 'undefined') {
            const storedProducts = localStorage.getItem('products');
            console.log(storedProducts)
            if (storedProducts) {
                setProducts(JSON.parse(storedProducts));
            }
        }
    }, []);

};

export default useInitializeStore;
