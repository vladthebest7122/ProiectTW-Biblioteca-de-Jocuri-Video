// Un singur element din listă, primit prin props.
const ETICHETE_PLATFORMA = { pc: "PC", playstation: "PlayStation", xbox: "Xbox", switch: "Switch" };

export default function JocCard({ joc }) {
  return (
    <li className={joc.terminat ? "item-card done" : "item-card"}>
      <div>
        <h3>{joc.titlu}</h3>
        <span className={`badge badge-${joc.platforma}`}>
          {ETICHETE_PLATFORMA[joc.platforma]}
        </span>
      </div>
      <span className="status">{joc.terminat ? "Terminat" : "Neterminat"}</span>
    </li>
  );
}