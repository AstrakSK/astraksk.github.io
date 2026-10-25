const portfolioData = {
    stats: [
        { value: "6", unit: "rokov", label: "prevádzky Minecraft serverov" },
        { source: "projects", unit: "", label: "vlastných projektov v registri" },
        { source: "languages", unit: "", label: "" }
    ],

    featured: [
        {
            id: "astralys-shield",
            name: "AstralysShield",
            line: "Anti-cheat, ktorý neháda z packetov, ale overuje samotného klienta.",
            state: "vo vývoji"
        },
        {
            id: "astralys-lens",
            name: "AstralysLens",
            line: "Klip z podozrivého momentu, ktorý si staff prehrá v 3D.",
            state: "vo vývoji"
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
                            title: "Spoluzakladateľ Rifted",
                            note: "Nový CZ/SK survival SMP. Staviam jeho technologický základ; server ešte nebeží."
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
                },
                {
                    month: "Február",
                    events: [
                        {
                            title: "Flip skončil",
                            note: "Koniec najdlhšej etapy v pozícii co-ownera."
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
            name: "Rifted",
            status: "v príprave",
            role: "Spoluzakladateľ",
            period: "október 2026 —",
            intro: "Český a slovenský survival SMP, ktorý stavám s kamarátmi. Mám na starosti technologický základ projektu, na ktorom stavia aj technológia z Astralys. Server ešte nebeží."
        },
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
            period: "jún 2025 — február 2026",
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
            id: "astralys-lens",
            name: "AstralysLens",
            kind: "Plugin + webové rozhranie",
            year: "2026",
            state: "vo vývoji",
            stack: ["Java", "Paper", "PacketEvents", "Javalin", "SQLite", "React", "TypeScript", "three.js"],
            summary: "Nástroj pre staff: pri podozrení uloží klip okolia hráča a prehrá ho v 3D vo webovom rozhraní, ktoré servíruje samotný plugin.",
            problem: "Alert anti-cheatu povie, že niečo vyzerá zle, ale nie čo sa naozaj stalo. Staff potom rozhoduje naslepo alebo hľadá moment v nahrávke.",
            approach: "Plugin priebežne drží v pamäti krátky záznam okolia sledovaných hráčov a na disk ho uloží až pri spúšťači z anti-cheatu. Klip sa potom prehrá v prehliadači s dosahom, smerom pohľadu a grafmi. Webové rozhranie beží v tom istom jari, nepotrebuje samostatný server.",
            points: [
                "Záznam z paketov, nie z ticku, takže sa zachytia aj viaceré rotácie za jeden tick.",
                "Dosah sa vyhodnocuje ako interval podľa pingu a verdikt sa opiera o dolnú hranicu — o najpriaznivejšie vysvetlenie pre hráča.",
                "3D prehrávač s lúčom pohľadu, trajektóriou, časovou osou a krokovaním po ticku.",
                "Prihlásenie cez jednorazový odkaz z hry, bez hesiel.",
                "Lens Score slúži len na triedenie fronty, nikdy ako dôvod na ban."
            ],
            closing: "Najviac práce nie je zachytiť dáta, ale nepovedať o hráčovi viac, než z nich naozaj vyplýva."
        },
        {
            id: "astralys-antiesp",
            name: "AstralysAntiESP",
            kind: "Serverový plugin",
            year: "2026",
            state: "vo vývoji",
            stack: ["Kotlin", "Gradle", "Paper", "PacketEvents"],
            summary: "Skrýva pred klientom to, čo hráč zo svojho oka nevidí — entity za stenou, truhly v podzemí — takže ESP a freecam nemajú čo ukázať.",
            problem: "ESP a freecam klienty nepotrebujú nič hackovať: stačí im, že server pošle klientovi všetko, aj to, čo je za stenou.",
            approach: "Plugin počíta viditeľnosť raytracom a cez filter paketov entity pred klientom skryje; keď prídu do dohľadu, server ich znova normálne vytvorí. Nepoužíva hideEntity, ktoré rozbíja tab, podpísaný chat a iné pluginy. Pri neistote radšej ukáže, než skryje.",
            points: [
                "Štyri úrovne od ľahkej po maximálnu určujú, čo sa skrýva a ako často.",
                "Skrývanie block entít a cenných blokov a maskovanie podzemia.",
                "Adaptívny governor natiahne interval, keď je server preťažený.",
                "Zvuky, častice a zdravie sa spoofujú tiež, pridaná je podpora Bedrocku."
            ],
            closing: "Všetky fázy som otestoval s reálnym klientom."
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
            stack: ["Java", "Fabric", "Stonecutter", "Mixin", "Mod Menu"],
            summary: "Zobrazuje PvP tiery priamo v hre — nad hlavou, v TABe, v chate aj na karte hráča.",
            problem: "Tiery boli len na webe. Kto ich chcel vidieť počas hry, musel prepínať do prehliadača — čiže presne vo chvíli, keď je tá informácia najužitočnejšia, nebola po ruke.",
            approach: "Mód beží výhradne na klientovi — na server neposiela nič, len dokresľuje to, čo hráč aj tak vidí. Dáta si sťahuje sám a drží ich v pamäti, takže tier je nad hlavou hneď, nie po sekunde čakania. Zdrojom sú statické JSON snímky tierlistu, ktoré sa obnovujú zhruba každé dve minúty.",
            points: [
                "Tier za nickom nad hlavou, v TABe a v chate.",
                "Karta hráča so všetkými deviatimi kitmi a bodmi.",
                "Obľúbení hráči — hlásenie, kto z nich je práve na serveri.",
                "Nastavenia cez Mod Menu, dáta sa cachujú a obnovujú na povel.",
                "Jeden zdroják pre dvanásť verzií Minecraftu (1.21 – 1.21.11) cez Stonecutter, port pre Minecraft 26.x je samostatný projekt.",
                "Ikony kitov idú vlastným fontom, nie textúrami z cudzích módov."
            ],
            closing: ""
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
            id: "deluxecombat",
            name: "DeluxeCombat",
            kind: "Serverový plugin",
            year: "2026",
            state: "vo vývoji",
            stack: ["Java", "Paper"],
            summary: "Fork pluginu DeluxeCombat upravený na vlastné potreby — combat tag a ochrana pred odpojením počas boja.",
            problem: "",
            approach: "",
            points: [
                "Combat tag: hráč je po zásahu označený ako v boji.",
                "Ochrana pred odpojením počas boja."
            ],
            closing: ""
        },
        {
            id: "antigang",
            name: "AstralysAntiGang",
            kind: "Serverový plugin",
            year: "2026",
            state: "v prevádzke",
            stack: ["Kotlin", "Gradle", "Paper", "SQLite", "Discord webhook"],
            summary: "Rozpozná, keď na jedného hráča útočí viacero naraz, a upozorní staff.",
            problem: "Gang fighty sa na serveri riešia ťažko, lebo kým sa staff dozvie, že sa niečo deje, je po všetkom.",
            approach: "Plugin sleduje PvP zásahy vrátane projektilov a pre každú obeť si drží okno útočníkov. Keď ich počet prekročí hranicu, súboj označí a pošle upozornenie. Detekčný engine je čistý Kotlin bez Bukkit typov, takže sa dá testovať bez servera.",
            points: [
                "Dve úrovne závažnosti — upozornenie a kritické — s eskaláciou a vlastnými akciami.",
                "Filter proti bitkám všetci proti všetkým a tímovým súbojom, aby nevznikali falošné poplachy.",
                "Keď sa gang rozpadne a zloží znova, ide o nový súboj; zásahy v zakázaných regiónoch sa nepočítajú.",
                "História a štatistiky v SQLite, príkazy na info, teleport a vyhľadanie.",
                "Upozornenie staffu priamo v hre aj ako Discord embed."
            ],
            closing: "Prepísané z Javy na Kotlin a pokryté 195 unit testami. Na ostrom serveri zatiaľ neoverené."
        },
        {
            id: "astralys-auth",
            name: "AstralysAuth",
            kind: "Serverový plugin",
            year: "2026",
            state: "vo vývoji",
            stack: ["Java", "Kotlin", "Gradle", "Paper", "Velocity", "PlaceholderAPI"],
            summary: "Fork pluginu AuthMe (AuthMeReloaded) upravený pre Astralys — prihlasovanie a registrácia na offline serveri s limbo svetom, captchou a postupnými banmi.",
            problem: "Na offline serveri hráča nič neoveruje, preto potrebuje prihlásenie. Upstream plugin pokrýva základ, mne chýbala izolácia neprihlásených hráčov a prísnejšia ochrana účtov.",
            approach: "Držím vlastnú vetvu nad upstreamom. Pri aktualizácii robím merge, nie prepis súborov, aby zostala čitateľná história vlastných úprav.",
            points: [
                "Limbo svet: neprihlásení hráči sú izolovaní od zvyšku servera.",
                "Captcha v inventári a kontrola sily hesla pri registrácii.",
                "Postupne dlhšie bany za zlé heslo.",
                "Ochrana prémiových mien a admin príkazy na históriu pripojení.",
                "PlaceholderAPI hook, napríklad animovaný stav prihlásenia."
            ],
            closing: ""
        },
        {
            id: "astralys-client",
            name: "Astralys Client",
            kind: "Klient + launcher",
            year: "2026",
            state: "vo vývoji",
            stack: ["Java", "Fabric", "Gradle", "Electron", "TypeScript", "Preact"],
            summary: "Vlastný Minecraft klient pre 1.21.11 — Fabric mód s modulmi a HUD editorom a k nemu launcher s inštanciami.",
            problem: "Hotové klienty sú väčšinou balík cudzích módov. Chcel som vlastný základ, ktorému rozumiem a ktorý môžem ďalej rozvíjať.",
            approach: "Vlastný core mód od nuly a okolo neho modpack z open-source módov. Launcher je samostatná Electron aplikácia, ktorá spravuje inštancie, skiny a nastavenia.",
            points: [
                "Modulový systém s HUD widgetmi — FPS, CPS, klávesy, súradnice, brnenie, efekty — a editor HUD.",
                "Vlastná úvodná obrazovka a mod menu.",
                "Launcher s inštanciami, knižnicou skinov a synchronizáciou nastavení medzi inštanciami rovnakej verzie.",
                "Všetky texty cez prekladové kľúče."
            ],
            closing: "Cheat funkcie sa v ňom zámerne nerobia."
        },
        {
            id: "zsr-mapa",
            name: "ŽSR Mapa",
            kind: "Web + Android aplikácia",
            year: "2026",
            state: "vo vývoji",
            stack: ["Kotlin", "Gradle", "WebView", "Node.js", "Leaflet", "OpenStreetMap"],
            summary: "Osobná mapa vlakov ŽSR vo vlastnom prevedení — ako web a ako Android aplikácia. Nie je verejná.",
            problem: "Pôvodná mapa funguje, ale chcel som ju prehľadnejšiu, s trasou po skutočných koľajach a upozorneniami na vlak, ktorý sledujem.",
            approach: "Koľaje pochádzajú z OpenStreetMap a trasa vlaku aj pohyb značky sa vedú po tom istom grafe. Aplikácia volá zdroj priamo z telefónu, takže nepotrebuje vlastný server.",
            points: [
                "Trasa vlaku po koľajach, nie po priamke, a odhad polohy medzi stanicami.",
                "Graf koľají sa počíta priamo v telefóne, vyhľadávanie trasy ide algoritmom A*.",
                "Sledovanie vlaku a upozornenia cez službu na popredí a presné budíky.",
                "Vzhľad v štýle dopravcu, meškanie farbami návestidiel."
            ],
            closing: "Web beží len lokálne."
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

    ai: [
        {
            name: "Claude",
            role: "kód",
            note: "Pomáha priamo pri tvorbe — písanie a úpravy kódu, refaktoring, hľadanie chýb aj prechádzanie cudzích projektov."
        },
        {
            name: "ChatGPT",
            role: "grafika",
            note: "Obrázky, bannery a vizuály — od podkladov pre servery po grafiku na web."
        },
        {
            name: "Gemini",
            role: "research",
            note: "Rešerš a overovanie — dohľadávanie podkladov, porovnávanie riešení a zbieranie zdrojov."
        }
    ],

    school: [
        "Informačné a sieťové technológie, SPŠE Zochova Bratislava.",
        "Siete a Cisco Networking Academy.",
        "Programovanie — Python, Java, základy práce s Arduinom.",
        "Elektrotechnika — obvody, Ohmov a Kirchhoffove zákony, polovodiče.",
        "Operačné systémy a systémové volania."
    ]
};

/* ==========================================================================
   Logika stránky. Obsah sa renderuje z portfolioData vyššie.
   ========================================================================== */

(function () {
    "use strict";

    const root = document.documentElement;
    const $ = (selector, scope = document) => scope.querySelector(selector);
    const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = () => motionQuery.matches;

    const el = {
        header: $("#siteHeader"),
        nav: $("#siteNav"),
        indicator: $("#navIndicator"),
        progress: $("#readProgress"),
        burger: $("#burger"),
        menu: $("#mobileMenu"),
        main: $("#obsah"),
        footer: $(".site-footer"),
        stats: $("#statList"),
        grid: $("#projectGrid"),
        servers: $("#serverList"),
        timeline: $("#timeline"),
        timelineFill: $("#timelineFill"),
        layers: $("#layers"),
        practices: $("#practiceList"),
        network: $("#networkList"),
        school: $("#schoolList"),
        ai: $("#aiList"),
        dialog: $("#projectDialog"),
        dialogBody: $("#projectBody"),
        dialogClose: $("#projectClose"),
        sound: $("#soundToggle"),
        music: $("#bgMusic"),
        toast: $("#toast"),
        copy: $("#copyName"),
        year: $("#year")
    };

    const icon = (name) => `<svg class="ico" aria-hidden="true"><use href="#i-${name}"/></svg>`;

    /* ---------- vykreslenie ---------- */

    function pill(state) {
        const kind = {
            "v prevádzke": "live",
            "vo vývoji": "wip",
            "pozastavený": "paused",
            "ukončené": "past",
            "v príprave": "wip",
            "aktívny": "live"
        }[state] || "wip";
        return `<span class="pill pill-${kind}"><i aria-hidden="true"></i>${esc(state)}</span>`;
    }

    /* Jazyky, ktoré sa hľadajú v stackoch projektov (Node.js počítam ako JavaScript). */
    const LANGUAGES = [
        { name: "Java", match: ["java"] },
        { name: "Kotlin", match: ["kotlin"] },
        { name: "JavaScript", match: ["javascript", "node.js"] },
        { name: "TypeScript", match: ["typescript"] }
    ];

    function resolveStats() {
        const projects = portfolioData.devProjects;
        const used = LANGUAGES.filter((lang) => projects.some((project) =>
            project.stack.some((tech) => lang.match.includes(tech.trim().toLowerCase()))));
        return portfolioData.stats.map((stat) => {
            if (stat.source === "projects") return { ...stat, value: String(projects.length) };
            if (stat.source === "languages") {
                const count = used.length;
                return {
                    ...stat,
                    value: String(count),
                    unit: count === 1 ? "jazyk" : count < 5 ? "jazyky" : "jazykov",
                    label: `v mojich projektoch — ${used.map((lang) => lang.name).join(", ")}`
                };
            }
            return stat;
        });
    }

    function renderStats() {
        el.stats.innerHTML = resolveStats().map((stat, index) => `
            <div class="stat reveal" style="--i:${index + 2}">
                <dt>${esc(stat.label)}</dt>
                <dd><span class="stat-num" data-count="${esc(stat.value)}">${esc(stat.value)}</span>${stat.unit ? `<span class="stat-unit">${esc(stat.unit)}</span>` : ""}</dd>
            </div>
        `).join("");
    }

    const SHIELD_ART = `<div class="card-art" aria-hidden="true"><svg viewBox="0 0 400 140" preserveAspectRatio="xMidYMid meet">
        <defs><linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2dd4bf"/><stop offset="1" stop-color="#38bdf8"/></linearGradient></defs>
        <g fill="none" stroke="url(#shieldGrad)" stroke-linecap="round" stroke-linejoin="round">
            <path d="M200 10 252 28v38c0 31-21 53-52 64-31-11-52-33-52-64V28z" stroke-width="2.4"/>
            <path d="M200 30 234 41v25c0 20-13 35-34 43-21-8-34-23-34-43V41z" stroke-width="1.4" opacity=".55"/>
            <path d="m182 68 13 13 25-27" stroke-width="3.4"/>
            <path d="M20 70h110M270 70h110" stroke-width="1.2" opacity=".35"/>
            <path d="M60 50h70M270 90h70" stroke-width="1.2" opacity=".2"/>
        </g>
        <g fill="url(#shieldGrad)" opacity=".7"><circle cx="20" cy="70" r="3"/><circle cx="380" cy="70" r="3"/><circle cx="60" cy="50" r="2"/><circle cx="340" cy="90" r="2"/></g>
    </svg></div>`;

    const LENS_ART = `<div class="card-art" aria-hidden="true"><svg viewBox="0 0 400 140" preserveAspectRatio="xMidYMid meet">
        <defs><linearGradient id="lensGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2dd4bf"/><stop offset="1" stop-color="#38bdf8"/></linearGradient></defs>
        <g fill="none" stroke="url(#lensGrad)" stroke-linecap="round" stroke-linejoin="round">
            <path d="M138 34v-14h14M262 34v-14h-14M138 98v14h14M262 98v14h-14" stroke-width="2.4"/>
            <circle cx="200" cy="66" r="26" stroke-width="1.6"/>
            <circle cx="200" cy="66" r="9" stroke-width="1.6"/>
            <path d="M200 30v12M200 90v12M164 66h12M224 66h12" stroke-width="1.2" opacity=".55"/>
            <path d="M40 124h320" stroke-width="1.2" opacity=".3"/>
            <path d="M40 124h176" stroke-width="2.2"/>
        </g>
        <g fill="url(#lensGrad)"><circle cx="216" cy="124" r="4"/></g>
    </svg></div>`;
    const FEATURE_ART = { "astralys-shield": SHIELD_ART, "astralys-lens": LENS_ART };

    function renderProjects() {
        const featuredIds = portfolioData.featured.map((item) => item.id);
        const featuredById = new Map(portfolioData.featured.map((item) => [item.id, item]));
        const projects = portfolioData.devProjects;
        const ordered = [
            ...featuredIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean),
            ...projects.filter((project) => !featuredIds.includes(project.id))
        ];

        /* Malé karty tvoria trojice; zvyšok (1 alebo 2 karty) sa dorovná tak, aby v mriežke
           neostala diera: pri zvyšku 1 sa posledné štyri roztiahnu na polovicu, pri 2 posledné dve. */
        const smallCount = ordered.filter((project) => !featuredById.has(project.id)).length;
        const halfCount = Math.min(smallCount, [0, 4, 2][smallCount % 3]);
        let smallIndex = 0;

        el.grid.insertAdjacentHTML("beforeend", ordered.map((project, index) => {
            const featured = featuredById.get(project.id);
            let size;
            if (featured) {
                size = `cell-feature cell-f${featuredIds.indexOf(project.id) + 1}`;
            } else {
                size = smallIndex >= smallCount - halfCount ? "cell-small cell-half" : "cell-small";
                smallIndex += 1;
            }
            return `
            <div class="cell ${size} reveal" style="--i:${index % 3}">
                <article class="card">
                    <div class="card-top">
                        <span class="card-kind">${esc(project.kind)}</span>
                        <span class="card-year">${esc(project.year)}</span>
                    </div>
                    <div class="card-main">
                        ${pill(project.state)}
                        <h3 class="card-title"><a class="card-link" href="#projekt-${esc(project.id)}" data-project="${esc(project.id)}">${esc(project.name)}</a></h3>
                        ${featured ? `<p class="card-line">${esc(featured.line)}</p>` : ""}
                        <p class="card-summary">${esc(project.summary)}</p>
                        ${featured && project.points && project.points.length ? `<ul class="card-points">${project.points.map((point) => `<li>${esc(point)}</li>`).join("")}</ul>` : ""}
                        ${featured && project.closing ? `<p class="card-closing">${esc(project.closing)}</p>` : ""}
                        ${featured ? FEATURE_ART[project.id] || "" : ""}
                    </div>
                    <ul class="chips">${project.stack.map((tech) => `<li>${esc(tech)}</li>`).join("")}</ul>
                    <span class="card-go" aria-hidden="true">${icon("arrow")}</span>
                </article>
            </div>`;
        }).join(""));
    }

    function renderServers() {
        el.servers.innerHTML = portfolioData.servers.map((server, index) => `
            <article class="server-card reveal" style="--i:${index % 2}">
                <header>
                    <h4>${esc(server.name)}</h4>
                    ${pill(server.status)}
                </header>
                <p class="server-meta">${esc(server.role)} · ${esc(server.period)}</p>
                <p class="server-intro">${esc(server.intro)}</p>
            </article>
        `).join("");
    }

    function renderTimeline() {
        const html = portfolioData.timeline.map((block) => {
            if (block.gap) {
                return `
                <section class="tl-year tl-gap">
                    <h4 class="tl-year-label reveal"><i class="tl-dot" aria-hidden="true"></i>${esc(block.year)}</h4>
                    <p class="tl-gap-note reveal">${esc(block.note)}</p>
                </section>`;
            }
            return `
                <section class="tl-year">
                    <h4 class="tl-year-label reveal"><i class="tl-dot tl-dot-year" aria-hidden="true"></i>${esc(block.year)}</h4>
                    ${block.months.map((monthBlock) => `
                    <div class="tl-month">
                        <h5 class="tl-month-label reveal">${esc(monthBlock.month)}</h5>
                        ${monthBlock.events.map((event, index) => `
                        <article class="tl-event reveal" style="--i:${index}">
                            <i class="tl-dot" aria-hidden="true"></i>
                            <h6>${esc(event.title)}</h6>
                            ${event.note ? `<p>${esc(event.note)}</p>` : ""}
                        </article>`).join("")}
                    </div>`).join("")}
                </section>`;
        }).join("");
        el.timeline.insertAdjacentHTML("beforeend", html);
    }

    function renderLayers() {
        el.layers.innerHTML = portfolioData.stack.map((layer, index) => `
            <li class="layer reveal" style="--i:${index}">
                <span class="layer-node"><b>${String(index + 1).padStart(2, "0")}</b></span>
                <div class="layer-card">
                    <span class="layer-name">${esc(layer.layer)}</span>
                    <strong class="layer-tech">${esc(layer.tech)}</strong>
                    <p class="layer-note">${esc(layer.note)}</p>
                </div>
            </li>
        `).join("") + '<li class="packet" aria-hidden="true" role="presentation"><i></i></li>';
    }

    function renderLists() {
        el.practices.innerHTML = portfolioData.practices.map((text, index) => `
            <li class="practice reveal" style="--i:${index % 3}">
                <span class="practice-ico">${icon("check")}</span>
                <p>${esc(text)}</p>
            </li>
        `).join("");

        const dash = (items) => items
            .map((text, index) => `<li class="reveal" style="--i:${index}">${esc(text)}</li>`)
            .join("");
        el.network.innerHTML = dash(portfolioData.network);
        el.school.innerHTML = dash(portfolioData.school);

        el.ai.innerHTML = portfolioData.ai.map((tool, index) => `
            <article class="ai-card reveal" style="--i:${index}">
                <header>
                    <span class="ai-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
                    <span class="pill pill-wip pill-plain">${esc(tool.role)}</span>
                </header>
                <h3>${esc(tool.name)}</h3>
                <p>${esc(tool.note)}</p>
            </article>
        `).join("");
    }

    renderStats();
    renderProjects();
    renderServers();
    renderTimeline();
    renderLayers();
    renderLists();
    if (el.year) el.year.textContent = String(new Date().getFullYear());

    /* ---------- reveal pri scrolle ---------- */

    const revealObserver = "IntersectionObserver" in window && !reduced()
        ? new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-in");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" })
        : null;

    $$(".reveal").forEach((node) => {
        if (revealObserver) revealObserver.observe(node);
        else node.classList.add("is-in");
    });

    /* ---------- count-up ---------- */

    function countUp(node) {
        const target = Number(node.dataset.count);
        if (!Number.isFinite(target) || reduced()) {
            node.textContent = node.dataset.count;
            return;
        }
        const duration = 1300;
        const startedAt = performance.now();
        const tick = (now) => {
            const t = clamp((now - startedAt) / duration, 0, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            node.textContent = String(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
        };
        node.textContent = "0";
        requestAnimationFrame(tick);
    }

    if ("IntersectionObserver" in window) {
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                countObserver.unobserve(entry.target);
                countUp(entry.target);
            });
        }, { threshold: 0.6 });
        $$(".stat-num").forEach((node) => {
            if (!reduced()) node.textContent = "0";
            countObserver.observe(node);
        });
    }

    /* ---------- infraštruktúra: packet ---------- */

    function layoutLayers() {
        const nodes = $$(".layer-node", el.layers);
        if (nodes.length < 2) return;
        const centerOf = (node) => node.offsetTop + node.offsetHeight / 2;
        const top = centerOf(nodes[0]);
        const height = centerOf(nodes[nodes.length - 1]) - top;
        const travel = 2.8; /* s — musí sedieť s --packet-travel v CSS */
        el.layers.style.setProperty("--rail-top", top + "px");
        el.layers.style.setProperty("--rail-h", height + "px");
        nodes.forEach((node) => {
            node.style.setProperty("--hit", ((centerOf(node) - top) / height * travel).toFixed(2) + "s");
        });
    }

    if ("IntersectionObserver" in window) {
        new IntersectionObserver((entries) => {
            entries.forEach((entry) => el.layers.classList.toggle("is-live", entry.isIntersecting));
        }, { threshold: 0.2 }).observe(el.layers);
    }

    /* ---------- hlavička, progress, scrollspy, časová os ---------- */

    const spySections = ["o-mne", "projekty", "minecraft", "infrastruktura", "siete-skola", "ai", "kontakt"]
        .map((id) => document.getElementById(id))
        .filter(Boolean);
    const navKey = { "siete-skola": "infrastruktura", ai: "infrastruktura" };
    const navLinks = $$("a[data-nav]");
    let activeKey = null;
    let tlDots = [];
    let tlDotY = [];
    let ticking = false;

    /* Indikátor leží v tom istom (škálovanom) kontajneri ako odkazy, takže offsetLeft
       a offsetWidth sedia aj pri scale(.95) hlavičky. Z neaktívneho stavu sa umiestni
       okamžite bez transition a len vybledne dnu; medzi dvoma odkazmi sa plynulo posunie. */
    function placeIndicator(instant) {
        const link = activeKey ? el.nav.querySelector(`a[data-nav="${activeKey}"]`) : null;
        if (!link) {
            el.indicator.classList.remove("is-on");
            return;
        }
        const pad = 14;
        const transform = `translateX(${link.offsetLeft + pad}px) scaleX(${link.offsetWidth - pad * 2})`;
        if (instant || !el.indicator.classList.contains("is-on")) {
            el.indicator.style.transition = "none";
            el.indicator.style.transform = transform;
            el.indicator.getBoundingClientRect();
            el.indicator.style.transition = "";
        } else {
            el.indicator.style.transform = transform;
        }
        el.indicator.classList.add("is-on");
    }

    function setActive(key) {
        if (key === activeKey) return;
        activeKey = key;
        navLinks.forEach((link) => {
            if (link.dataset.nav === key) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
        });
        placeIndicator(false);
    }

    /* Po kliknutí na odkaz sa cieľ nastaví hneď a scrollspy čaká, kým plynulý scroll
       neskončí (scrollend, fallback ~150 ms po poslednom scroll evente, najviac 1,5 s),
       inak by indikátor cestou poskakoval po sekciách, ktoré sa len míňajú. */
    let spyLocked = false;
    let spyIdleTimer = 0;
    let spyMaxTimer = 0;

    function unlockSpy() {
        if (!spyLocked) return;
        spyLocked = false;
        clearTimeout(spyIdleTimer);
        clearTimeout(spyMaxTimer);
        schedule();
    }

    function armSpyIdle() {
        clearTimeout(spyIdleTimer);
        spyIdleTimer = setTimeout(unlockSpy, 150);
    }

    function lockSpy() {
        spyLocked = true;
        clearTimeout(spyMaxTimer);
        spyMaxTimer = setTimeout(unlockSpy, 1500);
        armSpyIdle();
    }

    document.addEventListener("click", (event) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const link = event.target.closest('a[href^="#"]');
        if (!link) return;
        const id = link.getAttribute("href").slice(1);
        if (id === "top") {
            setActive(null);
        } else if (spySections.some((section) => section.id === id)) {
            setActive(id in navKey ? navKey[id] : id);
        } else {
            return;
        }
        lockSpy();
    });
    if ("onscrollend" in window) window.addEventListener("scrollend", unlockSpy);

    function measureTimeline() {
        tlDots = $$(".tl-dot", el.timeline);
        tlDotY = tlDots.map((dot) => {
            let y = dot.offsetHeight / 2;
            let node = dot;
            while (node && node !== el.timeline) {
                y += node.offsetTop;
                node = node.offsetParent;
            }
            return y;
        });
    }

    function updateTimeline() {
        if (!tlDots.length) return;
        const rect = el.timeline.getBoundingClientRect();
        const full = reduced();
        const px = full ? rect.height : clamp(window.innerHeight * 0.62 - rect.top, 0, rect.height);
        el.timelineFill.style.transform = `scaleY(${rect.height ? (px / rect.height).toFixed(4) : 0})`;
        for (let i = 0; i < tlDots.length; i++) {
            tlDots[i].classList.toggle("is-lit", tlDotY[i] <= px);
        }
    }

    function update() {
        ticking = false;
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        el.header.classList.toggle("is-scrolled", y > 24);
        el.progress.style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1).toFixed(4) : 0})`;

        if (!spyLocked) {
            /* Aktívna je posledná sekcia, ktorej vrch je nad čiarou, takže medzi
               sekciami nikdy nevzniká null; null je len nad prvou sekciou (hero). */
            const line = window.innerHeight * 0.38;
            let current = null;
            for (const section of spySections) {
                if (section.getBoundingClientRect().top <= line) current = section.id;
                else break;
            }
            if (max > 0 && y >= max - 6) current = "kontakt";
            setActive(current === null ? null : (current in navKey ? navKey[current] : current));
        }

        updateTimeline();
    }

    function schedule() {
        if (spyLocked) armSpyIdle();
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }

    function relayout() {
        measureTimeline();
        layoutLayers();
        placeIndicator(true);
        update();
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", () => {
        relayout();
        if (window.innerWidth >= 900 && menuOpen) closeMenu(false);
    });
    if ("ResizeObserver" in window) new ResizeObserver(relayout).observe(el.timeline);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);

    /* ---------- zamknutie scrollu ---------- */

    let menuOpen = false;
    function syncLock() {
        const lock = menuOpen || el.dialog.open;
        if (lock && !root.classList.contains("is-locked")) {
            root.style.setProperty("--sb", Math.max(0, window.innerWidth - root.clientWidth) + "px");
        }
        root.classList.toggle("is-locked", lock);
    }

    /* ---------- mobilné menu ---------- */

    function openMenu() {
        if (menuOpen) return;
        menuOpen = true;
        el.menu.classList.add("is-open");
        el.menu.setAttribute("aria-hidden", "false");
        el.header.classList.add("menu-open");
        el.burger.setAttribute("aria-expanded", "true");
        el.burger.setAttribute("aria-label", "Zavrieť menu");
        el.main.inert = true;
        el.footer.inert = true;
        syncLock();
        setTimeout(() => {
            const first = el.menu.querySelector("a");
            if (first && menuOpen) first.focus({ preventScroll: true });
        }, reduced() ? 0 : 120);
    }

    function closeMenu(restoreFocus = true) {
        if (!menuOpen) return;
        menuOpen = false;
        el.menu.classList.remove("is-open");
        el.menu.setAttribute("aria-hidden", "true");
        el.header.classList.remove("menu-open");
        el.burger.setAttribute("aria-expanded", "false");
        el.burger.setAttribute("aria-label", "Otvoriť menu");
        el.main.inert = false;
        el.footer.inert = false;
        syncLock();
        if (restoreFocus) el.burger.focus({ preventScroll: true });
    }

    el.burger.addEventListener("click", () => (menuOpen ? closeMenu() : openMenu()));
    el.menu.addEventListener("click", (event) => {
        if (event.target.closest("a")) closeMenu(false);
    });

    document.addEventListener("keydown", (event) => {
        if (!menuOpen) return;
        if (event.key === "Escape") {
            event.preventDefault();
            closeMenu();
            return;
        }
        if (event.key !== "Tab") return;
        const items = [el.burger, ...$$("a[href]", el.menu)];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        } else if (!items.includes(document.activeElement)) {
            event.preventDefault();
            first.focus();
        }
    });

    /* ---------- detail projektu (dialog + hash) ---------- */

    const HASH_PREFIX = "#projekt-";
    let lastTrigger = null;
    let pushedByClick = false;
    let closeTimer = 0;

    const projectIdFromHash = () => {
        if (!location.hash.startsWith(HASH_PREFIX)) return null;
        try {
            return decodeURIComponent(location.hash.slice(HASH_PREFIX.length));
        } catch (error) {
            return null;
        }
    };

    function renderDetail(project) {
        const block = (label, text) => text
            ? `<section class="detail-block"><h3>${label}</h3><p>${esc(text)}</p></section>`
            : "";
        el.dialogBody.innerHTML = `
            <p class="detail-meta"><span>${esc(project.kind)}</span><span>${esc(project.year)}</span>${pill(project.state)}</p>
            <h2 class="detail-title" id="projectTitle">${esc(project.name)}</h2>
            <p class="detail-summary">${esc(project.summary)}</p>
            ${block("Problém", project.problem)}
            ${block("Riešenie", project.approach)}
            ${project.points && project.points.length ? `
            <section class="detail-block">
                <h3>Kľúčové body</h3>
                <ul class="detail-points">${project.points.map((point) => `<li>${esc(point)}</li>`).join("")}</ul>
            </section>` : ""}
            ${project.closing ? `<p class="detail-closing">${esc(project.closing)}</p>` : ""}
            <section class="detail-block">
                <h3>Stack</h3>
                <ul class="chips">${project.stack.map((tech) => `<li>${esc(tech)}</li>`).join("")}</ul>
            </section>
        `;
        el.dialog.scrollTop = 0;
        $(".detail-inner", el.dialog).scrollTop = 0;
    }

    function openPanel(id) {
        const project = portfolioData.devProjects.find((item) => item.id === id);
        if (!project) return;
        clearTimeout(closeTimer);
        el.dialog.classList.remove("is-closing");
        renderDetail(project);
        if (!el.dialog.open) el.dialog.showModal();
        syncLock();
    }

    function closePanel() {
        if (!el.dialog.open || el.dialog.classList.contains("is-closing")) return;
        const finish = () => {
            el.dialog.classList.remove("is-closing");
            if (el.dialog.open) el.dialog.close();
            syncLock();
            if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus({ preventScroll: true });
            lastTrigger = null;
        };
        if (reduced()) {
            finish();
        } else {
            el.dialog.classList.add("is-closing");
            closeTimer = setTimeout(finish, 240);
        }
    }

    function requestClose() {
        if (projectIdFromHash()) {
            if (pushedByClick) {
                pushedByClick = false;
                history.back();
            } else {
                history.replaceState(null, "", location.pathname + location.search);
            }
        }
        closePanel();
    }

    function syncFromHash() {
        const id = projectIdFromHash();
        if (id) openPanel(id);
        else closePanel();
    }

    el.grid.addEventListener("click", (event) => {
        const link = event.target.closest("a[data-project]");
        if (!link) return;
        lastTrigger = link;
        pushedByClick = true;
    });

    el.dialogClose.addEventListener("click", requestClose);
    el.dialog.addEventListener("click", (event) => {
        if (event.target === el.dialog) requestClose();
    });
    el.dialog.addEventListener("cancel", (event) => {
        event.preventDefault();
        requestClose();
    });
    window.addEventListener("hashchange", () => {
        if (!projectIdFromHash()) pushedByClick = false;
        syncFromHash();
    });
    if (projectIdFromHash()) syncFromHash();

    /* ---------- karty: spotlight a tilt ---------- */

    if (pointerQuery.matches) {
        $$(".card").forEach((card) => {
            card.addEventListener("pointermove", (event) => {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                card.style.setProperty("--x", x + "px");
                card.style.setProperty("--y", y + "px");
                if (reduced()) return;
                const rx = (0.5 - y / rect.height) * 6; /* max ±3° */
                const ry = (x / rect.width - 0.5) * 6;
                card.style.transform = `perspective(1000px) translateY(-4px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
            });
            card.addEventListener("pointerleave", () => {
                card.style.transform = "";
            });
        });
    }

    /* ---------- magnetické tlačidlá ---------- */

    if (pointerQuery.matches && !reduced()) {
        const magnets = $$(".magnetic");
        let mx = 0;
        let my = 0;
        let pending = false;
        const apply = () => {
            pending = false;
            magnets.forEach((node) => {
                const rect = node.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = mx - cx;
                const dy = my - cy;
                const reach = Math.max(rect.width, rect.height) / 2 + 36;
                if (Math.hypot(dx, dy) < reach) {
                    node.style.transform = `translate(${(dx * 0.22).toFixed(1)}px, ${(dy * 0.28).toFixed(1)}px)`;
                } else if (node.style.transform) {
                    node.style.transform = "";
                }
            });
        };
        window.addEventListener("pointermove", (event) => {
            mx = event.clientX;
            my = event.clientY;
            if (!pending) {
                pending = true;
                requestAnimationFrame(apply);
            }
        }, { passive: true });
    }

    /* ---------- kopírovanie mena a toast ---------- */

    let toastTimer = 0;
    function showToast(text) {
        el.toast.textContent = text;
        el.toast.classList.add("is-on");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.toast.classList.remove("is-on"), 2000);
    }

    async function copyText(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (error) {
            const area = document.createElement("textarea");
            area.value = text;
            area.setAttribute("readonly", "");
            area.style.cssText = "position:fixed;opacity:0;pointer-events:none";
            document.body.appendChild(area);
            area.select();
            let ok = false;
            try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
            area.remove();
            return ok;
        }
    }

    el.copy.addEventListener("click", async () => {
        showToast((await copyText("astraksk")) ? "Skopírované" : "Kopírovanie sa nepodarilo");
    });

    /* ---------- hudba: len cez tlačidlo, nikdy automaticky ---------- */

    const SOUND_KEY = "astraksk:sound";
    let wantsSound = false;
    try { wantsSound = localStorage.getItem(SOUND_KEY) === "on"; } catch (error) { wantsSound = false; }

    function paintSound() {
        const playing = !el.music.paused;
        el.sound.querySelector("use").setAttribute("href", playing ? "#i-sound" : "#i-muted");
        el.sound.setAttribute("aria-pressed", String(playing));
        el.sound.setAttribute("aria-label", playing ? "Vypnúť hudbu" : "Zapnúť hudbu");
        el.sound.classList.toggle("is-playing", playing);
        el.sound.classList.toggle("is-resume", !playing && wantsSound);
    }

    el.sound.addEventListener("click", () => {
        if (el.music.paused) {
            el.music.volume = 0.22;
            el.music.play().then(() => {
                wantsSound = true;
                try { localStorage.setItem(SOUND_KEY, "on"); } catch (error) { /* súkromný režim */ }
                paintSound();
            }).catch(() => paintSound());
        } else {
            el.music.pause();
            wantsSound = false;
            try { localStorage.setItem(SOUND_KEY, "off"); } catch (error) { /* súkromný režim */ }
            paintSound();
        }
    });
    el.music.addEventListener("play", paintSound);
    el.music.addEventListener("pause", paintSound);
    paintSound();

    /* ---------- štart ---------- */

    requestAnimationFrame(relayout);
    motionQuery.addEventListener && motionQuery.addEventListener("change", relayout);
})();
