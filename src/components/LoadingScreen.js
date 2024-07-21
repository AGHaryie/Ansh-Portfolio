// LoadingScreen.js
import React, { useState, useEffect } from 'react';
import Loading from './Loader'; // Import the Loading component

const LoadingScreen = ({ children, delay = 3000 }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set up a timer to turn off the loading state after the specified delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, delay);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <>
            {loading ? <Loading /> : children}
        </>
    );
};

export default LoadingScreen;
