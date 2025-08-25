import { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";

// Autodescubrimiento de ejercicios: src/exercises/**/Exercise.tsx y Exercise.jsx
const modules = import.meta.glob("./exercises/**/Exercise.{tsx,jsx}");

const routes = Object.entries(modules).map(([path, loader]) => {
  const match = path.match(/exercises\/([^/]+)\/Exercise\.(tsx|jsx)$/);
  const slug = match?.[1] ?? "ejercicio";
  const Component = lazy(loader as any);
  return { slug, Component };
});

export default function App() {
  return (
    <div className="app" style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>React — Ejercicios</h1>
      <p>Elegí un ejercicio del listado o creá uno nuevo.</p>

      <nav>
        <ul>
          {routes
            .sort((a, b) => a.slug.localeCompare(b.slug, "es", { numeric: true }))
            .map(({ slug }) => (
              <li key={slug}>
                <Link to={`/e/${slug}`}>{slug}</Link>
              </li>
            ))}
        </ul>
      </nav>

      <Suspense fallback={<p>Cargando…</p>}>
        <Routes>
          <Route path="/" element={<p>Inicio</p>} />
          {routes.map(({ slug, Component }) => (
            <Route key={slug} path={`/e/${slug}`} element={<Component />} />
          ))}
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </Suspense>
    </div>
  );
}

