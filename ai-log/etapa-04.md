# Etapa 4: Jurnal AI

## Instrumente folosite
- Gemini

## Conversații
Link conversație: https://share.gemini.google/J53f3pyliQ4T

## Solicitări principale
### 1. Extragerea și separarea elementelor în Componente React
- **Întrebat:** "Fa acelasi lucru pentru etapa asta (Etapa 4)."
- **Primit:** Crearea folderului `components`, scrierea codului pentru `JocCard.jsx` (folosind operatorul ternar pentru condiționarea clasei "done") și `JocList.jsx` (folosind `map` și rândarea condiționată a mesajului de listă goală), precum și curățarea codului vechi din `App.jsx`.
- **Modificat sau respins:** Nimic, codul rulează fără avertismente de `key` dispărut și respectă pașii.

## Ce am învățat / ce nu a funcționat
Am învățat că atunci când folosești metoda `.map()` în JSX pentru a genera o listă de elemente, este obligatoriu ca primul element returnat (în cazul meu `JocCard`) să primească proprietatea unică `key={id}`[cite: 38]. De asemenea, am învățat cum componentele pot primi variabile de la "părintele" lor (App.jsx) folosind obiectul `props` (destructurat ca `{ jocuri }` sau `{ joc }`)[cite: 36, 38].