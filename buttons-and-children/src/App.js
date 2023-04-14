import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>I am a Button!</Button>
      <Button>Me too!</Button>
      <Button>So am I</Button>
      <Button>Thera are 4 of us!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
