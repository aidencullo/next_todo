import { useState, Dispatch, SetStateAction, useEffect } from "react";

export default function useEggs(): { eggs: string[], setEggs: Dispatch<SetStateAction<string[]>>, loading: boolean, error: string | null } {
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
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchEggs();
    }, []);

    return { eggs, setEggs, loading, error };
}
