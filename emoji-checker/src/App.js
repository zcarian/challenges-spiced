import { useState } from "react";
import React from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("?");

  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    code === "?" ? setCode(emoji) : setCode(code + emoji);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={() => handleClick("🐡")}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={() => handleClick("🐋")}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={() => handleClick("🐠")}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={() => setCode("")}>
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
