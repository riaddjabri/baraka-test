import React, {useEffect} from 'react';
import useMotivationQuote from '../hooks/useMotivationQuote';

interface MotivationQuoteProps {
    color?: string
}

const MotivationQuote: React.FC<MotivationQuoteProps> = ({ color = 'black' }) => {
    const {quote, error, loading, fetchNewQuote} = useMotivationQuote();

    useEffect(() => {
        fetchNewQuote().then(r => r);
    }, [fetchNewQuote]);

    if (loading) {
        return <p role="status" aria-live="polite">Loading...</p>;
    }

    if (error) {
        return <p role="alert">Error: {error}</p>;
    }

    return (
        <div className={`text-center m-5 text-${color}`} role="region" aria-labelledby="quote-text">
            <blockquote id="quote-text" className={`italic text-2xl`}>
                "{quote?.quote}"
            </blockquote>
            <p style={{fontWeight: 'bold', marginTop: '10px'}}>- {quote?.author}</p>
        </div>
    );
};

export default MotivationQuote;