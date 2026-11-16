import { Link } from "react-router-dom";
import { ETICHETE_PLATFORMA } from "../constants.js";
import styles from "./JocCard.module.css";

export default function JocCard({ joc, onToggle, onDelete }) {
  const cardStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url('${joc.imagine}')`,
    backgroundSize: "cover", backgroundPosition: "center"
  };

  return (
    <li className={joc.terminat ? `${styles.card} ${styles.done}` : styles.card} style={cardStyle} data-testid="item" data-id={joc.id}>
      <div>
        <div className={styles.main}>
          <input type="checkbox" checked={joc.terminat} onChange={() => onToggle(joc.id)} data-testid="item-toggle" aria-label={`Marchează ${joc.titlu}`} />
          <Link to={`/jocuri/${joc.id}`} className={styles.title} data-testid="item-link">
            {joc.titlu}
          </Link>
        </div>
        <span className={`badge badge-${joc.platforma}`}>{ETICHETE_PLATFORMA[joc.platforma]}</span>
      </div>
      
      <div className={styles.footer}>
        <span className={styles.status}>{joc.terminat ? "Terminat" : "Neterminat"}</span>
        <button className={styles.btnDanger} onClick={() => onDelete(joc.id)} aria-label={`Șterge ${joc.titlu}`} data-testid="item-delete">Șterge</button>
      </div>
    </li>
  );
}