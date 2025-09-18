"use client";

import { useState } from "react";
import EggList from './EggList';
import useEggs from './useEggs';

export default function EggManager() {
  const [eggs] = useEggs();
  return (
    <div>
      {eggs.map((egg, index) => (
        <li key={index}>{egg}</li>
      ))}
    </div>
  );
}