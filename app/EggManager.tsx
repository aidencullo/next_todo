"use client";

import useEggs from './useEggs';

export default function EggManager() {
  const [eggs, addEgg, deleteEggs] = useEggs();
  return (
    <div className="flex flex-col gap-2">
    <button onClick={addEgg} className="bg-blue-500 text-white p-2 rounded-md">add egg</button>
    <button onClick={deleteEggs} className="bg-red-500 text-white p-2 rounded-md">delete eggs</button>
    {eggs.map((egg, index) => (
      <li key={index} className="text-lg">{egg}</li>
    ))}
    </div>
  );
}