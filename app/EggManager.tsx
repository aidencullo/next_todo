"use client";

import useEggs from './useEggs';
import EggList from './EggList';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';

export default function EggManager() {
  const [eggs, addEgg, deleteEggs, loading, error] = useEggs();
  if (loading) {
    return <LoadingState />;
  }
  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <div className="flex flex-col gap-2">
    <button onClick={addEgg} className="bg-blue-500 text-white p-2 rounded-md">add egg</button>
    <button onClick={deleteEggs} className="bg-red-500 text-white p-2 rounded-md">delete eggs</button>
    <EggList eggs={eggs} />
    </div>
  );
}