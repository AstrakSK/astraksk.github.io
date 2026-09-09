const portfolioData = {
    stats: [
        { value: "6", unit: "rokov", label: "prevádzky Minecraft serverov" },
        { value: "8", unit: "", label: "vlastných projektov v registri" },
        { value: "4", unit: "jazyky", label: "v produkcii — Java, Kotlin, JavaScript, TypeScript" }
    ],

    featured: [
        {
            id: "astralys-shield",
            name: "AstralysShield",
            line: "Anti-cheat, ktorý neháda z packetov, ale overuje samotného klienta.",
            state: "vo vývoji"
        },
        {
            id: "together",
            name: "Together",
            line: "Súkromná Android aplikácia s vlastným backendom.",
            state: "v prevádzke"
        },
        {
            id: "tiertagger",
            name: "TierTagger",
            line: "Tiery z tierlistu priamo v hre — nad hlavou, v TABe aj v chate.",
            state: "v prevádzke"
        }
    ],

    timeline: [
        {
            year: "2026",
            months: [
                {
                    month: "Október",
                    events: [
                        {
                            title: "Flip skončil",
                            note: "Koniec najdlhšej etapy v pozícii co-ownera."
                        }
                    ]
                },
                {
                    month: "September",
                    events: [
                        {
                            title: "Android aplikácia dokončená",
                            note: ""
                        },
                        {
                            title: "Astralys pozastavený na dobu neurčitú",
                            note: "Projekt som začal prerábať od základov, ale súbežne bežiace projekty si vyžiadali viac času, než som čakal. Nerušim ho — nechcem ho robiť narýchlo a v polovičnej kvalite."
                        }
                    ]
                },
                {
                    month: "August",
                    events: [
                        {
                            title: "Začal vývoj Android aplikácie",
                            note: ""
                        }
                    ]
                },
                {
                    month: "Jún",
                    events: [
                        {
                            title: "AstralysShield — klientský anti-cheat",
                            note: "Doteraz najambicióznejší projekt. Serverový plugin a klientský Fabric mód, ktoré si navzájom overujú identitu. Cieľom nie je chytiť viac cheaterov, ale mať o klientovi dosť kontextu na rozumné rozhodnutie."
                        },
                        {
                            title: "AstrixAI",
                            note: "Experiment so spracovaním informácií priamo na serveri. Vo vývoji."
                        },
                        {
                            title: "ShopPulse",
                            note: ""
                        }
                    ]
                },
                {
                    month: "Máj",
                    events: [
                        {
                            title: "CZ/SK Tiers — plugin pre PvP tierlist",
                            note: "Prvý plugin, ktorý používa aj niekto iný než ja. Načítava tiery z externého API, drží ich v pamäti a vystavuje cez PlaceholderAPI do TABu, hologramov a rebríčkov."
                        },
                        {
                            title: "AntiGhostTotem",
                            note: "Rieši smrť ghost totemom — situáciu, keď hráč totem má, ale server ho kvôli latencii nezapočíta."
                        }
                    ]
                },
                {
                    month: "Apríl",
                    events: [
                        {
                            title: "Založenie Astralys.cz",
                            note: "Prvý projekt, kde nie som developer pre niekoho iného, ale staviam celok od základov — infraštruktúru, ochranu pred útokmi, pluginy aj branding."
                        },
                        {
                            title: "Developer na Fishcraft.cz, v tom istom mesiaci odchod",
                            note: "Vývoj, konfigurácia a technický rozvoj menšieho servera. Približne dva týždne po mojom odchode server postihol raid, ktorý výrazne ovplyvnil jeho ďalší vývoj."
                        }
                    ]
                }
            ]
        },
        {
            year: "2025",
            months: [
                {
                    month: "Jún",
                    events: [
                        {
                            title: "Co-owner serveru Flip (predtým FLIPSMP)",
                            note: "Zodpovednosť za technickú stránku servera, jeho správu a podiel na smerovaní projektu."
                        }
                    ]
                },
                {
                    month: "Apríl",
                    events: [
                        {
                            title: "Tensium.eu skončilo",
                            note: "Koniec projektu po období vývoja a prvých väčších skúseností s vedením servera."
                        }
                    ]
                },
                {
                    month: "Marec",
                    events: [
                        {
                            title: "Prvá proxy sieť na Velocity",
                            note: "Nasadenie Velocity a multi-server architektúry — hráči prechádzajú medzi servermi bez odpojenia. Prvý raz, keď som riešil sieť serverov, nie jeden server."
                        }
                    ]
                },
                {
                    month: "Február",
                    events: [
                        {
                            title: "tensimi sa mení na Tensium.eu",
                            note: "Rebranding a posun k väčším plánom."
                        },
                        {
                            title: "Developer, v ten istý deň co-owner serveru tensimi",
                            note: "Posun z vývoja na vedenie projektu vďaka miere zapojenia."
                        }
                    ]
                }
            ]
        },
        {
            year: "2021 — 2024",
            gap: true,
            note: "Priebežná správa a administrácia serverov. Detaily z tohto obdobia dopĺňam."
        },
        {
            year: "2020",
            months: [
                {
                    month: "Apríl",
                    events: [
                        {
                            title: "Prvý server",
                            note: "Úplný začiatok. Tu vznikol záujem o servery, konfigurácie a neskôr aj o vývoj pluginov."
                        }
                    ]
                }
            ]
        }
    ],
    servers: [
        {
            name: "Astralys.cz",
            status: "pozastavený",
            role: "Zakladateľ",
            period: "apríl — september 2026",
            intro: "Vlastný projekt stavaný od nuly — infraštruktúra, ochrana pred útokmi, vlastné pluginy aj vizuálna identita. Vývoj je pozastavený na dobu neurčitú: projekt som začal prerábať od základov, ale súbežné projekty si vyžiadali viac času, než som čakal. Zrušený nie je — nechcem ho robiť narýchlo a v polovičnej kvalite."
        },
        {
            name: "Fishcraft.cz",
            status: "ukončené",
            role: "Developer",
            period: "apríl 2026",
            intro: "Vývoj, konfigurácia a technický rozvoj menšieho servera. Krátka epizóda — nástup aj odchod v tom istom mesiaci."
        },
        {
            name: "Flip",
            status: "ukončené",
            role: "Co-owner",
            period: "jún 2025 — október 2026",
            intro: "Predtým FLIPSMP. Zodpovednosť za technickú stránku servera a podiel na jeho smerovaní. Najdlhšie obdobie v pozícii co-ownera."
        },
        {
            name: "Tensium.eu",
            status: "ukončené",
            role: "Developer, neskôr co-owner",
            period: "február — apríl 2025",
            intro: "Predtým tensimi. Server, na ktorom som prvý raz nasadil Velocity proxy a multi-server architektúru — a prvý raz riešil sieť serverov namiesto jedného."
        }
    ],
    devProjects: [
        {
            id: "astralys-shield",
            name: "AstralysShield",
            kind: "Mód + plugin",
            year: "2026",
            state: "vo vývoji",
            stack: ["Java", "Fabric", "Paper", "HMAC", "SQLite"],
            summary: "Klient-server bezpečnostný systém, ktorý serveru dá kontext o stave klienta namiesto odhadovania z packetov.",
            problem: "Serverový anti-cheat vidí len to, čo mu klient pošle, a zvyšok musí odhadovať z pohybu a packetov. Čím prísnejšie hádanie, tým viac potrestaných hráčov, ktorí nič nespravili.",
            approach: "Fabric mód na klientovi a Paper plugin na serveri si pri pripojení overia identitu a potom si priebežne potvrdzujú, že komunikuje stále ten istý, nezmenený klient. Server tak nepracuje s dohadmi, ale s overenými informáciami.",
            points: [
                "Overenie klienta pri pripojení a priebežné potvrdzovanie počas hry.",
                "Analýza načítaných módov a klientskych rozšírení v reálnom čase.",
                "Vyhodnocovanie rizika na škále namiesto rozhodnutia legit alebo cheat.",
                "Modulárna architektúra — nová detekcia sa pridáva bez prepisovania existujúcich."
            ],
            closing: "Aktívne sa vyvíja. Väčšina času nejde na detekciu, ale na obmedzovanie falošných poplachov — nesprávny ban stojí server viac než jeden neodhalený cheater."
        },
        {
            id: "together",
            name: "Together",
            kind: "Android aplikácia + backend",
            year: "2026",
            state: "v prevádzke",
            stack: ["Kotlin", "Jetpack Compose", "Room", "Spring Boot", "PostgreSQL", "WebSocket", "Docker"],
            summary: "Súkromný projekt pre uzavretý okruh používateľov. Účel ani funkcie nezverejňujem — verejná je len technická stránka.",
            problem: "",
            approach: "",
            points: [
                "Android klient v Kotline a Compose, backend v Spring Boote, oboje na vlastnom serveri v Dockeri — bez služieb tretích strán.",
                "Prenos cez WebSocket, ktorý pri výpadku prepne na REST, takže dáta dorazia aj na zlom signáli.",
                "Vlastná distribúcia aktualizácií mimo Google Play — klient si stiahne balík zo servera a pred inštaláciou overí kontrolný súčet.",
                "Lokálna databáza s reálnymi migráciami, takže aktualizácia nikdy nezmaže dáta.",
                "Diagnostický režim, ktorý pri probléme povie, čia je chyba — zariadenia, aplikácie, siete alebo servera."
            ],
            closing: "Najviac času nezobral kód, ale prípady, keď niečo zlyhalo potichu. Odvtedy si každá časť ukladá dôvod posledného zlyhania a ten sa dá zobraziť."
        },
        {
            id: "tiertagger",
            name: "CZSKTiers TierTagger",
            kind: "Klientský mód",
            year: "2026",
            state: "v prevádzke",
            stack: ["Java", "Fabric", "Mod Menu"],
            summary: "Zobrazuje PvP tiery priamo v hre — nad hlavou, v TABe, v chate aj na karte hráča.",
            problem: "Tiery boli len na webe. Kto ich chcel vidieť počas hry, musel prepínať do prehliadača — čiže presne vo chvíli, keď je tá informácia najužitočnejšia, nebola po ruke.",
            approach: "Mód beží výhradne na klientovi — na server neposiela nič, len dokresľuje to, čo hráč aj tak vidí. Dáta si sťahuje sám a drží ich v pamäti, takže tier je nad hlavou hneď, nie po sekunde čakania.",
            points: [
                "Tier za nickom nad hlavou, v TABe a v chate.",
                "Karta hráča so všetkými deviatimi kitmi a bodmi.",
                "Obľúbení hráči — hlásenie, kto z nich je práve na serveri.",
                "Nastavenia cez Mod Menu, dáta sa cachujú a obnovujú na povel."
            ],
            closing: ""
        },
        {
            id: "czsktiers",
            name: "CZSKTiers",
            kind: "Serverový plugin",
            year: "2026",
            state: "v prevádzke",
            stack: ["Java", "Paper API", "PlaceholderAPI", "JSON API"],
            summary: "Načíta PvP tiery z externého API a sprístupní ich celému serveru cez PlaceholderAPI.",
            problem: "Tiery boli v externej databáze. Aby sa dali použiť v TABe, na hologramoch alebo v NPC, musel by ich niekto ručne prepisovať.",
            approach: "Plugin si dáta stiahne, drží ich v pamäti a pravidelne obnovuje. Server sa tak pýta pamäte, nie siete — placeholder v TABe nesmie čakať na HTTP odpoveď.",
            points: [
                "Placeholdery pre TAB, hologramy, NPC a rebríčky.",
                "Rebríčky celkovo aj pre jednotlivé PvP módy.",
                "Podpora subtierov.",
                "Príkazy na reload, kontrolu stavu a vynútenú synchronizáciu."
            ],
            closing: "Prvý plugin, ktorý používa aj niekto iný než ja — čo znamenalo naučiť sa písať konfiguráciu a chybové hlášky pre cudzieho admina."
        },
        {
            id: "shield-lite",
            name: "AstralysShield-Lite",
            kind: "Serverový plugin",
            year: "2026",
            state: "v prevádzke",
            stack: ["Java", "Paper", "ProtocolLib"],
            summary: "Odhaľuje podvrhnutého klienta bez toho, aby si hráč čokoľvek inštaloval.",
            problem: "AstralysShield vyžaduje mód na klientovi. To na verejnom serveri nikto nespraví — potreboval som variant, ktorý funguje na hocikom.",
            approach: "Namiesto jedného spoľahlivého signálu skladá viac slabších: čo klient tvrdí, že je, ako sa hlási na plugin kanáloch a ako sa správa v čase. Jeden signál sa dá podvrhnúť ľahko, všetky naraz podstatne ťažšie.",
            points: [
                "Funguje bez klientskej časti, stačí plugin na serveri.",
                "Kombinuje viac nezávislých signálov do jedného výsledku.",
                "História kontrol a prehľad zachytených klientov.",
                "Príkazy na manuálnu kontrolu konkrétneho hráča."
            ],
            closing: ""
        },
        {
            id: "chatshield",
            name: "ChatShield",
            kind: "Serverový plugin",
            year: "2026",
            state: "v prevádzke",
            stack: ["Java", "Paper", "PlaceholderAPI"],
            summary: "Ochrana chatu — filtre, kanály a tresty, ktoré sa stupňujú podľa opakovania.",
            problem: "Filter, ktorý za prvý aj desiaty priestupok dá rovnaký trest, je zbytočne tvrdý na náhodu a zbytočne mäkký na toho, kto to robí naschvál.",
            approach: "Priestupky sa pamätajú a trest sa stupňuje. Chat je rozdelený na kanály, takže sa dá moderovať oddelene podľa toho, kde sa píše.",
            points: [
                "Filtre na nadávky, reklamu a spam.",
                "Stupňovanie trestov podľa histórie hráča.",
                "Oddelené chat kanály.",
                "Napojenie na AstralysShield, ak beží na serveri."
            ],
            closing: ""
        },
        {
            id: "combatmanager",
            name: "CombatManager",
            kind: "Serverový plugin",
            year: "2026",
            state: "v prevádzke",
            stack: ["Java", "Paper", "Vault"],
            summary: "Combat tag s odpočtom, tresty za odpojenie v boji, štatistiky a bounty.",
            problem: "Hráč, ktorý sa v prehratom súboji odpojí, si odnesie veci a súper nedostane nič. Bez postihu to robí každý.",
            approach: "Po zásahu sa hráč označí ako v boji a nad hotbarom mu beží odpočet. Odpojenie počas neho má následok — od vyhodenia vecí až po smrť, podľa nastavenia servera.",
            points: [
                "Odpočet nad hotbarom, voliteľne aj boss bar.",
                "Štyri režimy trestu za odpojenie v boji.",
                "Zákaz letu, elytry a únikových príkazov počas boja.",
                "Prepínač PvP, štatistiky, rebríček a bounty."
            ],
            closing: ""
        },
        {
            id: "antigang",
            name: "AstralysAntiGang",
            kind: "Serverový plugin",
            year: "2026",
            state: "v prevádzke",
            stack: ["Java", "Paper", "Discord webhook"],
            summary: "Rozpozná, keď na jedného hráča útočí viacero naraz, a upozorní staff.",
            problem: "Gang fighty sa na serveri riešia ťažko, lebo kým sa staff dozvie, že sa niečo deje, je po všetkom.",
            approach: "Plugin sleduje PvP zásahy vrátane projektilov a pre každú obeť si drží prehľad útočníkov. Keď ich počet prekročí hranicu, situáciu označí a pošle upozornenie. Zásahy zrušené v safe zónach sa nepočítajú.",
            points: [
                "Detekcia priamych zásahov aj projektilov.",
                "Nastaviteľná hranica počtu útočníkov a časový limit.",
                "Upozornenie staffu priamo v hre aj cez Discord.",
                "Vlastné príkazy spustené pri zachytení."
            ],
            closing: ""
        }
    ],
    stack: [
        {
            layer: "Reverzná proxy",
            tech: "Caddy",
            note: "Rozdeľuje prevádzku medzi služby podľa domény a sama si obnovuje certifikáty."
        },
        {
            layer: "Aplikácie",
            tech: "Spring Boot · Node.js",
            note: "Každá služba vo vlastnom kontajneri, s vlastnou konfiguráciou a vlastným prístupom."
        },
        {
            layer: "Databázy",
            tech: "PostgreSQL",
            note: "Oddelené databázy s vlastnými prihláseniami. Zmeny schémy len cez migrácie."
        },
        {
            layer: "Server",
            tech: "Ubuntu · Docker",
            note: "Von počúva len to, čo počúvať musí. Prístup výhradne cez SSH kľúč, heslo je vypnuté."
        }
    ],

    practices: [
        "Von sú otvorené len porty, ktoré musia byť — zvyšok sa k službám dostane len zvnútra.",
        "Prihlásenie na server je možné iba kľúčom. Heslá do SSH sú vypnuté.",
        "Heslá sa nikde neukladajú v čitateľnej podobe, len ako odtlačok.",
        "Certifikáty sa obnovujú automaticky, nie ručne pred vypršaním.",
        "Nasadenie je jeden príkaz. Čo sa robí ručne, to sa raz spraví zle.",
        "Ak niečo môže zlyhať potichu, uloží si dôvod — inak vyzerá rozbitý stav rovnako ako funkčný."
    ],

    network: [
        "Adresovanie a rozdelenie sietí — masky, prefixy a návrh rozsahov.",
        "Konfigurácia smerovačov a prepínačov v Cisco Packet Traceri.",
        "Prístupové zoznamy a základné filtrovanie prevádzky.",
        "DNS a smerovanie domén vrátane nasadenia za CDN.",
        "Riešenie výpadkov konektivity od kábla po aplikačnú vrstvu."
    ],

    school: [
        "Informačné a sieťové technológie, SPŠE Zochova Bratislava.",
        "Siete a Cisco Networking Academy.",
        "Programovanie — Python, Java, základy práce s Arduinom.",
        "Elektrotechnika — obvody, Ohmov a Kirchhoffove zákony, polovodiče.",
        "Operačné systémy a systémové volania."
    ]
};

/* ---------- pomocné ---------- */

document.documentElement.classList.add("js");

const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));

const elements = {
    enterScreen: document.getElementById("enterScreen"),
    bgMusic: document.getElementById("bgMusic"),
    soundToggle: document.getElementById("soundToggle"),
    breadcrumb: document.getElementById("breadcrumb"),
    contentScroll: document.getElementById("contentScroll"),
    statReadout: document.getElementById("statReadout"),
    featuredList: document.getElementById("featuredList"),
    timelineList: document.getElementById("timelineList"),
    minecraftProjectList: document.getElementById("minecraftProjectList"),
    devProjectList: document.getElementById("devProjectList"),
    devProjectDetail: document.getElementById("devProjectDetail"),
    stackDiagram: document.getElementById("stackDiagram"),
    practiceList: document.getElementById("practiceList"),
    networkList: document.getElementById("networkList"),
    schoolList: document.getElementById("schoolList"),
    avatarDeco: document.querySelector(".avatar-deco")
};

const sectionLabels = {
    home: "Domov",
    minecraft: "Minecraft",
    dev: "Vývoj",
    infra: "Infraštruktúra",
    network: "Siete",
    school: "Škola"
};

/* ---------- vykreslenie ---------- */

function renderStats() {
    elements.statReadout.innerHTML = portfolioData.stats.map((stat, index) => `
        <div class="stat reveal" style="--i:${index}">
            <dt class="stat-value"><span class="stat-num" data-count="${esc(stat.value)}">0</span>${stat.unit ? `<span class="stat-unit">${esc(stat.unit)}</span>` : ""}</dt>
            <dd class="stat-label">${esc(stat.label)}</dd>
        </div>
    `).join("");
}

function renderFeatured() {
    elements.featuredList.innerHTML = portfolioData.featured.map((item, index) => `
        <button class="row row-featured reveal" type="button" data-project-id="${esc(item.id)}" style="--i:${index}">
            <span class="row-name">${esc(item.name)}</span>
            <span class="row-text">${esc(item.line)}</span>
            <span class="state state-${item.state === "vo vývoji" ? "wip" : "live"}">${esc(item.state)}</span>
            <span class="row-arrow" aria-hidden="true"></span>
        </button>
    `).join("");
}

function renderTimeline() {
    elements.timelineList.innerHTML = portfolioData.timeline.map((block) => {
        if (block.gap) {
            return `
                <section class="timeline-year timeline-gap">
                    <h4 class="timeline-year-label">${esc(block.year)}</h4>
                    <p class="timeline-gap-note">${esc(block.note)}</p>
                </section>
            `;
        }

        return `
            <section class="timeline-year">
                <h4 class="timeline-year-label">${esc(block.year)}</h4>
                <div class="timeline-months">
                    ${block.months.map((monthBlock) => `
                        <div class="timeline-month">
                            <h5 class="timeline-month-label">${esc(monthBlock.month)}</h5>
                            <div class="timeline-events">
                                ${monthBlock.events.map((event, index) => `
                                    <article class="timeline-entry reveal" style="--i:${index}">
                                        <h6 class="timeline-entry-title">${esc(event.title)}</h6>
                                        ${event.note ? `<p class="note">${esc(event.note)}</p>` : ""}
                                    </article>
                                `).join("")}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </section>
        `;
    }).join("");
}

function renderServers() {
    elements.minecraftProjectList.innerHTML = portfolioData.servers.map((server, index) => `
        <article class="server reveal" style="--i:${index}">
            <header class="server-head">
                <h4>${esc(server.name)}</h4>
                <span class="state state-${server.status === "aktívny" ? "live" : server.status === "pozastavený" ? "wip" : "past"}">${esc(server.status)}</span>
            </header>
            <p class="server-meta">${esc(server.role)} · ${esc(server.period)}</p>
            <p class="note">${esc(server.intro)}</p>
        </article>
    `).join("");
}

function renderDevIndex() {
    elements.devProjectList.innerHTML = portfolioData.devProjects.map((project, index) => `
        <button class="row row-project reveal" type="button" role="listitem" data-project-id="${esc(project.id)}" style="--i:${index}">
            <span class="row-name">${esc(project.name)}</span>
            <span class="row-kind">${esc(project.kind)}</span>
            <span class="row-text">${esc(project.summary)}</span>
            <span class="row-year">${esc(project.year)}</span>
            <span class="row-arrow" aria-hidden="true"></span>
        </button>
    `).join("");
}

function renderDevDetail(project) {
    elements.devProjectDetail.innerHTML = `
        <header class="detail-head">
            <h2 class="detail-title">${esc(project.name)}</h2>
            <p class="detail-meta">${esc(project.kind)} · ${esc(project.year)} · ${esc(project.state)}</p>
        </header>

        <p class="detail-summary">${esc(project.summary)}</p>

        ${project.problem || project.approach ? `
        <div class="detail-body">
            <section class="detail-block">
                <h3>Problém</h3>
                <p>${esc(project.problem)}</p>
            </section>

            <section class="detail-block">
                <h3>Riešenie</h3>
                <p>${esc(project.approach)}</p>
            </section>
        </div>` : ""}

        <ul class="point-list">
            ${project.points.map((point) => `<li>${esc(point)}</li>`).join("")}
        </ul>

        ${project.closing ? `<p class="detail-closing">${esc(project.closing)}</p>` : ""}

        <ul class="stack-tags">
            ${project.stack.map((tech) => `<li>${esc(tech)}</li>`).join("")}
        </ul>
    `;
}

function renderStack() {
    elements.stackDiagram.innerHTML = portfolioData.stack.map((row, index) => `
        <div class="stack-row reveal" style="--i:${index}">
            <span class="stack-layer">${esc(row.layer)}</span>
            <span class="stack-tech">${esc(row.tech)}</span>
            <span class="stack-note">${esc(row.note)}</span>
        </div>
    `).join("");
}

function fillList(node, items) {
    node.innerHTML = items
        .map((item, index) => `<li class="reveal" style="--i:${index}">${esc(item)}</li>`)
        .join("");
}

renderStats();
renderFeatured();
renderTimeline();
renderServers();
renderDevIndex();
renderStack();
fillList(elements.practiceList, portfolioData.practices);
fillList(elements.networkList, portfolioData.network);
fillList(elements.schoolList, portfolioData.school);

/* ---------- dekorácia avatara ---------- */
/* Zobrazí sa, len ak assets/avatar-deco.png naozaj existuje. */
if (elements.avatarDeco) {
    const decoSrc = elements.avatarDeco.dataset.deco;
    const probe = new Image();
    probe.onload = () => {
        elements.avatarDeco.src = decoSrc;
        elements.avatarDeco.hidden = false;
    };
    probe.src = decoSrc;
}

/* ---------- navigácia ---------- */

const menuButtons = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");
const devViews = document.querySelectorAll(".dev-view");
const sectionIds = Array.from(menuButtons).map((button) => button.dataset.section);

let currentSection = "home";

function setBreadcrumb(text) {
    if (elements.breadcrumb) elements.breadcrumb.textContent = text;
    document.title = text === "Domov" ? "Leonardo | AstrakSK" : `${text} · AstrakSK`;
}

function showSection(sectionId, { updateHash = true } = {}) {
    const page = document.getElementById(sectionId);
    if (!page) return;

    currentSection = sectionId;

    menuButtons.forEach((button) => {
        const isActive = button.dataset.section === sectionId;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
    });

    pages.forEach((item) => item.classList.toggle("active", item.id === sectionId));
    setBreadcrumb(sectionLabels[sectionId]);
    window.scrollTo({ top: 0, behavior: "auto" });
    replayReveals(page);
    updateScrollHint();

    if (sectionId === "dev") showDevView("index", null, { updateHash: false });
    if (updateHash) location.hash = sectionId === "home" ? "" : sectionId;
}

function showDevView(viewName, project = null, { updateHash = true } = {}) {
    if (project) renderDevDetail(project);

    devViews.forEach((view) => {
        const isActive = view.dataset.devView === viewName;
        view.classList.toggle("active", isActive);
        if (isActive) replayReveals(view);
    });

    setBreadcrumb(viewName === "detail" && project
        ? `Vývoj / ${project.name}`
        : sectionLabels.dev);

    window.scrollTo({ top: 0, behavior: "auto" });

    if (updateHash) {
        location.hash = viewName === "detail" && project ? `dev/${project.id}` : "dev";
    }
}

function openProject(projectId, options = {}) {
    const project = portfolioData.devProjects.find((item) => item.id === projectId);
    if (!project) return false;

    if (currentSection !== "dev") showSection("dev", { updateHash: false });
    showDevView("detail", project, options);
    return true;
}

menuButtons.forEach((button) => {
    button.addEventListener("click", () => showSection(button.dataset.section));
});

/* otvorenie projektu z ktoréhokoľvek zoznamu */
document.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project-id]");
    if (card) {
        openProject(card.dataset.projectId);
        return;
    }

    const route = event.target.closest("[data-dev-route]");
    if (route) showDevView(route.dataset.devRoute);
});

/* rozbaľovacie bloky — plynulá výška namiesto skoku */

function toggleFold(trigger) {
    const body = document.getElementById(trigger.getAttribute("aria-controls"));
    const willOpen = trigger.getAttribute("aria-expanded") !== "true";

    trigger.setAttribute("aria-expanded", String(willOpen));

    if (reducedMotion()) {
        body.hidden = !willOpen;
        if (willOpen) replayReveals(body);
        return;
    }

    body.style.overflow = "hidden";

    if (willOpen) {
        body.hidden = false;
        replayReveals(body);
        const target = body.scrollHeight;
        body.style.height = "0px";
        requestAnimationFrame(() => {
            body.style.height = `${target}px`;
        });
    } else {
        body.style.height = `${body.scrollHeight}px`;
        requestAnimationFrame(() => {
            body.style.height = "0px";
        });
    }

    const finish = (event) => {
        if (event.propertyName !== "height") return;
        body.removeEventListener("transitionend", finish);
        body.style.height = "";
        body.style.overflow = "";
        if (!willOpen) body.hidden = true;
        else updateScrollHint();
    };

    body.addEventListener("transitionend", finish);
}

document.querySelectorAll(".fold-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => toggleFold(trigger));
});

/* odkazy na konkrétnu sekciu alebo projekt */
function applyHash({ updateHash = false } = {}) {
    const raw = location.hash.replace(/^#\/?/, "");
    if (!raw) {
        showSection("home", { updateHash });
        return;
    }

    const [section, projectId] = raw.split("/");

    if (section === "dev" && projectId) {
        if (openProject(projectId, { updateHash })) return;
    }

    if (sectionIds.includes(section)) {
        showSection(section, { updateHash });
        return;
    }

    showSection("home", { updateHash });
}

window.addEventListener("hashchange", () => applyHash());

/* klávesnica: 1-6 prepína sekcie, Escape sa vracia zo detailu projektu */
document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) return;
    if (!elements.enterScreen.classList.contains("hidden")) return;

    if (event.key === "Escape") {
        const detailOpen = document.querySelector('.dev-view[data-dev-view="detail"].active');
        if (detailOpen) showDevView("index");
        return;
    }

    const index = Number(event.key) - 1;
    if (Number.isInteger(index) && index >= 0 && index < sectionIds.length) {
        showSection(sectionIds[index]);
    }
});

/* ---------- hudba ---------- */

const SOUND_KEY = "astraksk:sound";
let soundOn = true;

try {
    soundOn = localStorage.getItem(SOUND_KEY) !== "off";
} catch (error) {
    soundOn = true;
}

function paintSoundButton() {
    elements.soundToggle.querySelector("use")
        .setAttribute("href", soundOn ? "#i-sound" : "#i-muted");
    elements.soundToggle.setAttribute("aria-pressed", String(soundOn));
    elements.soundToggle.setAttribute("aria-label", soundOn ? "Vypnúť hudbu" : "Zapnúť hudbu");
}

function applySound() {
    if (soundOn) {
        elements.bgMusic.volume = 0.22;
        elements.bgMusic.play().catch(() => {});
    } else {
        elements.bgMusic.pause();
    }
    paintSoundButton();
}

elements.soundToggle.addEventListener("click", () => {
    soundOn = !soundOn;
    try {
        localStorage.setItem(SOUND_KEY, soundOn ? "on" : "off");
    } catch (error) {
        /* súkromný režim — voľba platí len do zatvorenia karty */
    }
    applySound();
});

paintSoundButton();

/* ---------- vstupná obrazovka ---------- */

function enterWebsite() {
    if (elements.enterScreen.classList.contains("hidden")) return;

    elements.enterScreen.classList.add("hidden");
    applySound();
    startParticles();
}

elements.enterScreen.addEventListener("pointerdown", enterWebsite);
elements.enterScreen.addEventListener("click", enterWebsite);
elements.enterScreen.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        enterWebsite();
    }
});

const canvas = document.getElementById("particles");
const context = canvas.getContext("2d");
const particles = [];
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const CONNECTION_DISTANCE = 100;
const MAX_CONNECTIONS = 1;
const CONNECTION_REFRESH_RATE = 10;

let cachedConnections = [];
let animationFrame = 0;
let animationRunning = false;
let renderedFrames = 0;
let previousFrameTime = 0;
let resizeTimer;

function particleLimit() {
    if (window.innerWidth < 720) return 16;
    if (window.innerWidth < 1440) return 40;
    return 50;
}

function targetFrameInterval() {
    if (window.innerWidth < 720) return 1000 / 30;
    if (window.innerWidth < 1440) return 1000 / 40;
    return 1000 / 50;
}

function createParticle() {
    return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.55,
        speedX: (Math.random() - 0.5) * 0.26,
        speedY: (Math.random() - 0.5) * 0.26,
        opacity: Math.random() * 0.38 + 0.14
    };
}

function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.35);
    canvas.width = Math.floor(window.innerWidth * pixelRatio);
    canvas.height = Math.floor(window.innerHeight * pixelRatio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const desiredCount = particleLimit();
    while (particles.length < desiredCount) particles.push(createParticle());
    particles.length = desiredCount;
    cachedConnections = buildConnections();
}

function buildConnections() {
    const grid = new Map();
    const connections = [];
    const usedPairs = new Set();

    particles.forEach((particle, index) => {
        const key = `${Math.floor(particle.x / CONNECTION_DISTANCE)},${Math.floor(particle.y / CONNECTION_DISTANCE)}`;
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push(index);
    });

    particles.forEach((particle, firstIndex) => {
        const column = Math.floor(particle.x / CONNECTION_DISTANCE);
        const row = Math.floor(particle.y / CONNECTION_DISTANCE);
        const nearby = [];

        for (let xOffset = -1; xOffset <= 1; xOffset += 1) {
            for (let yOffset = -1; yOffset <= 1; yOffset += 1) {
                const cell = grid.get(`${column + xOffset},${row + yOffset}`);
                if (!cell) continue;

                cell.forEach((secondIndex) => {
                    if (secondIndex === firstIndex) return;
                    const second = particles[secondIndex];
                    const dx = particle.x - second.x;
                    const dy = particle.y - second.y;
                    const distanceSquared = dx * dx + dy * dy;

                    if (distanceSquared < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
                        nearby.push({ secondIndex, distanceSquared });
                    }
                });
            }
        }

        nearby.sort((a, b) => a.distanceSquared - b.distanceSquared);

        nearby.slice(0, MAX_CONNECTIONS).forEach(({ secondIndex, distanceSquared }) => {
            const pair = firstIndex < secondIndex
                ? `${firstIndex}:${secondIndex}`
                : `${secondIndex}:${firstIndex}`;

            if (usedPairs.has(pair)) return;
            usedPairs.add(pair);
            connections.push({ firstIndex, secondIndex, distanceSquared });
        });
    });

    return connections;
}

function drawParticleFrame(updatePositions) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach((particle) => {
        if (updatePositions) {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0) particle.x = window.innerWidth;
            if (particle.x > window.innerWidth) particle.x = 0;
            if (particle.y < 0) particle.y = window.innerHeight;
            if (particle.y > window.innerHeight) particle.y = 0;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(153, 112, 255, ${particle.opacity})`;
        context.fill();
    });

    if (renderedFrames % CONNECTION_REFRESH_RATE === 0) {
        cachedConnections = buildConnections();
    }

    cachedConnections.forEach(({ firstIndex, secondIndex, distanceSquared }) => {
        const distance = Math.sqrt(distanceSquared);
        if (distance >= CONNECTION_DISTANCE) return;

        const first = particles[firstIndex];
        const second = particles[secondIndex];
        const opacity = 0.08 * (1 - distance / CONNECTION_DISTANCE);
        
        context.beginPath();
        context.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
        context.lineWidth = 0.6;
        context.moveTo(first.x, first.y);
        context.lineTo(second.x, second.y);
        context.stroke();
    });
}

function animateParticles(timestamp) {
    if (!animationRunning) return;

    if (timestamp - previousFrameTime >= targetFrameInterval()) {
        previousFrameTime = timestamp;
        renderedFrames += 1;
        drawParticleFrame(true);
    }

    animationFrame = requestAnimationFrame(animateParticles);
}

function startParticles() {
    if (animationRunning || document.hidden || motionQuery.matches) return;
    animationRunning = true;
    animationFrame = requestAnimationFrame(animateParticles);
}

function stopParticles() {
    animationRunning = false;
    cancelAnimationFrame(animationFrame);
}

resizeCanvas();
drawParticleFrame(false);

window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        stopParticles();
        resizeCanvas();
        drawParticleFrame(false);
        if (elements.enterScreen.classList.contains("hidden")) startParticles();
    }, 150);
}, { passive: true });

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        stopParticles();
    } else if (elements.enterScreen.classList.contains("hidden")) {
        startParticles();
    }
}, { passive: true });

motionQuery.addEventListener("change", () => {
    stopParticles();
    drawParticleFrame(false);
    if (!motionQuery.matches && elements.enterScreen.classList.contains("hidden")) startParticles();
}, { passive: true });

/* ================= animácie a šípky ================= */

function reducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* --- postupné odkrývanie obsahu --- */

const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
            if (entry.target.classList.contains("stat")) countUp(entry.target);
        });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .08 })
    : null;

function watchReveals(scope = document) {
    const items = scope.querySelectorAll(".reveal:not(.in)");

    if (!revealObserver || reducedMotion()) {
        items.forEach((item) => {
            item.classList.add("in");
            if (item.classList.contains("stat")) countUp(item);
        });
        return;
    }

    items.forEach((item) => revealObserver.observe(item));
}

/* Pri prepnutí sekcie alebo rozbalení bloku sa nábeh prehrá znova. */
function replayReveals(scope) {
    if (!scope) return;

    scope.querySelectorAll(".reveal").forEach((item) => {
        item.classList.remove("in");
        const number = item.querySelector(".stat-num");
        if (number) number.textContent = "0";
    });

    watchReveals(scope);
}

/* --- naratávanie čísel --- */

function countUp(stat) {
    const node = stat.querySelector(".stat-num");
    if (!node) return;

    const target = Number(node.dataset.count);
    if (!Number.isFinite(target)) return;

    if (reducedMotion()) {
        node.textContent = String(target);
        return;
    }

    const duration = 900;
    const started = performance.now();

    const step = (now) => {
        const progress = Math.min((now - started) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = String(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
}

/* --- šípka, keď je na stránke ešte obsah nižšie --- */

const scrollHint = document.createElement("button");
scrollHint.className = "scroll-hint";
scrollHint.type = "button";
scrollHint.setAttribute("aria-label", "Posunúť nižšie");
scrollHint.innerHTML = '<span class="scroll-hint-arrow" aria-hidden="true"></span>';
document.body.appendChild(scrollHint);

scrollHint.addEventListener("click", () => {
    window.scrollBy({
        top: Math.round(window.innerHeight * .82),
        behavior: reducedMotion() ? "auto" : "smooth"
    });
});

function updateScrollHint() {
    const remaining = document.documentElement.scrollHeight
        - window.scrollY
        - window.innerHeight;

    scrollHint.classList.toggle("visible", remaining > 120);
}

window.addEventListener("scroll", updateScrollHint, { passive: true });
window.addEventListener("resize", updateScrollHint, { passive: true });

/* Výška stránky sa mení aj bez scrollu — rozbalením bloku, prepnutím sekcie,
   doťahaním fontu. Bez tohto sa šípka objaví až pri prvom posunutí. */
if ("ResizeObserver" in window) {
    new ResizeObserver(() => updateScrollHint()).observe(document.body);
}

watchReveals();
applyHash();
updateScrollHint();
