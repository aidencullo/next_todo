interface EggListProps {
  eggs: string[];
}

export default function EggList({ eggs }: EggListProps) {
  return (
    <>
      {eggs.map((egg, index) => (
        <li key={index} className="text-lg">{egg}</li>
      ))}
    </>
  );
}
