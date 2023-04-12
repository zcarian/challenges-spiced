import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={6} valueB={4} />;
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {sum}
    </h1>
  );
}
