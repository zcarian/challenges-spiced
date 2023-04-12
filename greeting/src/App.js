import "./styles.css";

export default function App() {
  return <Greeting name="Marcin" />;
}

function Greeting({ name }) {
  return (
    <div>
      <h1>Hello, {name}</h1>;
    </div>
  );
}
