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
| Gemini | Etapa 1: A furnizat mockup-ul complet HTML/CSS și structura README |

Detalii pe etapă:
- Etapa 1: Am folosit Gemini pentru a genera fișierele inițiale HTML, CSS și Markdown conform cerințelor proiectului. Vezi folderul `ai-log/`.

## Cum se rulează
Deschide `index.html` într-un browser. Fără pași de compilare (build), fără server.

## Status
- [x] Etapa 1: mockup static
- [ ] Etapa 2: logica pe date în JavaScript

## Tabel de verificare Etapa 1

| ID | Cerință (Requirement) | Unde se află (Where - permalink) | Cum se verifică (How to check) |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: descriere, câmpuri, date de test, rulare | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/main/README.md) | citire |
| S1-R2 | Secțiunea AI usage | [README.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/main/README.md) | citire |
| S1-R3 | Jurnal AI pentru etapa 1 | [ai-log/etapa-01.md](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/main/ai-log/etapa-01.md) | citire |
| S1-R4 | antet, formular (text + select), 3 carduri cu datele temei | [index.html#L10-L55](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/1cac591ef32dce6bc025329259bf1b534f5ca7db/index.html#L10-L62) | deschidere pagină |
| S1-R5 | cardul finalizat arată diferit | [style.css#L115-L118](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/1cac591ef32dce6bc025329259bf1b534f5ca7db/style.css#L109-L153) | vizualizare card |
| S1-R6 | 2 coloane pe desktop, 1 sub 700px | [style.css#L131-L135](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/1cac591ef32dce6bc025329259bf1b534f5ca7db/style.css#L170-L174) | redimensionare < 700px |
| S1-R7 | focus vizibil, temă întunecată lizibilă | [style.css#L125-L128_SI_L138-L150](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/blob/1cac591ef32dce6bc025329259bf1b534f5ca7db/style.css#L177-L190) | Tab; dark mode |
| S1-R8 | commit "Etapa 1: Mockup HTML si CSS" publicat (pushed) | [Link către commit](https://github.com/vladthebest7122/ProiectTW-Biblioteca-de-Jocuri-Video/commit/1cac591ef32dce6bc025329259bf1b534f5ca7db) | istoric commit-uri |