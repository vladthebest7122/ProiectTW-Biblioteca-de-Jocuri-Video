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
| Stage | Tool | Used for |
| --- | --- | --- |
| Stage 1 | Gemini | Initial HTML/CSS static mockup and Markdown documentation. |
| Stage 2 | Gemini | Immutable array functions and data logic in JavaScript. |
| Stage 3 | Gemini | Vite + React project initialization and adapting the mockup to JSX. |
| Stage 4 | Gemini | Extracting reusable React components (`JocList`, `JocCard`) and custom Glassmorphism styling with background images. |
| Stage 5 | Gemini | Local state (`useState`), interactive toggle/delete events, and manual light/dark mode switch. |
| Stage 6 | Gemini | `json-server` mock API setup, `api.js`, and loading/error states with `useEffect`. |
| Stage 7 | Gemini | Controlled form (`JocForm`) with validation, full CRUD API actions, `tw.json`, and `data-testid` attributes. |
| Stage 8 | Gemini | React Router setup (list, detail, about, 404 pages), shared `Layout`, and CSS Modules migration. |
| Stage 9 | Gemini | Node.js and Express backend, REST routes, server-side validation, CORS configuration, and removing `json-server`. |

Details per stage:
- Stage 1: Used Gemini to generate the initial HTML, CSS, and Markdown files. See `ai-log/etapa-01.md`.
- Stage 2: Used Gemini to implement the immutable array functions in JavaScript. See `ai-log/etapa-02.md`.
- Stage 3: Used Gemini to initialize the Vite + React project and adapt the mockup to JSX. See `ai-log/etapa-03.md`.
- Stage 4: Used Gemini to extract reusable React components (`JocList`, `JocCard`) and create custom Glassmorphism styling with background images. See `ai-log/etapa-04.md`.
- Stage 5: Used Gemini to implement local state (`useState`), interactive toggle/delete events, and a manual light/dark mode switch. See `ai-log/etapa-05.md`.
- Stage 6: Used Gemini to configure `json-server`, create `api.js`, and handle loading and error states with `useEffect`. See `ai-log/etapa-06.md`.
- Stage 7: Used Gemini to build the controlled form (`JocForm`) with validation, connect full CRUD actions to the API, and add `tw.json` and `data-testid` attributes. See `ai-log/etapa-07.md`.
- Stage 8: Used Gemini to set up React Router (list, detail, about, and 404 pages), create a shared `Layout`, and migrate styles to CSS Modules. See `ai-log/etapa-08.md`.
- Stage 9: Used Gemini to build the Node.js and Express backend, implement REST routes with server-side validation and CORS, and remove `json-server`. See `ai-log/etapa-09.md`.

## How to run
```bash
cd backend && npm install && npm run dev   # terminal 1, port 3001
cd frontend && npm install && npm run dev  # terminal 2, port 5173
```

## Stage 2: data logic
Plain JavaScript, no DOM. `jocuri.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## Stage 4: components
The list is rendered from the data, through two components:
`JocList` receives the whole array and renders one card per item.
`JocCard` receives a single item through props and displays it.

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode. Changes are lost on refresh, which is what stage 6 and stage 10 fix.

## Stage 6: data from a mock API
The list is served by json-server from `db.json`. The app fetches it on load and shows a loading state and an error state.

## Stage 7: form and validation
Tasks can be added from the page. The form is controlled and validated, and every change (add, toggle, delete) goes to the API before it shows up in the list.

## Stage 8: routing and detail page
Three pages behind React Router: the list, a detail page at `/jocuri/:id`, and an about page, plus a 404 page. Component styles moved to CSS Modules.

## Stage 9: own backend
`json-server` is gone. The API is an Express server in `backend/`, with REST routes, server-side validation and CORS. Data is still kept in memory and resets on restart.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: loading data from a mock API
- [x] Stage 7: form and validation
- [x] Stage 8: routing and detail page
- [x] Stage 9: own backend with Express
- [ ] Stage 10: MariaDB and full CRUD

---

## Stage 1 Checklist

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

## Stage 2 Checklist

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JS file linked, logs on page load | [index.html#L55](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/index.html#L66) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [jocuri.js#L2-L6](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/jocuri.js#L2-L6) | read |
| S2-R3 | list, count, search, add, toggle, delete | [jocuri.js#L11-L60](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/jocuri.js#L10-L64) | console output |
| S2-R4 | add rejects empty name and invalid tag | [jocuri.js#L35-L42](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/jocuri.js#L33-L41) | last 2 console lines |
| S2-R5 | original array unchanged after add | [jocuri.js#L76](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/jocuri.js#L78) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/README.md?plain=1#L30-L31) și [etapa-02.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/21d54b26113de844dea46ad9fdb60174c4c48e77/ai-log/etapa-02.md?plain=1#L1-L16) | read |
| S2-R7 | commit "Stage 2" pushed | [Link către commit](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/commit/21d54b26113de844dea46ad9fdb60174c4c48e77) | commit history |


## Stage 3 Checklist
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S3-R1 | npm run dev starts without errors | [frontend/package.json](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/df9f9b3e98c471d1d96ec3bb7123155def4e85d2/frontend/package.json#L1-L27) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx#L13-L17](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/df9f9b3e98c471d1d96ec3bb7123155def4e85d2/frontend/src/App.jsx#L13-L17) | edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx#L1-L5](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/df9f9b3e98c471d1d96ec3bb7123155def4e85d2/frontend/src/App.jsx#L1-L5) | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/df9f9b3e98c471d1d96ec3bb7123155def4e85d2/frontend/src/App.css#L1-L192) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/df9f9b3e98c471d1d96ec3bb7123155def4e85d2/frontend/.gitignore#L1-L24) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/df9f9b3e98c471d1d96ec3bb7123155def4e85d2/README.md?plain=1#L1-L63) and [ai-log/etapa-03.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/df9f9b3e98c471d1d96ec3bb7123155def4e85d2/ai-log/etapa-03.md?plain=1#L1-L16) | read |
| S3-R7 | commit "Stage 3" pushed | [Link to commit](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/commit/df9f9b3e98c471d1d96ec3bb7123155def4e85d2) | commit history |

## Stage 4 Checklist
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/tree/main/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [frontend/src/components/JocCard.jsx#L3-L5](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/0bd5b84924cbedcdb9fb7e1dc7d6a4bb4de27ef7/frontend/src/components/JocCard.jsx#L4-L6) | read |
| S4-R3 | map + key={id}, no console warnings | [frontend/src/components/JocList.jsx#L10-L14](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/0bd5b84924cbedcdb9fb7e1dc7d6a4bb4de27ef7/frontend/src/components/JocList.jsx#L10-L14) | F12, Console |
| S4-R4 | message for empty list | [frontend/src/components/JocList.jsx#L4-L6](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/0bd5b84924cbedcdb9fb7e1dc7d6a4bb4de27ef7/frontend/src/components/JocList.jsx#L4-L7) | set array to [] |
| S4-R5 | state changes the card look | [frontend/src/components/JocCard.jsx#L6](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/0bd5b84924cbedcdb9fb7e1dc7d6a4bb4de27ef7/frontend/src/components/JocCard.jsx#L6) | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/0bd5b84924cbedcdb9fb7e1dc7d6a4bb4de27ef7/README.md?plain=1#L1-L88) and [ai-log/etapa-04.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/0bd5b84924cbedcdb9fb7e1dc7d6a4bb4de27ef7/ai-log/etapa-04.md?plain=1#L1-L16) | read |
| S4-R7 | commit "Stage 4" pushed | [Link to commit](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/commit/2c3fa23c7861f595cd4e746de1a9e606898b617b) | commit history |

## Stage 5 Checklist
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S5-R1 | list kept in useState, in App | [frontend/src/App.jsx#L17](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/d69a2c3a43212eb20fbf474b444e615fc4176a25/frontend/src/App.jsx#L17) | read |
| S5-R2 | toggling changes state and card look | [frontend/src/App.jsx#L21-L25](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/d69a2c3a43212eb20fbf474b444e615fc4176a25/frontend/src/App.jsx#L21-L25) and [frontend/src/components/JocCard.jsx#L15-L19](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/d69a2c3a43212eb20fbf474b444e615fc4176a25/frontend/src/components/JocCard.jsx#L15-L19) | click a checkbox |
| S5-R3 | delete removes the item | [frontend/src/App.jsx#L28-L30](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/d69a2c3a43212eb20fbf474b444e615fc4176a25/frontend/src/App.jsx#L28-L30) and [frontend/src/components/JocCard.jsx#L32-L34](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/d69a2c3a43212eb20fbf474b444e615fc4176a25/frontend/src/components/JocCard.jsx#L30-L34) | click Delete |
| S5-R4 | header counter derived, not in state | [frontend/src/App.jsx#L41](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/d69a2c3a43212eb20fbf474b444e615fc4176a25/frontend/src/App.jsx#L40) | toggle, watch header |
| S5-R5 | immutable updates | [frontend/src/App.jsx#L21-L30](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/d69a2c3a43212eb20fbf474b444e615fc4176a25/frontend/src/App.jsx#L21-L30) | read |
| S5-R6 | light/dark toggle: state + html attr | [frontend/src/App.jsx#L33-L38](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/d69a2c3a43212eb20fbf474b444e615fc4176a25/frontend/src/App.jsx#L33-L37) and [frontend/src/App.css#L22-L41](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/d69a2c3a43212eb20fbf474b444e615fc4176a25/frontend/src/App.css#L25-L37) | click button, test themes |
| S5-R7 | no console warnings; logs | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/d69a2c3a43212eb20fbf474b444e615fc4176a25/README.md?plain=1#L1-L99) and [ai-log/etapa-05.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/d69a2c3a43212eb20fbf474b444e615fc4176a25/ai-log/etapa-05.md?plain=1#L1-L16) | F12, Console |
| S5-R8 | commit "Stage 5" pushed | [Link to commit](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/commit/81c3ab72f6f60b22a8aa56a9a36f04e51b648316) | commit history |

## Stage 6 Checklist
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S6-R1 | npm run api starts, route shows JSON | [frontend/package.json#L11](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/40ca502cd71c64e33d29be87dd0be37760855299/frontend/package.json#L11) and [frontend/db.json](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/40ca502cd71c64e33d29be87dd0be37760855299/frontend/db.json#L1-L9) | open localhost:3001/jocuri |
| S6-R2 | data no longer in React code | [frontend/src/App.jsx#L11](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/40ca502cd71c64e33d29be87dd0be37760855299/frontend/src/App.jsx#L11) | read |
| S6-R3 | loading message while waiting | [frontend/src/App.jsx#L12](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/40ca502cd71c64e33d29be87dd0be37760855299/frontend/src/App.jsx#L12), [frontend/src/App.jsx#L75](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/40ca502cd71c64e33d29be87dd0be37760855299/frontend/src/App.jsx#L75), [frontend/src/api.js#L2-L8](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/40ca502cd71c64e33d29be87dd0be37760855299/frontend/src/api.js#L1-L10) and [frontend/.env.example](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/40ca502cd71c64e33d29be87dd0be37760855299/frontend/.env.example#L1-L2) | --delay 4000 |
| S6-R4 | error message when API is down | [frontend/src/App.jsx#L77-L81](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/40ca502cd71c64e33d29be87dd0be37760855299/frontend/src/App.jsx#L77-L81) | stop npm run api, refresh |
| S6-R5 | fetch only in api.js, URL from env | [frontend/src/api.js#L5](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/40ca502cd71c64e33d29be87dd0be37760855299/frontend/src/api.js#L5) | search for fetch |
| S6-R6 | README Stage 6 section + AI log | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/40ca502cd71c64e33d29be87dd0be37760855299/README.md?plain=1#L1-L120) and [ai-log/etapa-06.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/40ca502cd71c64e33d29be87dd0be37760855299/ai-log/etapa-06.md?plain=1#L1-L16) | read |
| S6-R7 | commit "Stage 6" pushed | [Link to commit](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/commit/40ca502cd71c64e33d29be87dd0be37760855299) | commit history |

## Stage 7 Checklist
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S7-R1 | controlled form: value + onChange on every field | [frontend/src/components/JocForm.jsx#L60-L110](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/bcf12630bd5a5a59487b3c79f524c53faadc69e3/frontend/src/components/JocForm.jsx#L60-L110) | read |
| S7-R2 | empty title shows an error, nothing is sent | [frontend/src/components/JocForm.jsx#L19-L24](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/bcf12630bd5a5a59487b3c79f524c53faadc69e3/frontend/src/components/JocForm.jsx#L19-L24) | submit empty, watch Network |
| S7-R3 | added item shows in the list and survives refresh | [frontend/src/App.jsx#L34-L38](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/bcf12630bd5a5a59487b3c79f524c53faadc69e3/frontend/src/App.jsx#L34-L38) and [frontend/src/api.js#L22-L24](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/bcf12630bd5a5a59487b3c79f524c53faadc69e3/frontend/src/api.js#L22-L24) | add, refresh |
| S7-R4 | toggle and delete survive refresh | [frontend/src/App.jsx#L40-L59](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/bcf12630bd5a5a59487b3c79f524c53faadc69e3/frontend/src/App.jsx#L40-L59) | toggle/delete, refresh |
| S7-R5 | button disabled while sending, form cleared on success | [frontend/src/components/JocForm.jsx#L49-L58](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/bcf12630bd5a5a59487b3c79f524c53faadc69e3/frontend/src/components/JocForm.jsx#L49-L58) | --delay 3000 |
| S7-R6 | tw.json and the data-testid attributes | [tw.json](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/bcf12630bd5a5a59487b3c79f524c53faadc69e3/tw.json#L1-L6) and [frontend/src/components/JocCard.jsx#L12-L24](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/bcf12630bd5a5a59487b3c79f524c53faadc69e3/frontend/src/components/JocCard.jsx#L12-L24) | querySelectorAll |
| S7-R7 | README Stage 7 section + AI log | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/bcf12630bd5a5a59487b3c79f524c53faadc69e3/README.md?plain=1#L1-L135) and [ai-log/etapa-07.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/bcf12630bd5a5a59487b3c79f524c53faadc69e3/ai-log/etapa-07.md?plain=1#L1-L16) | read |
| S7-R8 | commit "Stage 7" pushed | [Link to commit](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/commit/40ca502cd71c64e33d29be87dd0be37760855299) | commit history |

## Stage 8 Checklist
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S8-R1 | header navigation changes page without reload | [frontend/src/App.jsx](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/frontend/src/App.jsx#L1-L19) and [frontend/src/components/Layout.jsx](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/frontend/src/components/Layout.jsx#L1-L45) | click links, watch Network |
| S8-R2 | click on an item opens its detail page | [frontend/src/components/JocCard.jsx](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/frontend/src/components/JocCard.jsx#L1-L29) and [frontend/src/pages/JocDetaliuPage.jsx](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/frontend/src/pages/JocDetaliuPage.jsx#L1-L65) | click a title |
| S8-R3 | refresh on the detail URL works; missing id shows an error | [frontend/src/pages/JocDetaliuPage.jsx](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/frontend/src/pages/JocDetaliuPage.jsx#L1-L65) | refresh /jocuri/1, open /jocuri/999 |
| S8-R4 | unknown URL shows the app 404 page | [frontend/src/App.jsx](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/frontend/src/App.jsx#L1-L19) and [frontend/src/pages/NotFoundPage.jsx](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/frontend/src/pages/NotFoundPage.jsx#L1-L12) | open /ceva |
| S8-R5 | each component has its .module.css; index.css only shared styles | [frontend/src/components](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/tree/main/frontend/src/components), [frontend/src/pages](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/tree/main/frontend/src/pages), [frontend/src/index.css](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/frontend/src/index.css#L1-L108) | read |
| S8-R6 | data-testid attributes from tables 7.3 and 8.2; detail route /<resource>/:id | [frontend/src/components/Layout.jsx](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/frontend/src/components/Layout.jsx#L1-L45), [frontend/src/components/JocCard.jsx](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/frontend/src/components/JocCard.jsx#L1-L29), [frontend/src/pages/JocDetaliuPage.jsx](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/frontend/src/pages/JocDetaliuPage.jsx#L1-L65), [frontend/src/pages/NotFoundPage.jsx](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/532731917cd0e0f3b473cd0bb50c55596b331c8b/frontend/src/pages/NotFoundPage.jsx#L1-L12) | querySelectorAll in the console |
| S8-R7 | README Stage 8 section + AI log | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/README.md?plain=1#L1-L151) and [ai-log/etapa-08.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/c6a869e85a71b6ebc11002c913dc167229d226e4/ai-log/etapa-08.md?plain=1#L1-L16) | read |
| S8-R8 | commit "Stage 8" pushed | [Link to commit](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/commit/1de5905933a3b57c714224b6044baef2a676962a) | commit history |

## Stage 9 Checklist
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S9-R1 | npm run dev in backend/ starts the API on 3001 | [backend/package.json](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/532731917cd0e0f3b473cd0bb50c55596b331c8b/backend/package.json#L1-L15), [backend/src/server.js](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/532731917cd0e0f3b473cd0bb50c55596b331c8b/backend/src/server.js#L1-L7) | run it, open /health |
| S9-R2 | all five routes answer with the right codes | [backend/src/routes/jocuri.js](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/532731917cd0e0f3b473cd0bb50c55596b331c8b/backend/src/routes/jocuri.js#L1-L74) | curl commands |
| S9-R3 | invalid data returns 400 with a clear message | [backend/src/validation.js](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/532731917cd0e0f3b473cd0bb50c55596b331c8b/backend/src/validation.js#L1-L56) | POST with empty title |
| S9-R4 | React app works with json-server removed | [frontend/package.json](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/532731917cd0e0f3b473cd0bb50c55596b331c8b/backend/package.json#L1-L15), [frontend/src/api.js](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/532731917cd0e0f3b473cd0bb50c55596b331c8b/frontend/src/api.js#L1-L41) | stop everything but backend |
| S9-R5 | no CORS errors in the browser console | [backend/src/app.js](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/532731917cd0e0f3b473cd0bb50c55596b331c8b/backend/src/app.js#L1-L31) | open console |
| S9-R6 | README Stage 9 section + AI log | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/532731917cd0e0f3b473cd0bb50c55596b331c8b/README.md?plain=1#L1-L181), [ai-log/etapa-09.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/532731917cd0e0f3b473cd0bb50c55596b331c8b/ai-log/etapa-09.md?plain=1#L1-L16) | read |
| S9-R7 | commit "Stage 9" pushed | [Link to commit](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/commit/532731917cd0e0f3b473cd0bb50c55596b331c8b) | commit history |