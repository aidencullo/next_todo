import { useState, Dispatch, SetStateAction, useEffect } from "react";

export default function useEggs(): { eggs: string[], setEggs: Dispatch<SetStateAction<string[]>>, loading: boolean, error: string | null } {
    const [eggs, setEggs] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchEggs = async () => {
        try {
            const res = await fetch('/api/eggs');
            const data = await res.json();
            setEggs(data);
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        fetch('/api/eggs')
            .then(res => res.json())
            .then(data => setEggs(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { eggs, setEggs, loading, error };
}
