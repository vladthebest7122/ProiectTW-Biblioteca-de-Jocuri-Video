// 1. Datele de test și valorile permise
const jocuri = [
  { id: 1, titlu: "The Witcher 3", terminat: true, platforma: "pc" },
  { id: 2, titlu: "God of War", terminat: false, platforma: "playstation" },
  { id: 3, titlu: "Halo Infinite", terminat: false, platforma: "xbox" }
];

const PLATFORME = ["pc", "playstation", "xbox", "switch"];

// 2. Funcții de listare și numărare
function listeazaTitluri(lista) {
  return lista.map((j) => j.titlu);
}

function numaraNeterminate(lista) {
  return lista.filter((j) => !j.terminat).length;
}

// 3. Funcția de căutare
function cautaDupaTitlu(lista, text) {
  return lista.filter((j) => j.titlu.toLowerCase().includes(text.toLowerCase()));
}

// 4. Funcția de calculare a următorului ID
function nextId(lista) {
  return lista.reduce((max, j) => Math.max(max, j.id), 0) + 1;
}

// 5. Funcția de adăugare cu validare
function adaugaJoc(lista, titlu, platforma = "pc") {
  const titluCurat = titlu.trim();
  
  // Validări
  if (!titluCurat) {
    console.log("Titlul nu poate fi gol.");
    return lista;
  }
  if (!PLATFORME.includes(platforma)) {
    console.log(`Platformă invalidă: ${platforma}`);
    return lista;
  }
  
  // Crearea obiectului nou
  const jocNou = {
    id: nextId(lista),
    titlu: titluCurat,
    terminat: false,
    platforma: platforma
  };
  
  // Întoarce o listă nouă (imutabilitate)
  return [...lista, jocNou];
}

// 6. Funcții de modificare și ștergere
function comutaTerminat(lista, id) {
  return lista.map((j) => 
    j.id === id ? { ...j, terminat: !j.terminat } : j
  );
}

function stergeJoc(lista, id) {
  return lista.filter((j) => j.id !== id);
}

// ==========================================
// TESTELE PENTRU CONSOLĂ
// ==========================================

console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(jocuri).join(", "));
console.log("Neterminate:", numaraNeterminate(jocuri));
console.log("Căutare 'war':", listeazaTitluri(cautaDupaTitlu(jocuri, "war")).join(", "));

console.log("--- Adăugare ---");
let lista = adaugaJoc(jocuri, "Cyberpunk 2077", "pc");
console.log("Lista nouă:", lista.length, "jocuri");
console.log("Originalul a rămas cu:", jocuri.length, "jocuri");

console.log("--- Modificare și ștergere ---");
lista = comutaTerminat(lista, 2); // terminăm God of War
console.log("După terminarea id 2, neterminate:", numaraNeterminate(lista));
lista = stergeJoc(lista, 3); // ștergem Halo Infinite
console.log("După ștergerea id 3:", listeazaTitluri(lista).join(", "));

console.log("--- Validare ---");
adaugaJoc(lista, "   ", "pc");
adaugaJoc(lista, "Super Mario", "nintendo");