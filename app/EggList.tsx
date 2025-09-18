'use client';

import { useState, useEffect } from 'react';

export default function EggList() {
  const [eggs, setEggs] = useState([]);

  useEffect(() => {
    fetch('/api/eggs')
      .then(res => res.json())
      .then(data => setEggs(data))
      .catch(err => setEggs([]));
  }, []);


  if (eggs.length === 0) return <p>no eggs here</p>;

  return (
    <ul>
      {eggs.map((egg, i) => <li key={i}>{egg}</li>)}
    </ul>
  );
}
