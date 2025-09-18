import { useState, Dispatch, SetStateAction, useEffect } from "react";

export default function useEggs(): [string[]] {
    const [eggs, setEggs] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchEggs = async () => {
        try {
            const res = await fetch('/api/eggs');
            if (!res.ok) {
                throw new Error('Failed to fetch eggs');
            }
            const data = await res.json();
            setEggs(data);
            console.log(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    }

    const addEgg = async () => {
        const egg = 'egg';
        try {
            const res = await fetch('/api/eggs', {
                method: 'POST',
                body: JSON.stringify({ egg }),
            });
            if (!res.ok) {
                throw new Error('Failed to add egg');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchEggs();
    }, []);

    return [eggs]
}
