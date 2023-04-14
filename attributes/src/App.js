import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">This is an Article</h2>
      <label htmlFor="color">What is your favourite color</label>
      <input id="color" type="color" name="color" />
      <br />
      <br />
      <br />
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        className="article__link"
      >
        Click me for free bitcoin
      </a>
    </article>
  );
}
