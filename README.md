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
| S1-R1 | README: descriere, câmpuri, date de test, rulare | [README.md](AICI_PUI_PERMALINK_CATRE_SECTIUNILE_DIN_README) | citire |
| S1-R2 | Secțiunea AI usage | [README.md](AICI_PUI_PERMALINK_CATRE_SECTIUNEA_AI_USAGE) | citire |
| S1-R3 | Jurnal AI pentru etapa 1 | [ai-log/etapa-01.md](AICI_PUI_PERMALINK_CATRE_FISIERUL_JURNAL) | citire |
| S1-R4 | antet, formular (text + select), 3 carduri cu datele temei | [index.html#L10-L55](AICI_PUI_PERMALINK_CATRE_MAIN_DIN_HTML) | deschidere pagină |
| S1-R5 | cardul finalizat arată diferit | [style.css#L115-L118](AICI_PUI_PERMALINK_CATRE_CLASA_DONE_DIN_CSS) | vizualizare card |
| S1-R6 | 2 coloane pe desktop, 1 sub 700px | [style.css#L131-L135](AICI_PUI_PERMALINK_CATRE_MEDIA_QUERY_GRID) | redimensionare < 700px |
| S1-R7 | focus vizibil, temă întunecată lizibilă | [style.css#L125-L128_SI_L138-L150](AICI_PUI_PERMALINK_CATRE_FOCUS_SI_DARK_MODE) | Tab; dark mode |
| S1-R8 | commit "Etapa 1: Mockup HTML si CSS" publicat (pushed) | [Link către commit](AICI_PUI_LINK_CATRE_COMMITUL_TAU) | istoric commit-uri |