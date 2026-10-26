# Etapa 5: Jurnal AI

## Instrumente folosite
- Gemini

## Conversații
Link conversație: https://share.gemini.google/ErxvJ1RvBOgI

## Solicitări principale
### 1. Adăugarea stării și evenimentelor pentru interfață
- **Întrebat:** "Fa acelasi lucru pentru etapa urmatoare (Etapa 5)"
- **Primit:** Modificarea componentei `App` pentru a stoca lista în `useState`. Implementarea comutării de teme manipulând `data-theme` și funcțiile `handleToggle` / `handleDelete`.
- **Modificat sau respins:** Nimic respins. Codul include corect actualizările imutabile (fără `push` sau mutații directe).

## Ce am învățat / ce nu a funcționat
Am învățat diferența dintre date păstrate în state și date derivate (cum este numărul de jocuri neterminate din antet, care se recalculează natural la fiecare randare și nu trebuie stocat într-un state separat)[cite: 45, 46]. Am învățat să fac un *checkbox controlat* cu proprietățile `checked` și `onChange` pentru a evita avertismentele React[cite: 47].