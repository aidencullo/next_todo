
import EggPresentation from './EggPresentation';
import useEggs from './useEggs';

export default function EggList() {
  const { eggs, setEggs, loading } = useEggs()

  if (loading) return <p>loading...</p>;

  return <EggPresentation eggs={eggs} />;
}
