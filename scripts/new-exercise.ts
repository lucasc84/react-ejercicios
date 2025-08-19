import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const slug = process.argv[2];
if (!slug) {
  console.error("Uso: npm run new:ex 01-use-state-basico");
  process.exit(1);
}

const dir = join(process.cwd(), "src", "exercises", slug);
if (existsSync(dir)) {
  console.error("Ya existe:", dir);
  process.exit(1);
}
mkdirSync(dir, { recursive: true });

const file = join(dir, "Exercise.tsx");
const tpl = `import { useState } from "react";

export default function Exercise() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h2>${slug.replace(/^\d+-/, "")}</h2>
      <button onClick={() => setCount(c => c + 1)}>Clicks: {count}</button>
    </section>
  );
}
`;
writeFileSync(file, tpl, "utf8");
console.log("Creado:", file);

