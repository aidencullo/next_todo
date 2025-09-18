"use client";

import { useState } from "react";

export default function Home() {
  const addEgg = () => {
    setEggs([...eggs, 'egg']);
  }

  const removeEgg = () => {
    setEggs(eggs.slice(0, -1));
  }

  const [eggs, setEggs] = useState<string[]>([]);
  return (
    <div>
      <h1>goobye world</h1>
      <div className="flex flex-col gap-2">
        <button onClick={addEgg}>add egg</button>
        <button onClick={removeEgg}>remove egg</button>
      </div>
      <ul>
        {eggs.map((egg, index) => 
          <li key={index}>{egg}</li>
        )}
      </ul>
    </div>
  );
}