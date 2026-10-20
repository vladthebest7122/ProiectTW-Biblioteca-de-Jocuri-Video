const ETICHETE_PLATFORMA = { pc: "PC", playstation: "PlayStation", xbox: "Xbox", switch: "Switch" };

export default function JocCard({ joc }) {
  // Construim stilul pentru fundal.
  // linear-gradient întunecă imaginea cu un strat negru/albastru închis, semitransparent (70% - 90% opacitate).
  const cardStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url('${joc.imagine}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };

  return (
    <li className={joc.terminat ? "item-card done" : "item-card"} style={cardStyle}>
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