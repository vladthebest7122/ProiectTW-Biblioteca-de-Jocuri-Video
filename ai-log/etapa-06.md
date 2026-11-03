# Etapa 6: Jurnal AI

## Instrumente folosite
- Gemini

## Conversații
Link conversație: https://share.gemini.google/hDCllQD1LcIZ

## Solicitări principale
### 1. Conectare API
- **Întrebat:** "Fa acelasi lucru pentru etapa urmatoare (Etapa 6)"
- **Primit:** Creare `db.json`, script API, `api.js` pentru comanda `fetch` și actualizarea `App.jsx` cu `useEffect` și mesaje de loading/error.
- **Modificat sau respins:** Nu s-a respins nimic. Am învățat să folosesc variabila `ignore` pentru a nu actualiza state-ul dacă componenta e demontată de pe ecran.

## Ce am învățat
Am înțeles cum să folosesc un server JSON local pentru mock API[cite: 60]. De asemenea, am descoperit că fetch nu dă eroare dacă status-ul HTTP este diferit de 200, ci doar dacă conexiunea eșuează; așadar a trebuit adăugat cod explicit care să "arunce" eroarea verificând manual proprietatea `res.ok`[cite: 60].