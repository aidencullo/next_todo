"use client";

import useEggs from './useEggs';

export default function EggManager() {
  const [eggs, addEgg] = useEggs();
  return (
    <div>
    <button onClick={addEgg}>add egg</button>
    {eggs.map((egg, index) => (
      <li key={index}>{egg}</li>
    ))}
    </div>
  );
}