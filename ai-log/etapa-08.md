# Etapa 8: Jurnal AI

## Instrumente folosite
- Gemini

## Conversații
Link conversație: https://share.gemini.google/Z02oDwqMU64p

## Solicitări principale
### 1. Implementare React Router și modularizare
- **Întrebat:** "Trecem la urmatoarea etapa (Etapa 8)"
- **Primit:** Conversia proiectului într-un SPA, rute pentru Listă, Detaliu, Despre și 404. Separarea completă a stilurilor din `App.css` în fișiere `*.module.css` (dar adaptate cu design-ul custom generat anterior).
- **Modificat sau respins:** Am cerut integrarea directă a layout-ului și imaginilor pe pagina nouă de detaliu, rezultând într-un cover foarte frumos (stil Header) cu informațiile jocului. 

## Ce am învățat
Am descoperit cum se folosește `<Link>` în loc de `<a>` pentru a nu reseta (reîncărca) aplicația React[cite: 86]. De asemenea, am învățat că atunci când folosesc `CSS Modules`, clasele sunt importate ca variabile JavaScript (ex. `styles.card`), iar Vite le generează un nume unic (hash) în timpul build-ului pentru a nu intra în conflict[cite: 87, 88, 97].