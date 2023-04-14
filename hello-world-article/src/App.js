import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>I am a heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero adipisci
        iste consequatur quam maiores vel fugiat cupiditate eos facere
      </p>
      <p>
        illo numquam repellat voluptates sequi ab repudiandae nostrum sunt,
        laborum laudantium.
      </p>
    </article>
  );
}
