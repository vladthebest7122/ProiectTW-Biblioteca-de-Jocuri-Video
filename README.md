# GameVault
O bibliotecă personală pentru evidența jocurilor video deținute și a stadiului lor de finalizare.

## Modelul de date
| Câmp | Tip | Note |
| --- | --- | --- |
| Titlu | text | obligatoriu, max 100 caractere |
| Finalizat | boolean | comutat din listă, implicit fals |
| Platformă | valori fixe | PC, PlayStation, Xbox, Switch |
| Gen | relație | RPG, Action, Shooter, Platformer |
| Proprietar | relație | proprietarul jocului (din săptămâna 11) |

Date de test folosite în toate etapele:
1. The Witcher 3, terminat, PC
2. God of War, neterminat, PlayStation
3. Halo Infinite, neterminat, Xbox

## Utilizare AI
| Instrument | Folosit pentru |
| --- | --- |
| Gemini | Etapa 1: Mockup HTML/CSS și README. Etapa 2: Logica datelor în JS |

Detalii pe etapă:
- Etapa 1: Am folosit Gemini pentru a genera HTML, CSS. Vezi `ai-log/etapa-01.md`.
- Etapa 2: Am folosit Gemini pentru a genera funcțiile imutabile de listare, validare, și actualizare în JavaScript. Vezi `ai-log/etapa-02.md`.

## Cum se rulează
Deschide `index.html` într-un browser. Apasă F12 (Console) pentru a vedea rezultatele funcțiilor de JS. Fără pași de compilare, fără server.

## Stage 2: data logic
Plain JavaScript, no DOM. `jocuri.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

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
