"use client";

import { useState } from "react";
import EggList from './EggList';

export default function EggManager() {
  const addEgg = () => {
    setEggs([...eggs, 'egg']);
  }

  const removeEgg = () => {
    setEggs(eggs.slice(0, -1));
  }

  const [eggs, setEggs] = useState<string[]>([]);
  
  return (
    <div>
      <div className="flex flex-col gap-2">
        <button onClick={addEgg}>add egg</button>
        <button onClick={removeEgg}>remove egg</button>
      </div>
      <EggList />
    </div>
  );
}
