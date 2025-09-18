interface EggPresentationProps {
  eggs: string[];
}

export default function EggPresentation({ eggs }: EggPresentationProps) {
  if (eggs.length === 0) return <p>no eggs here</p>;

  return (
    <ul>
      {eggs.map((egg, i) => <li key={i}>{egg}</li>)}
    </ul>
  );
}
