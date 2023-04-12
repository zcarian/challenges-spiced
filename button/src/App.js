import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <div>
      <Button
        color="black"
        text="Hello"
        disabled={true}
        onClick={handleClick}
      />
      <br />
      <Button
        color="orange"
        text="Hello 2"
        disabled={false}
        onClick={handleClick}
      />
      <br />
      <Button
        color="blue"
        text="Hello 3"
        disabled={true}
        onClick={handleClick}
      />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
