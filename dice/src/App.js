import { D6Button } from "./components/D6Button";
import { getD6Roll } from "./utils";
import useLocalStorageState from "use-local-storage-state";
import History from "./components/History";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };
  const currentRollValue = rolls[0]?.value;
  return (
    <div className="app">
      <main className="app__main">
        <D6Button onRoll={handleRoll} value={currentRollValue} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
