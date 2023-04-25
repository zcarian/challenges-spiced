import Link from "../components/Link";
import { useLightsStore } from "../stores/lights";

export default function HomePage() {
  const turnOnAmount = useLightsStore((state) => state.turnOnAmount());
  console.log(turnOnAmount);
  return (
    <div>
      <h1>Home</h1>
      <p>{turnOnAmount} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
