'use client';

import { useEffect, useState } from 'react';

const useWindowSize = () => {
    const defaultSize: { width: any; height: any } = {
        width: undefined,
        height: undefined,
    };
    const [windowSize, setWindowSize] = useState(defaultSize);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        //Set initial window size
        handleResize();
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export default useWindowSize;
