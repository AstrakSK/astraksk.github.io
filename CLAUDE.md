# CLAUDE.md — astraksk.com

## Čo to je

Osobné portfolio **Leonardo / AstrakSK**. Statická stránka hostovaná na GitHub Pages,
vlastná doména `astraksk.com` (viď `CNAME`). Repo `AstrakSK/astraksk.github.io`, vetva `main`.

Obsah aj UI sú **po slovensky** (`<html lang="sk">`). Commit správy píš tiež po slovensky —
zodpovedá to doterajšej histórii ("V3 — redizajn, aktuálny obsah a animácie").

## Stack

Čisté HTML/CSS/JS. **Žiadny build, žiadny bundler, žiadne dependencies.** Súbory sa
servírujú presne tak, ako ležia v repo — čo zmeníš, to ide von.

| Súbor | Úloha |
|---|---|
| `index.html` | kostra, SVG sprite, nav, `<article class="page">` sekcie |
| `style.css` | všetky štýly |
| `script.js` | `portfolioData` + render do DOM |
| `brain.js` | canvas pozadie — 3D sieť uzlov, `window.Brain` |
| `assets/` | fonty (woff2), `music.mp3`, obrázky |

## Dve pravidlá, na ktorých to najčastejšie padne

### 1. Cache busting `?v=`

GitHub Pages posiela `Cache-Control: max-age=600`. Pri **každom** vydaní zvýš `?v=`
v `index.html` naraz pre `style.css`, `brain.js` **aj** `script.js`. Bez toho dostane
vracajúci sa návštevník nové HTML so starým CSS/JS a stránka sa rozsype.

Aktuálne `v=18`. Fonty verziu nemajú — tie sa nemenia.

### 2. Sekcie musia sedieť na troch miestach naraz

`home`, `minecraft`, `dev`, `infra`, `network`, `school`, `ai`

- `data-section="…"` na `.nav-item` v `index.html`
- `id="…"` na `<article class="page">` v `index.html`
- `HUB_LAYOUT` v `brain.js`

Pridanie sekcie bez zápisu do `HUB_LAYOUT` znamená, že `Brain.goToSection(id)` ju
**ticho ignoruje** (`if (!hubById.has(id)) return;`) — kliknutie v menu nič neurobí.

## Dátový tok

`portfolioData` na vrchu `script.js` je jediný zdroj pravdy. Kľúče:
`stats`, `featured`, `timeline`, `servers`, `devProjects`, `stack`, `practices`,
`network`, `school`, `ai`.

Renderuje sa z neho DOM **a zároveň** z neho `brain.js` stavia uzly siete. Obsah teda
meň v `portfolioData`, nie natvrdo v HTML — inak sa rozíde stránka s pozadím.

## brain.js

Mozog je **čistá dekorácia**. Žije v pásme naľavo od obsahu, nedá sa doň klikať, nemá
zoom ani posun. Zrušené je celoobrazovkové zobrazenie, tlačidlo *Mozog*, klávesa `B`,
tlačidlo *späť*, karta detailu aj koliesko/ťahanie.

Scéna mozgu je **úplne statická**: uzly nemajú vlastný drift a myš scénou nehýbe
(parallax je zrušený). Popisok visí na bode, takže každé chvenie je na texte vidieť.
Hýbe sa len nábeh úrovne a sklz po vlákne; žiara dýcha cez `pulse`, čo je jas, nie pohyb.
Vzdialená sieť internetu si vlastný drift ponechala — popisky na nej nevisia.

Uzly sú `<div class="brain-node">` s `pointer-events: none` — nie tlačidlá. **Bod uzla
kreslí canvas**, DOM nesie iba popisok; vlastná bodka v DOM (`.brain-mark`) robila dva
body nad sebou, preto je zrušená. Popisok sa na bod zavesí cez `translateY(-50%)`
a `padding-left`. Naviguje sa
**menu a obsahom**; mozog len ukazuje, kde stojíš. Vlákno k rodičovi sa stráca v tme a
nevedie k ničomu klikateľnému.

Kreslí sa do dvoch plátien, interaktívne body sú DOM tlačidlá v `#brainHud` (kvôli
ostrému textu, hoveru a klávesnici).

| plátno | čo nesie | rozlíšenie |
|---|---|---|
| `#brainNet` | internet v diaľke | `NET_SCALE` = 0,3 → roztiahne sa 3,3× |
| `#brain` | samotný mozog | plné |

### Pásmo

Šírku drží CSS `--brain-band` (`clamp(300px, 27vw, 460px)`, pod 1180 px nula). `brain.js`
ju **nečíta z premennej** — `getComputedStyle` vracia pre custom property surový
`clamp(...)`, nie pixely. Meria sa `shell.getBoundingClientRect().left`, čo je tá istá
hodnota a navyše vždy sedí s tým, čo layout naozaj spravil.

Pod prahom (`BAND_MIN`) `interactive()` vráti false: mozog je len pozadie, naviguje menu,
lišta aj tlačidlo späť sú skryté.

### Vejár, nie prstenec

V pásme deti **nesedia na kruhu**. Kruh sa do 380-pixelového pásu nezmestí: vodorovný
štítok má cez 150 px a dva uzly v rovnakej výške si ho položili cez seba — merané
prekryvy boli na každej úrovni (`Minecraft × Časová os`, `ChatShield × CombatManager`, …).
Relaxácia polôh to nevyriešila.

`childOffset()` preto v pásme rozsádza deti do **zvislého vejára**: rozostup v osi y je
daný konštrukciou (`rowGap`), x sa vyduje po oblúku. Pri **nepárnom** počte detí sa vejár
posunie o pol riadka (`skew`) — inak prostredné dieťa sadne presne na výšku stredu a
štítky sa prekryjú. Štítky idú vždy doprava — striedanie
strán ich v úzkom páse zrážalo. Mimo pásma zostáva pôvodný prstenec (`ringSlot`,
`ringBase`). Overené: 0 prekryvov na všetkých úrovniach vrátane Vývoja s ôsmimi deťmi.

### Cesta medzi úrovňami má dve fázy

`rebuild(anchorItem, direction)` zavesí scénu na uzol, ktorý má zostať na mieste, a odtiaľ
ju zvezie po vlákne (`shift`). Kamera sa nehýbe.

1. **Vlákno** (`journey.hold`, 1,25 s) — vidno len stred a spoj. Prstenec je schovaný
   (`unfold = 0`), kamera pritiahnutá (`ride`), scéna sa zvezie pomalšie.
2. **Rozvinutie** — `unfold` nabehne na 1. Overené: 0 uzlov do 1,25 s, potom opacity
   0,2 → 0,97 za ~1,5 s.

Premenná sa volá `unfold`, nie `reveal` — `reveal(item)` je už funkcia.

Dve pasce, na ktorých sklz už raz padol: `born` škáluje polomer, takže **musí byť
nastavené skôr** než `shift`; a obe musia dobiehať **rovnakým tempom** (3,4), inak sa
dráha zakriví. Prah viditeľnosti je `born < 0.1` — pri vyššom sa uzol zjaví až v polovici
letu.

### Internet

Ďaleko za mozgom je hustejšia sieť (`buildNet`, ~2400 uzlov) bez popiskov a interakcie.
Uzly sa sypú **do kužeľa pohľadu**, nie do kvádra, inak sieť pri krajoch riedne. Susedia
sa hľadajú cez mriežku, nie každý s každým.

**Rozmazanie nerob cez CSS `filter: blur()`.** Vyzeralo rovnako, ale bez GPU stálo 26
snímkov za sekundu (59 → 33). Namiesto toho sa kreslí na `NET_SCALE` rozlíšení a plátno
sa roztiahne na celé okno — to roztiahnutie je rozmazanie zadarmo. Silu rozmazania teda
ladíš cez `NET_SCALE`: menšia hodnota = väčšie roztiahnutie = silnejší blur
(0,27 dáva 3,7×).

Pri meraní na tomto plátne pozor — zmena `NET_SCALE` mení aj počet pixelov, takže
absolútne počty medzi verziami neporovnávaj, len podiely.

Vzruchy (`drawPulseTrail`) sú **stopy po vlákne, nie letiace bodky** — hlava sa úmyselne
nekreslí. Sú krátke a rýchle: stopa `tail` 0,11 (sieť) a 0,10 (mozog), rýchlosti 2,08–5,6
resp. 1,7–3,2. Sila: `alphaScale` 0,45 (sieť) a 0,52 (mozog).

Pozor pri ladení mozgových vzruchov: pri `MIND_PULSE_SPAWN` 0,16 a rýchlostiach 1,7–3,2
beží naraz len **asi tri** (`tempo × životnosť` ≈ 6,25 × 0,45). Zmena ich sily sa preto
na celkovom jase plátna neprejaví — prehluší ju statická žiara uzlov a stredu. Ak majú
byť naozaj nápadnejšie, treba zdvihnúť aj počet, nie len `alphaScale`.

Sieťové vzruchy musia byť cez rozmazanie zreteľné. Tri veci, ktoré to reálne rozhodli —
v tomto poradí dôležitosti:

1. **Hrúbka čiary.** Sieťové plátno má zlomkové rozlíšenie, takže projekčná mierka
   vychádza okolo 0,2 a spoločný vzorec dával **0,51 pixela** — antialiasing čiaru
   rozmazal do stratena. `drawPulseTrail` má preto pre `netCtx` vlastné minimum
   (`clamp(stroke * 6, 1.4, 2.8)`). Samotná táto zmena strojnásobila počet jasných
   pixelov (169 → 500).
2. **Počet.** Jeden vzruch má pár pixelov, takže viditeľné ich robí množstvo.
   Strop `NET_PULSE_LIMIT` sa pritom nedosahuje — koľko ich beží naraz určuje
   `tempo × životnosť`, a životnosť je prevrátená rýchlosť.

   **Z toho plynie väzba, ktorá už raz zmiatla meranie:** spomalenie vzruchov samo osebe
   zahustí sieť. Pri spomalení o 20 % vzrastie počet o 25 % a stlmenie sa vyruší — vtedy
   treba stiahnuť aj `NET_PULSE_SPAWN` v rovnakom pomere.
3. **Obálka jasu.** `life` nejde do nuly (`0.5 + 0.5 * sin`) — s čistým sínusom bol
   vzruch jasný len v strede dráhy. Stopy sa zbierajú do pásiem a každé ide jedným ťahom; tristo samostatných
`stroke()` stálo ~10 fps. Funkcia berie cieľové plátno prvým parametrom.

### Výkon

61 fps. Žiara aj oba prechody `drawMindWash` sú **sprity** — `createRadialGradient` na
snímok stál ~15 fps. `updateHud` si drží referencie na `strong`/`small` a posledný stav
tried v `element._flags`; `querySelector` pre každý uzol v každom snímku bol drahší než
celé kreslenie siete. Pri poklese sa `quality` stiahne sama.

### API

`window.Brain`: `build`, `goToSection`, `goToNode`, `clearNode`, `start`, `stop`.

Pozor pri úpravách `brain.js`: vykresľovanie (`drawSpokes` … `drawLabels`), slučka
(`render`, `step`, `start`, `stop`, `staticFrame`) a stavba HUD ležia **medzi**
`drawParentThread` a `updateHud`. Pri hromadnom mazaní blokov je to ľahké odrezať.

`goToNode(section, matcher)` otvorí úroveň, na ktorej položka leží, a označí ju —
`{ project: id }`, `{ label }`, `{ caption }`. Volá sa z obsahu: otvorenie projektu, klik
na rok časovej osi, klik na server, rozbalenie foldu.

Mozog aj obsah sa prepínajú navzájom, preto je tu poistka `syncing` — bez nej by si
preklik v mozgu sám prepísal úroveň späť na sekciu.

Rešpektuje `prefers-reduced-motion` — pri `reduce` sa kreslí statický snímok, navigácia
funguje ďalej, len bez sklzu.

**Testovanie:** Brave dedí vypnuté animácie z Windows, takže tam mozog stojí. Na overenie
animácií používaj **Mullvad Browser** — ten `prefers-reduced-motion` kvôli ochrane proti
fingerprintingu hlási ako `no-preference`. Pri ladení cez CDP maž cache (`ignoreCache`),
inak testuješ starý súbor.

## Stav k 12. 9. 2026 — rozrobené, necommitnuté

Posledný commit: `5ae1537`.

- `brain.js` — **nový, netrackovaný** súbor (~39 KB)
- `script.js` — −207 riadkov, logika zjavne presunutá do `brain.js`
- `style.css` — +418 riadkov
- `index.html` — upravený

## Prostredie — `ANTHROPIC_BASE_URL` a headroom proxy

`.claude/settings.local.json` nastavuje `env.ANTHROPIC_BASE_URL=http://127.0.0.1:8787`,
čo smeruje všetky API volania na lokálny **headroom proxy**. Override je viazaný na workspace —
prejaví sa len v Claude Code otvorenom v tomto priečinku.

**Stav 12. 9. 2026, popoludní:** proxy na `127.0.0.1:8787` **beží** (marker v
`.claude/.headroom_wrap_marker.json`) a spojenie cezeň funguje. Ráno nebežal, preto vtedy
Claude Code v tomto workspace padal na `connection refused` — kým z iného priečinka fungoval.

Ten `env` bol ráno ručne odstránený, ale `SessionStart` hook `headroom wrap selfheal`
**si ho zapísal späť**. To je zámer hooku, nie chyba. Ručné mazanie teda nemá trvanlivosť —
ak sa `connection refused` vráti, správne poradie krokov je:

1. `netstat -ano | findstr 8787` — počúva niekto?
2. ak nie, naštartovať proxy, alebo
3. vypnúť hook v `.claude/settings.local.json` a až potom odstrániť `env`.

Firewall s tým nemá nič spoločné — tam nehľadaj.

Záloha pôvodného súboru: `.claude/settings.local.json.bak` (obsahovo zhodná s aktuálnym).
