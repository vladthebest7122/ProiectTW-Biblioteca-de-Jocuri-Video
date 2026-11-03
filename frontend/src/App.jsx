import { useState, useEffect } from "react";
import JocList from "./components/JocList.jsx";
import { fetchJocuri } from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  // State-urile componentei: 
  const [jocuri, setJocuri] = useState([]); // pleacă goală
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  // Descărcarea datelor la deschiderea paginii
  useEffect(() => {
    let ignore = false;
    
    async function load() {
      try {
        const data = await fetchJocuri();
        if (!ignore) setJocuri(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    
    load();
    return () => { ignore = true; };
  }, []);

  function handleToggle(id) {
    setJocuri((prev) =>
      prev.map((j) => (j.id === id ? { ...j, terminat: !j.terminat } : j))
    );
  }

  function handleDelete(id) {
    setJocuri((prev) => prev.filter((j) => j.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

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
          
          {loading && <p className="info">Se încarcă lista de jocuri...</p>}
          
          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}
          
          {!loading && !error && (
            <JocList 
              jocuri={jocuri} 
              onToggle={handleToggle} 
              onDelete={handleDelete} 
            />
          )}
        </section>
      </main>
    </>
  );
}