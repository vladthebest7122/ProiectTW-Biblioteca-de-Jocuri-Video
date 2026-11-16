const ETICHETE_PLATFORMA = { pc: "PC", playstation: "PlayStation", xbox: "Xbox", switch: "Switch" };

export default function JocCard({ joc, onToggle, onDelete }) {
  const cardStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url('${joc.imagine}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };

  return (
    <li className={joc.terminat ? "item-card done" : "item-card"} style={cardStyle} data-testid="item" data-id={joc.id}>
      <div>
        <label className="task-main">
          <input type="checkbox" checked={joc.terminat} onChange={() => onToggle(joc.id)} data-testid="item-toggle" />
          <h3 data-testid="item-title">{joc.titlu}</h3>
        </label>
        <span className={`badge badge-${joc.platforma}`}>{ETICHETE_PLATFORMA[joc.platforma]}</span>
      </div>
      <div className="card-footer">
        <span className="status">{joc.terminat ? "Terminat" : "Neterminat"}</span>
        <button className="btn-danger" onClick={() => onDelete(joc.id)} aria-label={`Șterge ${joc.titlu}`} data-testid="item-delete">Șterge</button>
      </div>
    </li>
  );
}