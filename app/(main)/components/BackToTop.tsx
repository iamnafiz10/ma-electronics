'use client';

import {useEffect, useState} from 'react';
import {FaArrowUp} from 'react-icons/fa';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-20 right-6 z-50 cursor-pointer flex items-center justify-center 
        w-10 h-10 rounded bg-primary border hover:text-primary border-primary hover:bg-transparent text-white shadow-lg
        transition-all duration-300
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}
      `}
            aria-label="Back to top"
        >
            <FaArrowUp className="text-lg"/>
        </button>
    );
}