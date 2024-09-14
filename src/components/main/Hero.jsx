import React from 'react';
import '../../styles/tailwind.css';
import Link from 'next/link';

const Hero = () => {

    return (
        <div className="w-[100%] h-[400px] bg-[radial-gradient(circle,_#4facfe,_#00f2fe)] flex items-center justify-center">
            <p className="text-base sm:text-2lg md:text-2xl lg:text-4xl xl:text-6xl text-white text-center px-2 sm:px-8 md:px-12" >
                Jastar
            </p>
            <Link href="/update">
            <button>Изменить</button>
            </Link>
        </div>
    );
    
}

export default Hero;
