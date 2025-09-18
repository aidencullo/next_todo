import { useState, Dispatch, SetStateAction, useEffect } from "react";

export default function useEggs(): { eggs: string[], setEggs: Dispatch<SetStateAction<string[]>>, loading: boolean } {
    const [eggs, setEggs] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('/api/eggs')
            .then(res => res.json())
            .then(data => setEggs(data))
            .catch(err => setEggs([]))
            .finally(() => setLoading(false));
    }, []);

    return { eggs, setEggs, loading };
}
