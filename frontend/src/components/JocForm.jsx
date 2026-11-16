import { useState } from "react";
import { PLATFORME } from "../constants.js";
import styles from "./JocForm.module.css";

const TITLU_MAX = 100;

export default function JocForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [platforma, setPlatforma] = useState("pc");
  const [imagine, setImagine] = useState("");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Titlul este obligatoriu.";
    if (t.length > TITLU_MAX) return `Titlul are maximum ${TITLU_MAX} caractere.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);

    try {
      const imagineFinala = imagine.trim() === "" ? "/default-game.jpg" : imagine.trim();
      
      await onAdd({ 
        titlu: titlu.trim(), 
        platforma, 
        terminat: false, 
        imagine: imagineFinala 
      });
      
      setTitlu("");
      setPlatforma("pc");
      setImagine("");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Titlul jocului
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Cyberpunk 2077"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Platformă
        <select
          value={platforma}
          onChange={(e) => setPlatforma(e.target.value)}
          data-testid="form-platforma"
        >
          {PLATFORME.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </label>
      
      <label>
        Imagine (Nume fișier)
        <input
          type="text"
          value={imagine}
          onChange={(e) => setImagine(e.target.value)}
          placeholder="Ex: /hades.jpg (Lasă gol pt. implicit)"
        />
      </label>

      {eroare && <p className="error" data-testid="form-error">{eroare}</p>}

      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă jocul"}
      </button>
    </form>
  );
}