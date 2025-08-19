import { useState } from "react";

export default function Exercise() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h2>use-state-basico</h2>
      <button onClick={() => setCount(c => c + 1)}>Clicks: {count}</button>
    </section>
  );
}
