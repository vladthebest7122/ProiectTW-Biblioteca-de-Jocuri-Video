const jocuri = [
  { id: 1, titlu: "The Witcher 3", terminat: true, platforma: "pc" },
  { id: 2, titlu: "God of War", terminat: false, platforma: "playstation" },
  { id: 3, titlu: "Halo Infinite", terminat: false, platforma: "xbox" }
];

export default function App() {
  const neterminate = jocuri.filter((j) => !j.terminat).length;

  return (
    <>
      <header className="app-header">
        <h1>GameVault</h1>
        <p>Gestionează-ți colecția de jocuri video și progresul lor.</p>
        <p className="app-count">
          {jocuri.length} jocuri, dintre care {neterminate} neterminate
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Jocurile mele</h2>
          {/* Temporar: date brute; componentele apar in Etapa 4 */}
          <pre>{JSON.stringify(jocuri, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}