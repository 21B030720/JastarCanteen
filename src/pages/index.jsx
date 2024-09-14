

import Catalogue from '@/components/main/Catalogue';
import Hero from '@/components/main/Hero';
import Navigation from '@/components/main/Navigation';
import OrderButton from '@/components/main/OrderButton';
import Searcher from '@/components/main/Searcher';
import useInitializeStore from '@/hooks/useInitialStore';
import useProductStore from '@/store/useProductStore';
import React, { useEffect } from 'react';


const Index = () => {

    useInitializeStore();

    return (
        <div>
            <Hero />
            <Searcher />
            <Navigation />
            <Catalogue />
            <OrderButton />
        </div>
    );
}

export default Index;
