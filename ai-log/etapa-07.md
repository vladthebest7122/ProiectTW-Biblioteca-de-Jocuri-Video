# Etapa 7: Jurnal AI

## Instrumente folosite
- Gemini

## Conversații
Link conversație: https://share.gemini.google/BF1fucoyIalZ

## Solicitări principale
### 1. Adăugarea formularului și acțiunilor pe server
- **Întrebat:** "Continuam cu etapa 7"
- **Primit:** Componenta `JocForm`, modificarea `App.jsx` și `api.js` pentru a implementa funcțiile complete de CRUD pe serverul db.json, împreună cu adăugarea fișierului `tw.json`.
- **Modificat sau respins:** Nimic nu a fost respins. Am învățat să folosesc `e.preventDefault()` ca să opresc reîncărcarea formularului care distrugea state-ul paginii[cite: 70].

## Ce am învățat
Am înțeles importanța fluxului corect: se face *întâi* cererea către server (`await api`), iar abia la succes, folosind datele confirmate cu un ID generat de server, se modifică local și state-ul de pe ecran cu `setJocuri`[cite: 71, 74]. De asemenea, am descoperit cum să folosesc `data-testid` pentru testarea automată a elementelor cheie[cite: 71].