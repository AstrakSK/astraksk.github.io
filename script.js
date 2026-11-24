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
            line: "Anti-cheat, ktorý neháda z packetov, ale overuje samotného klienta."
        },
        {
            id: "astralys-lens",
            name: "AstralysLens",
            line: "Klip z podozrivého momentu, ktorý si staff prehrá v 3D."
        }
    ],

    timeline: [
        {
            year: "2026",
            months: [
                {
                    month: "November",
                    events: [
                        {
                            title: "CZSK TierTagger 3.0",
                            note: "Graf vývoja tierov aj subtierov, náhľad hráča a port pre Minecraft 26.x."
                        },
                        {
                            title: "ŽSR Mapa 2.6 s automatickými aktualizáciami",
                            note: "Aplikácia si sama kontroluje, sťahuje a inštaluje nové verzie mimo Google Play, s overením podpisu a kontrolného súčtu."
                        },
                        {
                            title: "AstralysAntiXray 2.0 a AstralysCombat 2.0",
                            note: "AntiXray s priebežnými návnadami a prepojením na AstralysShield a AstralysAntiESP, DeluxeCombat prepracovaný na AstralysCombat. Obe verzie sú zostavené, test na serveri s hráčmi čaká."
                        }
                    ]
                },
                {
                    month: "Október",
                    events: [
                        {
                            title: "AstralysShield prepísaný do Kotlinu",
                            note: "Serverový plugin prešiel z Javy a Mavenu na Kotlin a Gradle, s novými detekciami."
                        },
                        {
                            title: "AstralysAntiESP, všetky štyri fázy",
                            note: "Skrývanie entít, blokov a podzemia pred ESP a freecam klientmi, otestované s reálnym klientom."
                        },
                        {
                            title: "Zakladateľ Rifted",
                            note: "Nový CZ/SK SMP. Staviam jeho technologický základ."
                        },
                        {
                            title: "ŽSR Mapa pre Android",
                            note: "Mapa vlakov ako aplikácia, od verzie 2.0 s prístupom na pozvánku."
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
            role: "Zakladateľ",
            period: "október 2026 —",
            intro: "Český a slovenský SMP, ktorý stavám s kamarátmi. Mám na starosti technologický základ projektu, na ktorom stavia aj technológia z Astralys. Zatiaľ nie je verejne otvorený."
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
            stack: ["Java", "Kotlin", "Fabric", "Paper", "Gradle", "HMAC", "SQLite"],
            summary: "Klient-server bezpečnostný systém, ktorý serveru dá kontext o stave klienta namiesto odhadovania z packetov.",
            problem: "Serverový anti-cheat vidí len to, čo mu klient pošle, a zvyšok musí odhadovať z pohybu a packetov. Čím prísnejšie hádanie, tým viac potrestaných hráčov, ktorí nič nespravili.",
            approach: "Fabric mód na klientovi a Paper plugin na serveri si pri pripojení overia identitu a potom si priebežne potvrdzujú, že komunikuje stále ten istý, nezmenený klient. Server tak nepracuje s dohadmi, ale s overenými informáciami.",
            points: [
                "Overenie klienta pri pripojení a priebežné potvrdzovanie počas hry.",
                "Analýza načítaných módov a klientskych rozšírení v reálnom čase.",
                "Vyhodnocovanie rizika na škále namiesto rozhodnutia legit alebo cheat.",
                "Modulárna architektúra — nová detekcia sa pridáva bez prepisovania existujúcich.",
                "Detekcia kódu vstreknutého do bežiacej hry. Plugin je v Kotline a oba jary sa nasadzujú ako zhodný pár."
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
                "Zvuky, častice a zdravie sa spoofujú tiež, pridaná je podpora Bedrocku.",
                "Verejné API, cez ktoré AstralysAntiXray obíde skrývanie pre svoje návnady. Menovky a hologramy sa skrývajú spolu s hráčom."
            ],
            closing: "Fázy 1–4 som otestoval s reálnym klientom. Novšie úpravy výkonu a spolupráca s AntiXray čakajú na živý test."
        },
        {
            id: "astralys-antixray",
            name: "AstralysAntiXray",
            kind: "Serverový plugin",
            year: "2026",
            state: "vo vývoji",
            stack: ["Kotlin", "Gradle", "Paper", "SQLite", "Discord webhook"],
            summary: "Neskrýva rudy, ale sleduje, ako hráč ťaží, a podozrivým podhodí falošné rudy, ktoré vidí len on.",
            problem: "Xray klient nepotrebuje nič hackovať a skrývanie rúd ho nezastaví. Staff potom len háda, či hráč našiel žilu náhodou, alebo ju videl cez stenu.",
            approach: "Plugin hodnotí štatistiku skrytých nálezov a zacielené tunely. Podozrivému pošle falošné rudy len cez paket, do sveta sa nič nezapisuje. Pri náhodnom odkrytí sa hneď vráti skutočný kameň, takže legit hráč falošnú rudu nikdy neuvidí. Predvolene len upozorňuje, ban vyžaduje viac nezávislých zásahov.",
            points: [
                "Štatistika skrytých nálezov, ktorej základná pravdepodobnosť sa učí z hráčov na konkrétnom serveri.",
                "Falošné rudy viditeľné len vybranému hráčovi, v tuneloch aj ako priebežné návnady pod zemou.",
                "Shadow mód, ktorý zapisuje, čo by plugin spravil, a záznam dôkazov pre staff.",
                "Report vykopaného za zvolený čas a oblasť.",
                "Prepojenie na AstralysShield a AstralysAntiESP cez vlastné API."
            ],
            closing: "V simulácii legit hráči nespustili žiadnu eskaláciu a xrayer ju spustil vždy. Živý test s hráčmi zatiaľ chýba."
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
            stack: ["Java", "Fabric", "Stonecutter", "Mixin", "Gson", "ProGuard"],
            summary: "Zobrazuje PvP tiery priamo v hre — nad hlavou, v TABe, v chate aj na karte hráča.",
            problem: "Tiery boli len na webe. Kto ich chcel vidieť počas hry, musel prepínať do prehliadača — čiže presne vo chvíli, keď je tá informácia najužitočnejšia, nebola po ruke.",
            approach: "Mód beží výhradne na klientovi — na server neposiela nič, len dokresľuje to, čo hráč aj tak vidí. Dáta si sťahuje sám a drží ich v pamäti, takže tier je nad hlavou hneď, nie po sekunde čakania. Zdrojom sú statické JSON snímky tierlistu, ktoré sa obnovujú zhruba každé dve minúty.",
            points: [
                "Tier za nickom nad hlavou, v TABe a v chate, s detailom po nabehnutí kurzorom.",
                "Karta hráča s postavou, tiermi a subtiermi, najlepším dosiahnutým tierom a grafom vývoja.",
                "Hlásenie zmeny tieru u seba aj u obľúbených a prehľad, kto z obľúbených je práve na serveri.",
                "Nastavenia priamo v hre cez príkaz a klávesovú skratku, dáta sa cachujú a obnovujú na povel.",
                "Jeden zdroják pre dvanásť verzií Minecraftu (1.21 – 1.21.11) cez Stonecutter, port pre Minecraft 26.x je samostatný projekt.",
                "Ikony kitov idú vlastným fontom, nie textúrami z cudzích módov.",
                "Pri výpadku služby so skinmi sa dotaz zopakuje s odstupom a použije sa skin z disku."
            ],
            closing: "Verzia 3.0 je hotová pre obe vetvy."
        },
        {
            id: "shield-lite",
            name: "AstralysShield-Lite",
            kind: "Serverový plugin",
            year: "2026",
            state: "vo vývoji",
            stack: ["Java", "Paper", "ProtocolLib"],
            summary: "Odhaľuje podvrhnutého klienta bez toho, aby si hráč čokoľvek inštaloval. ProtocolLib je voliteľný.",
            problem: "AstralysShield vyžaduje mód na klientovi. To na verejnom serveri nikto nespraví — potreboval som variant, ktorý funguje na hocikom.",
            approach: "Namiesto jedného spoľahlivého signálu skladá viac slabších: čo klient tvrdí, že je, ako sa hlási na plugin kanáloch a ako sa správa v čase. Jeden signál sa dá podvrhnúť ľahko, všetky naraz podstatne ťažšie.",
            points: [
                "Funguje bez klientskej časti, stačí plugin na serveri.",
                "Kombinuje viac nezávislých signálov do jedného výsledku.",
                "História kontrol a prehľad zachytených klientov.",
                "Príkazy na manuálnu kontrolu konkrétneho hráča.",
                "Katalóg známych módov a rozpoznanie zoznamu módov klienta Lunar."
            ],
            closing: "Záťažový test: 100 botov, TPS 20, plugin zaberal 6–9 % času hlavného vlákna."
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
            name: "AstralysCombat",
            kind: "Serverový plugin",
            year: "2026",
            state: "vo vývoji",
            stack: ["Java", "Maven", "Paper", "WorldGuard"],
            summary: "Upravená verzia pluginu DeluxeCombat — combat tag, ochrana pred odpojením počas boja, odmeny za hlavu a postupné tresty za combatlog.",
            problem: "",
            approach: "",
            points: [
                "Combat tag a ochrana pred odpojením počas boja s postupnými trestami.",
                "Odmeny za hlavu so zabezpečenou výplatou, aby sa nedala vyplatiť dvakrát.",
                "Natívna podpora WorldGuard pre bezpečné zóny.",
                "Limity predmetov v inventári a pravidlá pre Mace a wind charge, všetko predvolene vypnuté a zapínateľné v GUI.",
                "Celé GUI a hlášky preložené do češtiny."
            ],
            closing: "Verzia 2.0 je zostavená, test na serveri čaká."
        },
        {
            id: "antigang",
            name: "AstralysAntiGang",
            kind: "Serverový plugin",
            year: "2026",
            state: "vo vývoji",
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
            stack: ["Java", "Kotlin", "Gradle", "Paper", "Velocity", "MariaDB", "PlaceholderAPI"],
            summary: "Fork pluginu AuthMe (AuthMeReloaded) upravený pre moje servery — prihlasovanie a registrácia na offline serveri s limbo svetom, captchou, kontrolou sily hesiel a sieťovou časťou na Velocity.",
            problem: "Na offline serveri hráča nič neoveruje, preto potrebuje prihlásenie. Upstream plugin pokrýva základ, mne chýbala izolácia neprihlásených hráčov a prísnejšia ochrana účtov.",
            approach: "Držím vlastnú vetvu nad upstreamom. Pri aktualizácii robím merge, nie prepis súborov, aby zostala čitateľná história vlastných úprav.",
            points: [
                "Limbo svet: neprihlásení hráči sú izolovaní od zvyšku servera.",
                "Captcha v limbe podľa otáčania hlavy, v inventári ako náhrada.",
                "Kontrola sily hesla a anonymná kontrola uniknutých hesiel, pri ktorej heslo neopustí server.",
                "Postupne dlhšie bany za zlé heslo.",
                "Velocity hub so zdieľanou databázou: hráč sa na lobby dostane, až keď auth server hlási, že je pripravený.",
                "Automatická registrácia premium hráčov a ochrana mien."
            ],
            closing: "Pokrytý viac než dvoma tisícami testov."
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
            stack: ["Kotlin", "Gradle", "WebView", "Node.js", "Leaflet", "OpenStreetMap", "WorkManager"],
            summary: "Osobná mapa vlakov ŽSR vo vlastnom prevedení — ako web a ako Android aplikácia. Prístup len na pozvánku, nie je verejná.",
            problem: "Pôvodná mapa funguje, ale chcel som ju prehľadnejšiu, s trasou po skutočných koľajach a upozorneniami na vlak, ktorý sledujem.",
            approach: "Koľaje pochádzajú z OpenStreetMap a trasa vlaku aj pohyb značky sa vedú po tom istom grafe. Dáta ŽSR si aplikácia sťahuje priamo z telefónu. Malý vlastný server rieši len účty a distribúciu aktualizácií, dáta ŽSR nesprostredkúva.",
            points: [
                "Trasa vlaku po koľajach, nie po priamke, a odhad polohy medzi stanicami.",
                "Graf koľají je súčasťou aplikácie, trasa sa hľadá algoritmom A* priamo v telefóne.",
                "Sledovanie vlaku a upozornenia cez službu na popredí a presné budíky.",
                "Účty len na pozvánku, viazané na zariadenie cez kľúč v Android Keystore.",
                "Automatické aktualizácie mimo Google Play s overením podpisu a kontrolného súčtu.",
                "Vzhľad v štýle dopravcu, meškanie farbami návestidiel."
            ],
            closing: "Aktuálna verzia je 2.6.1. Web beží len lokálne."
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
            tech: "PostgreSQL · MariaDB",
            note: "Oddelené databázy s vlastnými prihláseniami a šifrovaným spojením. Zmeny schémy len cez migrácie."
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
        "Riešenie výpadkov konektivity od kábla po aplikačnú vrstvu.",
        "Izolovaná lab sieť na starom smerovači s OpenWrt — DHCP, firewall zóny a overená izolácia od domácej siete."
    ],

    /* Zhrnutie pre „O mne“. Len technológie, ktoré sú v stack-och projektov, v infraštruktúre
       alebo v škole — nič navyše. */
    skills: [
        { label: "Jazyky", items: ["Java", "Kotlin", "TypeScript", "JavaScript", "Python"] },
        { label: "Backend a dáta", items: ["Spring Boot", "Node.js", "Javalin", "PostgreSQL", "MariaDB", "SQLite"] },
        { label: "Frontend", items: ["HTML", "CSS", "React", "Preact", "three.js"] },
        { label: "Server", items: ["Ubuntu", "Docker", "Caddy", "Git"] },
        { label: "Minecraft", items: ["Paper", "Fabric", "Velocity", "PacketEvents"] },
        { label: "Android", items: ["Jetpack Compose", "Room"] },
        { label: "AI pri vývoji", items: ["Claude Code", "Codex"] }
    ],
    ai: [
        {
            name: "Claude",
            maker: "Anthropic",
            logo: "claude",
            role: "kód",
            note: "Hlavný nástroj pri tvorbe. Opus plánuje, rozhoduje a robí review, Sonnet implementuje podľa hotového plánu a Haiku prehľadáva súbory a web.",
            models: [
                { name: "Claude Opus 5.5", spec: "plán, review" },
                { name: "Claude Sonnet 5.5", spec: "implementácia" },
                { name: "Claude Haiku 5.5", spec: "hľadanie" }
            ]
        },
        {
            name: "ChatGPT",
            maker: "OpenAI",
            logo: "openai",
            role: "grafika",
            note: "Obrázky, bannery a vizuály — od podkladov pre servery po grafiku na web.",
            models: [
                { name: "GPT-6 Luna", spec: "ChatGPT, Codex" }
            ]
        },
        {
            name: "Gemini",
            maker: "Google",
            logo: "gemini",
            role: "research",
            note: "Rešerš a overovanie — dohľadávanie podkladov, porovnávanie riešení a zbieranie zdrojov. V appke Gemini podľa toho, ako hlboko treba ísť.",
            models: [
                { name: "Gemini 4 Hydrogen", spec: "každodenný pomocník" },
                { name: "Gemini 4 Neon", spec: "hlbšia analýza" }
            ]
        },
        {
            name: "DeepSeek",
            maker: "DeepSeek",
            logo: "deepseek",
            role: "bez filtrov",
            note: "Abliterovaná verzia bez odmietania. Siaham po nej pri veciach, ktoré ostatné modely odmietnu.",
            models: [
                { name: "DeepSeek V4.1 Flash Abliterated", spec: "552B MoE · 1M kontext" }
            ]
        },
        {
            name: "Qwen",
            maker: "Alibaba · lokálne",
            logo: "qwen",
            role: "na vlastnom PC",
            note: "Beží priamo na mojom počítači cez Ollamu, bez cloudu. Poháňa lokálneho kódiaceho agenta.",
            models: [
                { name: "Qwen3.8 27B", spec: "27,3B · Q4_K_M · 262k kontext" },
                { name: "Qwen3.8 27B Abliterated", spec: "27,3B · Q3_K_L · 262k kontext" }
            ]
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
        skills: $("#skillList"),
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
        year: $("#year"),
        statusInfra: $("#statusInfra"),
        statusLive: $("#statusLive"),
        clock: $("#statusClock")
    };

    const icon = (name) => `<svg class="ico" aria-hidden="true"><use href="#i-${name}"/></svg>`;

    /* ---------- vykreslenie ---------- */

    /* Stav je tichý text s bodkou. Pulzuje len bodka pri tom, čo naozaj beží. */
    const STATE_KIND = {
        "v prevádzke": "live",
        "aktívny": "live",
        "beží": "live",
        "vo vývoji": "wip",
        "v príprave": "wip",
        "pozastavený": "paused",
        "ukončené": "past"
    };

    function stateTag(state) {
        const kind = STATE_KIND[state] || "wip";
        return `<span class="state state-${kind}"><i class="dot dot-${kind}" aria-hidden="true"></i>${esc(state)}</span>`;
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

    function renderSkills() {
        if (!el.skills) return;
        el.skills.innerHTML = portfolioData.skills.map((group) => `
            <div class="skill-row">
                <dt>${esc(group.label)}</dt>
                <dd>${group.items.map((item) => `<span>${esc(item)}</span>`).join("")}</dd>
            </div>`).join("");
    }

    function renderStats() {
        el.stats.innerHTML = resolveStats().map((stat, index) => `
            <div class="stat reveal" style="--i:${index + 2}">
                <dt>${esc(stat.label)}</dt>
                <dd><span class="stat-num" data-count="${esc(stat.value)}">${esc(stat.value)}</span>${stat.unit ? `<span class="stat-unit">${esc(stat.unit)}</span>` : ""}</dd>
            </div>
        `).join("");
    }

    function renderProjects() {
        const featuredIds = portfolioData.featured.map((item) => item.id);
        const featuredById = new Map(portfolioData.featured.map((item) => [item.id, item]));
        const projects = portfolioData.devProjects;
        const featured = featuredIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);
        const rest = projects.filter((project) => !featuredIds.includes(project.id));

        const cards = featured.map((project, index) => {
            const meta = featuredById.get(project.id);
            return `
            <article class="card reveal" style="--i:${index}">
                <div class="card-top">
                    <span class="card-kind">${esc(project.kind)}</span>
                    <span class="card-year">${esc(project.year)}</span>
                </div>
                <div class="card-main">
                    ${stateTag(project.state)}
                    <h3 class="card-title"><a class="card-link" href="#projekt-${esc(project.id)}" data-project="${esc(project.id)}">${esc(project.name)}</a></h3>
                    <p class="card-line">${esc(meta.line)}</p>
                    <p class="card-summary">${esc(project.summary)}</p>
                    ${project.points && project.points.length ? `<ul class="card-points">${project.points.map((point) => `<li>${esc(point)}</li>`).join("")}</ul>` : ""}
                    ${project.closing ? `<p class="card-closing">${esc(project.closing)}</p>` : ""}
                </div>
                <ul class="chips">${project.stack.map((tech) => `<li>${esc(tech)}</li>`).join("")}</ul>
                <span class="card-go" aria-hidden="true">${icon("arrow")}</span>
            </article>`;
        }).join("");

        const rows = rest.map((project) => `
                <li class="project-row reveal">
                    <a class="project-row-link" href="#projekt-${esc(project.id)}" data-project="${esc(project.id)}">
                        <span class="project-name">${esc(project.name)}</span>
                        <span class="project-summary">${esc(project.summary)}</span>
                        <span class="project-kind">${esc(project.kind)}</span>
                        ${stateTag(project.state)}
                        ${icon("arrow")}
                    </a>
                </li>`).join("");

        el.grid.insertAdjacentHTML("beforeend", `
            <div class="feature-grid">${cards}</div>
            <div class="project-list">
                <p class="project-list-head" id="moreProjects">Ďalšie projekty <span>${rest.length}</span></p>
                <ol aria-labelledby="moreProjects">${rows}</ol>
            </div>`);
    }

    /* Okno „Čo práve beží" v hero: vrstvy vlastného servera a projekty v prevádzke,
       oboje priamo z portfolioData, nič sa nevymýšľa. */
    function renderStatus() {
        if (!el.statusInfra || !el.statusLive) return;
        const row = (name, note, state) => `
            <li class="status-row">
                <i class="dot dot-${STATE_KIND[state] || "wip"}" aria-hidden="true"></i>
                <strong>${esc(name)}${note ? `<small>${esc(note)}</small>` : ""}</strong>
                <span>${esc(state)}</span>
            </li>`;
        el.statusInfra.innerHTML = portfolioData.stack
            .map((layer) => row(layer.tech, layer.layer.toLowerCase(), "beží"))
            .join("");
        el.statusLive.innerHTML = portfolioData.devProjects
            .filter((project) => project.state === "v prevádzke")
            .map((project) => row(project.name, project.kind, project.state))
            .join("");
    }

    function startClock() {
        if (!el.clock) return;
        let format;
        try {
            format = new Intl.DateTimeFormat("sk-SK", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Bratislava" });
        } catch (error) {
            format = new Intl.DateTimeFormat("sk-SK", { hour: "2-digit", minute: "2-digit" });
        }
        const tick = () => {
            const now = new Date();
            el.clock.textContent = `Bratislava ${format.format(now)}`;
            el.clock.dateTime = now.toISOString();
            setTimeout(tick, 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()) + 50);
        };
        tick();
    }

    function renderServers() {
        el.servers.innerHTML = portfolioData.servers.map((server, index) => `
            <article class="server-card reveal" style="--i:${index % 2}">
                <header>
                    <h4>${esc(server.name)}</h4>
                    ${stateTag(server.status)}
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


    /* Oficiálne logá výrobcov (Simple Icons, CC0). Farby sú farby značiek, nie akcent webu. */
    const AI_LOGOS = {
        claude: '<svg viewBox="0 0 24 24" width="28" height="28" focusable="false"><path fill="#d97757" d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/></svg>',
        openai: '<svg viewBox="0 0 24 24" width="28" height="28" focusable="false"><path fill="currentColor" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>',
        gemini: '<svg viewBox="0 0 24 24" width="28" height="28" focusable="false"><defs><linearGradient id="geminiGrad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#1c7df1"/><stop offset=".55" stop-color="#8d6be8"/><stop offset="1" stop-color="#e86a7e"/></linearGradient></defs><path fill="url(#geminiGrad)" d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>',
        deepseek: '<svg viewBox="0 0 24 24" width="28" height="28" focusable="false"><path fill="#4d6bfe" d="M23.748 4.651c-.254-.124-.364.113-.512.233-.051.04-.094.09-.137.137-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.155-.708-.311-.955-.65-.172-.24-.219-.509-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.094.172.187.129.323-.082.28-.18.553-.266.833-.055.179-.137.218-.328.14a5.5 5.5 0 0 1-1.737-1.179c-.857-.828-1.631-1.743-2.597-2.46a12 12 0 0 0-.689-.47c-.985-.957.13-1.743.387-1.836.27-.098.094-.433-.778-.428-.872.003-1.67.295-2.687.685a3 3 0 0 1-.465.136 9.6 9.6 0 0 0-2.883-.101c-1.885.21-3.39 1.1-4.497 2.622C.082 8.776-.231 10.854.152 13.02c.403 2.284 1.568 4.175 3.36 5.653 1.857 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.132-.284 4.994-1.86.47.234.962.328 1.78.398.629.058 1.235-.031 1.705-.129.735-.155.684-.836.418-.961-2.155-1.004-1.682-.595-2.112-.926 1.095-1.295 2.768-3.598 3.284-6.733.05-.346.115-.834.108-1.114-.004-.171.035-.238.23-.257a4.2 4.2 0 0 0 1.545-.475c1.397-.763 1.96-2.016 2.093-3.517.02-.23-.004-.467-.247-.588M11.58 18.168c-2.088-1.642-3.101-2.183-3.52-2.16-.39.024-.32.472-.234.763.09.288.207.487.371.74.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.168-1.361-.801-2.5-1.86-3.301-3.306-.775-1.393-1.225-2.888-1.299-4.482-.02-.385.094-.522.477-.592a4.7 4.7 0 0 1 1.53-.038c2.131.311 3.946 1.264 5.467 2.774.868.86 1.525 1.887 2.202 2.89.72 1.066 1.494 2.082 2.48 2.915.348.291.626.513.892.677-.802.09-2.14.109-3.055-.615zm1.001-6.44a.306.306 0 0 1 .415-.287.3.3 0 0 1 .113.074.3.3 0 0 1 .086.214c0 .17-.136.307-.308.307a.303.303 0 0 1-.306-.307m3.11 1.596c-.2.081-.4.151-.591.16a1.25 1.25 0 0 1-.798-.254c-.274-.23-.47-.358-.551-.758a1.7 1.7 0 0 1 .015-.588c.07-.327-.007-.537-.238-.727-.188-.156-.426-.199-.689-.199a.6.6 0 0 1-.254-.078.253.253 0 0 1-.114-.358 1 1 0 0 1 .192-.21c.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.392.451.462.576.685.915.176.264.336.536.446.848.066.194-.02.353-.25.45"/></svg>',
        qwen: '<svg viewBox="0 0 24 24" width="28" height="28" focusable="false"><path fill="#615ced" d="M23.919 14.545 20.817 9.17l1.47-2.544a.56.56 0 0 0 0-.566l-1.633-2.83a.57.57 0 0 0-.49-.283h-6.207L12.487.402a.57.57 0 0 0-.49-.284H8.732a.56.56 0 0 0-.49.284L5.139 5.775h-2.94a.56.56 0 0 0-.49.284L.077 8.887a.56.56 0 0 0 0 .567L3.18 14.83l-1.47 2.545a.56.56 0 0 0 0 .566l1.634 2.83a.57.57 0 0 0 .49.283h6.205l1.47 2.545a.57.57 0 0 0 .49.284h3.266a.57.57 0 0 0 .49-.284l3.104-5.375h2.94a.57.57 0 0 0 .49-.283l1.634-2.828a.55.55 0 0 0-.004-.568M8.733.686l1.634 2.828-1.634 2.828H21.8L20.164 9.17H7.425L5.63 6.06Zm1.306 19.801-6.205-.002 1.634-2.83h3.265L2.201 6.344h3.267q3.182 5.517 6.367 11.032zm10.124-5.66L18.53 12l-6.532 11.315-1.634-2.83c2.129-3.673 4.25-7.351 6.373-11.028h3.592l3.102 5.374z"/></svg>'
    };

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
                    <span class="ai-logo ai-logo-${esc(tool.logo)}" aria-hidden="true">${AI_LOGOS[tool.logo] || ""}</span>
                    <span class="ai-role">${esc(tool.role)}</span>
                </header>
                <p class="ai-maker">${esc(tool.maker)}</p>
                <h3>${esc(tool.name)}</h3>
                <p>${esc(tool.note)}</p>
                <ul class="ai-models">${tool.models.map((model) => `<li><span>${esc(model.name)}</span><small>${esc(model.spec)}</small></li>`).join("")}</ul>
            </article>
        `).join("");
    }

    renderStats();
    renderSkills();
    renderStatus();
    startClock();
    renderProjects();
    renderServers();
    renderTimeline();
    renderLayers();
    renderLists();
    if (el.year) el.year.textContent = String(new Date().getFullYear());

    /* ---------- reveal pri scrolle ---------- */

    const revealObserver = "IntersectionObserver" in window
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
        if (!Number.isFinite(target)) {
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
            node.textContent = "0";
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

    const spySections = ["o-mne", "projekty", "ai", "infrastruktura", "minecraft", "siete-skola", "kontakt"]
        .map((id) => document.getElementById(id))
        .filter(Boolean);
    const navKey = { "siete-skola": "minecraft" };
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
        const px = clamp(window.innerHeight * 0.62 - rect.top, 0, rect.height);
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
        }, 120);
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
            <p class="detail-meta"><span>${esc(project.kind)}</span><span>${esc(project.year)}</span>${stateTag(project.state)}</p>
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
            <p class="detail-private"><svg class="ico" aria-hidden="true"><use href="#i-lock"/></svg>Zdrojový kód je súkromný, projekt nie je open source.</p>
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
        el.dialog.classList.add("is-closing");
        closeTimer = setTimeout(finish, 240);
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
})();
