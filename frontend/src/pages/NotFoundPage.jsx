import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="panel" data-testid="not-found" style={{textAlign: "center", padding: "60px"}}>
      <h2 style={{fontSize: "4rem", color: "var(--accent)", marginBottom: "10px"}}>404</h2>
      <h3>Pagina nu există</h3>
      <p className="info" style={{padding: "10px"}}>Adresa cerută nu duce nicăieri.</p>
      <Link to="/" style={{display: "inline-block", marginTop: "20px", padding: "12px 24px", background: "var(--accent)", color: "white", textDecoration: "none", borderRadius: "12px", fontWeight: "600"}}>Înapoi la bibliotecă</Link>
    </section>
  );
}