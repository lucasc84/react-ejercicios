// src/exercises/02-mi-ejercicio/Exercise.tsx
import { useState } from "react";

export default function Exercise() {
  const [text, setText] = useState("");

  return (
    <section>
      <h2>02 – Mi Ejercicio</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe algo..."
      />
      <p>Tu texto: {text}</p>
    </section>
  );
}

