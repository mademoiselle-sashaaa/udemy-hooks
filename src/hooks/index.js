import { useEffect, useState } from 'react';

export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(url);
            const result = await data.json();

            setResult(result);
        }

        fetchData();
    }, []);

    return result;
};

export const useDynamicTransition = ({ increment, delay, length }) => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() =>
            setIndex(stroredIndex => (stroredIndex + increment) % length
            ), delay);

        return () => clearInterval(interval);
    }, [delay, increment]);

    return index;
};
