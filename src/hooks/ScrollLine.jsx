import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

const ScrollLine = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = debounce(() => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    }, 1); // Debounce with 10ms delay

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [onScroll]);

    return (
        <div className="fixed top-0 left-0 w-full h-1.5 z-50">
            <div
                className="h-1.5 bg-orange-600 transition-all duration-200 ease-out"
                style={{ width: `${scrollTop}%` }}
            ></div>
        </div>
    );
};

export default ScrollLine;
