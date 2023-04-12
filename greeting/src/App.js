import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Marcin" />
      <Greeting name="Marcel" />
      <Greeting name="Alex" />
      <Greeting name="Gimena" />
      <Greeting name="Hola" />
    </div>
  );
}

function Greeting({ name }) {
  const coaches = ["Gimena", "Klaus", "Marcel"];
  return (
    <div>
      <h1>
        Hello, {coaches.some((element) => element === name) ? "Coach" : name}!
      </h1>
    </div>
  );
}
