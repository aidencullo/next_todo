import { useState, useEffect } from "react";

type functionT = () => Promise<void>;

export default function useEggs(): [string[], functionT, functionT, boolean, string | null] {
    const [eggs, setEggs] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchEggs = async () => {
        try {
            setLoading(true);
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

    const addEgg = async () => {
        const egg = 'client egg';
        try {
            setLoading(true);
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
            fetchEggs();
        }
    }

    const deleteEggs = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/eggs', {
                method: 'DELETE',
            });
            if (!res.ok) {
                throw new Error('Failed to delete eggs');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
            fetchEggs();
        }
    }

    useEffect(() => {
        fetchEggs();
    }, []);

    return [eggs, addEgg, deleteEggs, loading, error]
}
