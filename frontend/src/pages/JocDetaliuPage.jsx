import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchJoc } from "../api.js";
import { ETICHETE_PLATFORMA } from "../constants.js";
import styles from "./JocDetaliuPage.module.css";

export default function JocDetaliuPage() {
  const { id } = useParams();
  const [joc, setJoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchJoc(id)
      .then((data) => {
        if (!ignore) {
          setJoc(data);
          setError(null);
        }
      })
      .catch((err) => { if (!ignore) setError(err.message); })
      .finally(() => { if (!ignore) setLoading(false); });
    return () => { ignore = true; };
  }, [id]);

  if (loading) return <p className="info" data-testid="loading">Se încarcă...</p>;
  
  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">Jocul nu a putut fi încărcat: {error}</p>
        <Link to="/" className={styles.back}>Înapoi la bibliotecă</Link>
      </section>
    );
  }

  const bgStyle = {
    backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.5)), url('${joc.imagine}')`,
    backgroundSize: "cover", backgroundPosition: "center"
  };

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail" style={bgStyle}>
      <Link to="/" className={styles.back}>← Înapoi la bibliotecă</Link>
      <div className={styles.content}>
        <h2 className={joc.terminat ? styles.done : undefined} data-testid="detail-title">{joc.titlu}</h2>
        <div className={styles.meta}>
          <div>
            <span className={styles.label}>Platformă</span>
            <span className={`badge badge-${joc.platforma}`}>{ETICHETE_PLATFORMA[joc.platforma]}</span>
          </div>
          <div>
            <span className={styles.label}>Status</span>
            <span className={styles.val}>{joc.terminat ? "Terminat" : "Neterminat"}</span>
          </div>
          <div>
            <span className={styles.label}>Cod (ID)</span>
            <span className={styles.val}>#{joc.id}</span>
          </div>
        </div>
      </div>
    </section>
  );
}