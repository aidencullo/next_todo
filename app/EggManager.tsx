"use client";

import { useState } from "react";
import EggList from './EggList';
import useEggs from './useEggs';

export default function EggManager() {
  const [eggs] = useEggs();

  return (
    <div>
      {/* <div className="flex flex-col gap-2">
        <button onClick={addEgg}>add egg</button>
        <button onClick={removeEgg}>remove egg</button>
      </div> */}
{eggs.map((egg, index) => (
  <li key={index}>{egg}</li>
))}
    </div>
  );
}
