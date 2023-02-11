import { useEffect, useState } from 'react';

export const useMobile = () => {
    const isBrowser = typeof window !== 'undefined';

    const [windowWidth, setWindowWidth] = useState<number>(isBrowser ? window.innerWidth : 0);

    const handleResize = () => {
        const currentWidth = isBrowser ? window.innerWidth : 0;

        setWindowWidth(currentWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        isMobile: windowWidth <= 768 ? true : false,
        isSmallMobile: windowWidth <= 576 ? true : false,
    };
};
