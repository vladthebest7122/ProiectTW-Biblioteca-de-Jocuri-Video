import { useEffect, useState } from "react";
import JocList from "../components/JocList.jsx";
import JocForm from "../components/JocForm.jsx";
import { fetchJocuri, createJoc, updateJoc, deleteJoc } from "../api.js";
import styles from "./JocuriPage.module.css";

export default function JocuriPage() {
  const [jocuri, setJocuri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  async function handleAdd(joc) {
    const creat = await createJoc(joc);
    setJocuri((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const joc = jocuri.find((j) => j.id === id);
    try {
      const actualizat = await updateJoc(id, { terminat: !joc.terminat });
      setJocuri((prev) => prev.map((j) => (j.id === id ? actualizat : j)));
    } catch (err) { setError(err.message); }
  }

  async function handleDelete(id) {
    try {
      await deleteJoc(id);
      setJocuri((prev) => prev.filter((j) => j.id !== id));
    } catch (err) { setError(err.message); }
  }

  const neterminate = jocuri.filter((j) => !j.terminat).length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adaugă joc</h2>
        <JocForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>Jocurile mele</h2>
        <p className={styles.summary}>{jocuri.length} jocuri, dintre care {neterminate} neterminate</p>
        
        {loading && <p className="info" data-testid="loading">Se încarcă lista de jocuri...</p>}
        {error && <p className="error" data-testid="error">Nu am putut încărca datele: {error}</p>}
        {!loading && !error && (
          <JocList jocuri={jocuri} onToggle={handleToggle} onDelete={handleDelete} />
        )}
      </section>
    </div>
  );
}