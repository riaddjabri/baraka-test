import { useState, useCallback } from 'react';

interface Quote {
    quote: string;
    author: string;
}

interface UseMotivationQuoteResult {
    quote: Quote | null;
    error: string | null;
    loading: boolean;
    fetchNewQuote: () => Promise<void>;
}

const useMotivationQuote = (): UseMotivationQuoteResult => {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchNewQuote = useCallback(async () => {
        setLoading(true); // Ensure loading is set for new fetch
        try {
            const response = await fetch('https://quotes-api-self.vercel.app/quote');
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }
            const data = await response.json();
            setQuote(data);
            setError(null); // Reset error on success
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    }, []);

    return { quote, error, loading, fetchNewQuote };
};

export default useMotivationQuote;