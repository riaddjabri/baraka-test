import { useEffect, useState } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const userAgent = navigator.userAgent ;
            setIsMobile(/android|iphone|ipad|ipod/i.test(userAgent.toLowerCase()));
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return isMobile;
};

export default useIsMobile;