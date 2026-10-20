import JocCard from "./JocCard.jsx";

export default function JocList({ jocuri }) {
  // 1. dacă lista este goală:
  if (jocuri.length === 0) {
    return <p className="empty">Nu există niciun joc adăugat.</p>;
  }

  // 2. altfel: randăm lista
  return (
    <ul className="item-list">
      {jocuri.map((joc) => (
        <JocCard key={joc.id} joc={joc} />
      ))}
    </ul>
  );
}