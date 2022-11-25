import React, { useEffect, useState } from 'react';


//const scroll = () => {
function scroll() {
    const [scrollOffset, setScrollOffset] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.scrollY)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return scrollOffset
}
export default scroll