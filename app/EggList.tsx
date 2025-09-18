interface EggListProps {
  eggs: string[];
}

export default function EggList({ eggs }: EggListProps) {

    if (eggs.length === 0) {
        return <div>No eggs found</div>;
    }

  return (
    <>
      {eggs.map((egg, index) => (
        <li key={index} className="text-lg">{egg}</li>
      ))}
    </>
  );
}
