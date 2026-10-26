import { useState } from "react";
import JocList from "./components/JocList.jsx";

// Datele de pornire, cu imaginile tale
const JOCURI_INITIALE = [
  { id: 1, titlu: "The Witcher 3", terminat: true, platforma: "pc", imagine: "/witcher3.jpg" },
  { id: 2, titlu: "God of War", terminat: false, platforma: "playstation", imagine: "/godofwar.jpg" },
  { id: 3, titlu: "Halo Infinite", terminat: false, platforma: "xbox", imagine: "/halo.jpg" }
];

// Verificăm tema sistemului
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [jocuri, setJocuri] = useState(JOCURI_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  // Funcție imutabilă pentru comutarea statusului
  function handleToggle(id) {
    setJocuri((prev) =>
      prev.map((j) => (j.id === id ? { ...j, terminat: !j.terminat } : j))
    );
  }

  // Funcție imutabilă pentru ștergere
  function handleDelete(id) {
    setJocuri((prev) => prev.filter((j) => j.id !== id));
  }

  // Comutarea temei
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  // Valoare derivată: numărăm jocurile neterminate la fiecare randare
  const neterminate = jocuri.filter((j) => !j.terminat).length;

  return (
    <>
      <header className="app-header">
        <button 
          className="theme-toggle" 
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        
        <h1>GameVault</h1>
        <p>Gestionează-ți colecția de jocuri video și progresul lor.</p>
        <p className="app-count">
          {jocuri.length} jocuri, dintre care {neterminate} neterminate
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Jocurile mele</h2>
          <JocList 
            jocuri={jocuri} 
            onToggle={handleToggle} 
            onDelete={handleDelete} 
          />
        </section>
      </main>
    </>
  );
}