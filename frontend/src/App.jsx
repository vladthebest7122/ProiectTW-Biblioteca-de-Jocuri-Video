import { useEffect, useState } from "react";
import JocList from "./components/JocList.jsx";
import JocForm from "./components/JocForm.jsx";
import { fetchJocuri, createJoc, updateJoc, deleteJoc } from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [jocuri, setJocuri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

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

  // Adăugarea direct în server
  async function handleAdd(joc) {
    const creat = await createJoc(joc);
    setJocuri((prev) => [...prev, creat]);
  }

  // Modificare (Bifare) pe server
  async function handleToggle(id) {
    const joc = jocuri.find((j) => j.id === id);
    try {
      const actualizat = await updateJoc(id, { terminat: !joc.terminat });
      setJocuri((prev) => prev.map((j) => (j.id === id ? actualizat : j)));
    } catch (err) {
      setError(err.message);
    }
  }

  // Ștergere de pe server
  async function handleDelete(id) {
    try {
      await deleteJoc(id);
      setJocuri((prev) => prev.filter((j) => j.id !== id));
    } catch (err) {
      setError(err.message);
    }
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
        <button className="theme-toggle" onClick={handleTema} aria-pressed={tema === "dark"}>
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
          <h2>Adaugă joc</h2>
          <JocForm onAdd={handleAdd} />
        </section>

        <section className="panel">
          <h2>Jocurile mele</h2>
          
          {loading && <p className="info" data-testid="loading">Se încarcă...</p>}
          
          {error && <p className="error" data-testid="error">{error}</p>}
          
          {!loading && (
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