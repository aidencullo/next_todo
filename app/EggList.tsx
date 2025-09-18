
import EggPresentation from './EggPresentation';
import useEggs from './useEggs';

export default function EggList() {
  const { eggs, setEggs, loading, error } = useEggs()

  if (loading) return <p>loading...</p>;
  if (error) return <p>error: {error}</p>;

//   return <EggPresentation eggs={eggs} />;
}   
