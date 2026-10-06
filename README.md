# GameVault
A personal library to track owned video games and their completion status.

## Data model
| Field | Type | Notes |
| --- | --- | --- |
| Title | text | required, max 100 chars |
| Completed | boolean | toggled from the list, default false |
| Platform | fixed values | PC, PlayStation, Xbox, Switch |
| Genre | relation | RPG, Action, Shooter, Platformer |
| Owner | relation | the owner of the game (from week 11) |

Sample data used across all stages:
1. The Witcher 3, completed, PC
2. God of War, active, PlayStation
3. Halo Infinite, active, Xbox

## AI usage
| Tool | Used for |
| --- | --- |
| Gemini | Stage 1: HTML/CSS mockup and README. Stage 2: JavaScript data logic |

Details per stage:
- Stage 1: Used Gemini to generate the initial HTML, CSS, and Markdown files. See `ai-log/etapa-01.md`.
- Stage 2: Used Gemini to generate the immutable array functions in JavaScript. See `ai-log/etapa-02.md`.

## How to run
Open `index.html` in a browser. Press F12 (Console) to view the JavaScript function results. No build step, no server.

## Stage 2: data logic
Plain JavaScript, no DOM. `jocuri.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

---

## Tabel de verificare Etapa 1

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/main/README.md) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/main/README.md) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/main/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L10-L55](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/1cac591ef32dce6bc025329259bf1b534f5ca7db/index.html#L10-L62) | open the page |
| S1-R5 | finished card looks different | [style.css#L115-L118](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/1cac591ef32dce6bc025329259bf1b534f5ca7db/style.css#L109-L153) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L131-L135](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/1cac591ef32dce6bc025329259bf1b534f5ca7db/style.css#L170-L174) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L125-L128_SI_L138-L150](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/1cac591ef32dce6bc025329259bf1b534f5ca7db/style.css#L177-L190) | Tab; dark mode |
| S1-R8 | commit "Etapa 1: Mockup HTML si CSS" pushed | [Link către commit](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/commit/1cac591ef32dce6bc025329259bf1b534f5ca7db) | commit history |

## Tabel de verificare Etapa 2

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JS file linked, logs on page load | [index.html#L55](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/index.html#L66) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [jocuri.js#L2-L6](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/jocuri.js#L2-L6) | read |
| S2-R3 | list, count, search, add, toggle, delete | [jocuri.js#L11-L60](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/jocuri.js#L10-L64) | console output |
| S2-R4 | add rejects empty name and invalid tag | [jocuri.js#L35-L42](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/jocuri.js#L33-L41) | last 2 console lines |
| S2-R5 | original array unchanged after add | [jocuri.js#L76](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/jocuri.js#L78) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/README.md?plain=1#L30-L31) și [etapa-02.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/ai-log/etapa-02.md?plain=1#L1-L16) | read |
| S2-R7 | commit "Stage 2" pushed | [Link către commit](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/commit/21d54b26113de844dea46ad9fdb60174c4c48e77) | commit history |