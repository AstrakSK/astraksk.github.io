# CLAUDE.md — astraksk.com

## Čo to je

Osobné portfolio **Leonardo / AstrakSK**. Statická stránka hostovaná na GitHub Pages,
vlastná doména `astraksk.com` (viď `CNAME`). Repo `AstrakSK/astraksk.github.io`, vetva `main`.

Obsah aj UI sú **po slovensky** (`<html lang="sk">`). Commit správy píš tiež po slovensky —
zodpovedá to doterajšej histórii ("V3 — redizajn, aktuálny obsah a animácie").

Jedna rolovacia stránka s kotvami. Smer V7 (unslop, 23. 11. 2026): **spoľahlivý, nočný,
vecný**, svet serverovej konzoly. Chrome je tichý: graphite pozadie (`#05080c`), plochy
`#0b1015`/`#10171e`, hairline okraje, **jeden akcent tyrkysová `#2dd4bf`** (plná farba, žiadne
prechody, žiare ani farebné tiene). Zelená `--green` a jantárová `--amber` iba ako
sémantické farby stavových bodiek. Písma Space Grotesk (text) a JetBrains Mono (štítky,
čísla), váhy 400–600, štítky v sentence case bez rozostupov písmen. Zaoblenia: karty 12 px,
tlačidlá 10 px, okno v hero 14 px. Animácie len cez `transform`/`opacity`/farby.

**Jediné bohaté miesto** je okno „Čo práve beží“ v hero (vrstvy servera zo `stack` a projekty
`v prevádzke` z `devProjects`, hodiny v Bratislave). **Signatúra:** živá zelená bodka, ktorá
pulzuje iba pri veciach, čo naozaj bežia. Ostatné stavy sú tichý mono text s bodkou
(`stateTag()`). Nepridávaj späť prechody, bodkované mriežky, grain, glow, tilt ani magnetické
tlačidlá.

## Stack

Čisté HTML/CSS/JS. **Žiadny build, žiadny bundler, žiadne dependencies, žiadne CDN.**
Súbory sa servírujú presne tak, ako ležia v repo — čo zmeníš, to ide von.

| Súbor | Úloha |
|---|---|
| `index.html` | kostra, SVG sprite, hlavička, mobilné menu, statické sekcie a texty, `<dialog>` detailu, SEO (meta, OG, JSON-LD) |
| `style.css` | všetky štýly: tokeny v `:root`, komponenty, responzivita |
| `script.js` | `portfolioData` + render do DOM + všetka logika stránky |
| `assets/` | fonty (`fonts/`, Space Grotesk + JetBrains Mono, variabilné woff2, latin + latin-ext), `discord-avatar.png` (originál, len pre JSON-LD), `avatar-72/128/256.webp` (na stránke), `og-image.jpg` (1200×630, náhľad pre OG/Twitter), `skin.webp` (1024×1024, vlastný 3D render skinu AstrocrAzytv, chodidlá na 90,6 % výšky kvôli pódiu), `favicon.png`, `music.mp3` |
| `robots.txt`, `sitemap.xml` | Allow all + odkaz na sitemap; sitemap má jednu URL, pri väčšej zmene obsahu zvýš `lastmod` |
| `404.html` | vlastná chybová stránka pre GitHub Pages (`noindex`, absolútne cesty k fontom cez `assets/fonts/fonts.css`; `index` má `@font-face` priamo na začiatku `style.css`, pri zmene fontov uprav oboje) |

## Dve pravidlá, na ktorých to najčastejšie padne

### 1. Cache busting `?v=`

GitHub Pages posiela `Cache-Control: max-age=600`. Pri **každom** vydaní zvýš `?v=`
v `index.html` naraz pre `style.css` **aj** `script.js` (`bg.js` bol vo V7 zrušený). Bez toho
dostane vracajúci sa návštevník nové HTML so starým CSS/JS a stránka sa rozsype.

Aktuálne `v=25`. Fonty verziu nemajú — tie sa nemenia.

### 2. Obsah je v `portfolioData`, nie v HTML

`portfolioData` na vrchu `script.js` je jediný zdroj pravdy. Kľúče:
`stats`, `featured`, `timeline`, `servers`, `devProjects`, `stack`, `practices`,
`network`, `school`, `ai`. Nevymýšľaj projekty, klientov ani čísla.

Počet projektov aj počet jazykov v `stats` sa počíta v kóde (`resolveStats()` z dĺžky
`devProjects` a zo stackov; zoznam hľadaných jazykov je `LANGUAGES`), nepíš ich ručne.
`featured` (teraz 2 položky) určuje dve veľké karty (`.feature-grid`) so všetkými `points`
a `closing`. Ostatné projekty sú pod nimi ako zoznam riadkov (`.project-list`), nie mriežka
rovnakých kariet. Stav mapuje `STATE_KIND` + `stateTag()` v `script.js`
(`v prevádzke`, `vo vývoji`, `v príprave`, `pozastavený`, `ukončené`, v hero aj `beží`).

**Súkromie:** Together má verejne len stack a technickú stránku, účel a funkcie sa
nezverejňujú. Do `portfolioData` nepatria IP adresy, cesty na disku, tokeny, ceny,
interné poznámky, chyby z auditov ani mená tretích osôb (okrem názvov serverov).
Zdrojom faktov sú poznámky v trezore `SecondBrain/Projekty/` (len čítať).

V HTML ostávajú len statické texty: hero nadpis a lead, leady sekcií, text „O mne“.

## Štruktúra stránky a kde sa čo renderuje

Kotvy: `#top` (hero), `#o-mne`, `#projekty`, `#minecraft`, `#infrastruktura`,
`#siete-skola`, `#ai`, `#kontakt`. Navigácia (`data-nav` na odkazoch) pozná len
`o-mne`, `projekty`, `minecraft`, `infrastruktura`, `kontakt`; `siete-skola` a `ai`
zdieľajú zvýraznenie s Infraštruktúrou (mapa `navKey` v `script.js`). Pridanie sekcie do scrollspy = zápis do
poľa `spySections` v `script.js`.

| Sekcia | Statické v `index.html` | Renderuje `script.js` (kontajner) |
|---|---|---|
| Hero | nadpis, lead, CTA, kostra okna stavu | `#statusInfra`, `#statusLive`, `#statusClock` (nadpis je rozdelený na slová `.w > .wi` priamo v HTML s `--k`, odhalenie zdola cez masku je čisté CSS, aby LCP nečakal na JS) |
| O mne | nadpis, odsek | `#statList` — `stats`, count-up pri zobrazení |
| Projekty | nadpis, lead | `#projectGrid` — 2 `featured` karty vedľa seba, ostatné ako zoznam riadkov |
| Minecraft | nadpis, lead, skin | `#serverList`, `#timeline` (čiara sa plní podľa scrollu, body `.tl-dot.is-lit`) |
| Infraštruktúra | nadpis, lead | `#layers` (4 poschodia + animovaný packet), `#practiceList` |
| Siete a Škola | dve karty s leadmi | `#networkList`, `#schoolList` |
| AI spoločníci | nadpis, lead | `#aiList` |
| Kontakt | celý pás | — (tlačidlo „Skopírovať meno“ + toast v `script.js`) |

### Detail projektu

`<dialog id="projectDialog">` ako bočný panel. Karta je odkaz `#projekt-<id>`; jediná cesta
otvorenia je hash (`hashchange` → `syncFromHash`), takže funguje aj priamy odkaz a tlačidlo
späť. Zatvorenie (Esc, klik mimo, krížik) ide cez `requestClose()` — ak sa hash pridal
klikom, urobí `history.back()`, inak `replaceState`. Focus sa vráti na kartu.

### Animácie a prístupnosť

- Reveal pri scrolle: `.reveal` + `--i` (stagger); aktivuje sa až keď `<head>` pridá `html.js`
  (inline skript), takže bez JS je statický obsah viditeľný.
- Hero vstup je čisté CSS (`.hero-fade`, `.wi`), nezávisí od načítania `script.js`.
- **Animácie bežia vždy, aj pri `prefers-reduced-motion: reduce`** (globálne pravidlo
  majiteľa). V CSS ani JS nesmie byť detekcia, ktorá by ich vypla.
- Slučky sú len dve a obe niečo znamenajú: pulz živej bodky a packet vo vrstvách infraštruktúry.
- Scrollspy: aktívna je posledná sekcia, ktorej vrch je nad čiarou v 38 % výšky (null len v hero). Klik na
  odkaz nastaví cieľ hneď a spy pozastaví do `scrollend` (fallback 150 ms ticha, max 1,5 s). Indikátor sa
  z neaktívneho stavu umiestni bez transition a len vybledne dnu.
- Mobilné menu (<900 px): `aria-hidden`, `inert` na `main`/`footer`, focus trap, Esc.
- Hudba sa **nespúšťa automaticky** — len plávajúce tlačidlo zvuku; stav je v
  `localStorage` (`astraksk:sound`), pri predošlom „zapnuté“ má tlačidlo tyrkysový okraj.
- Zamknutie scrollu (`html.is-locked`) kompenzuje šírku scrollbaru cez `--sb`.

## SEO

Prejdený `SecondBrain/Znalosti/Web SEO checklist.md`. Hotové: canonical bez `?v=`, jeden
`h1`, hierarchia h1 → h2 → h3 → h4–h6, `robots` meta bez noindex, robots.txt + sitemap.xml,
JSON-LD `@graph` (Person + WebSite), OG/Twitter s `og-image.jpg` 1200×630, alt texty,
`width`/`height` na obrázkoch, `loading="lazy"` pod prvou obrazovkou, dotykové ciele ≥ 48 px,
CLS 0. Limity: title má 65 znakov (formulácia je zadaná používateľom, odporúčaných ~60);
HTTPS a HSTS rieši GitHub Pages (Enforce HTTPS v nastaveniach repa, hlavičky sa z repa
nastaviť nedajú); obsah projektov, serverov a časovej osi sa renderuje JS-kou, takže
v statickom HTML ho crawler bez JS neuvidí (hero, leady a „O mne“ statické sú).

## Lokálne overenie

`python -m http.server 8765` v koreni repa. Screenshoty cez playwright-core
(headless chromium), kontrola `scrollWidth === clientWidth` pri 1440 a 390 px.

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
