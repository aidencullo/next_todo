import { useState, useEffect } from 'react';
import EggPresentation from './EggPresentation';

export default function EggList() {
  const [eggs, setEggs] = useState([]);

  useEffect(() => {
    fetch('/api/eggs')
      .then(res => res.json())
      .then(data => setEggs(data))
      .catch(err => setEggs([]));
  }, []);

  return <EggPresentation eggs={eggs} />;
}
