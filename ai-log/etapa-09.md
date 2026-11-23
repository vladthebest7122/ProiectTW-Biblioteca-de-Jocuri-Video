# Etapa 9: Jurnal AI

## Instrumente folosite
- Gemini

## Conversații
Link conversație: https://share.gemini.google/jhQQ3lS89bKf

## Solicitări principale
### 1. Crearea serverului Express și eliminarea json-server
- **Întrebat:** "trecem la urmatoarea etapa (Etapa 9)"
- **Primit:** Structura completă a folderului `backend/` (`app.js`, `server.js`, `validation.js`, `routes/jocuri.js`), actualizarea tratării erorilor în `frontend/src/api.js` și pașii pentru eliminarea `json-server`.
- **Modificat sau respins:** Am păstrat câmpul `imagine` ca opțional în `validation.js` pentru a suporta imaginile de fundal din interfață fără a afecta testele automate.

## Ce am învățat
Am înțeles cum funcționează middleware-urile în Express (`express.json()` și `cors()`) și de ce browserul blochează cererile între porturi diferite (CORS) dacă serverul nu le permite explicit. De asemenea, am învățat să validez datele pe server și să returnez coduri HTTP corecte (200, 201, 204, 400, 404).