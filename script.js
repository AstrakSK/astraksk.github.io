const portfolioData = {
    timeline: [
        {
            year: "2026",
            months: [
                {
                    month: "Jún",
                    events: [
                        {
                            title: "AstralysShield (mód + plugin) – client-side AntiCheat",
                            note: ""
                        }
                    ]
                },
                {
                    month: "Máj",
                    events: [
                        {
                            title: "AntiGhostTotem",
                            note: ""
                        },
                        {
                            title: "CZ/SK Tiers",
                            note: ""
                        }
                    ]
                },
                {
                    month: "Apríl",
                    events: [
                        {
                            title: "Astralys.CZ",
                            note: ""
                        },
                        {
                            title: "Raid serveru Fishcraft.cz",
                            note: "Nenechal som tak útok na moju osobnosť, znevažovanie a pochybnosti o mojich skúsenostiach s MC administráciou."
                        },
                        {
                            title: "MC developer na Fishcraft.cz",
                            note: "Keďže Flip skončil a chcel som stále pokračovať v administrácií nejakého serveru, tak som sa stal developerom na malom serveri Fishcraft.cz."
                        }
                    ]
                },
                {
                    month: "Október",
                    events: [
                        {
                            title: "Flip skončil",
                            note: ""
                        }
                    ]
                },
            ]
        },
        {
            year: "2025",
            months: [
                {
                    month: "Jún",
                    events: [
                        {
                            title: "Co-Owner serveru Flip (predtým známy ako FLIPSMP)",
                            note: ""
                        }
                    ]
                }
            ]
        },
        {
            year: "2024",
            months: [
                {
                    month: "Január",
                    events: [
                        {
                            title: "Info zatiaľ nie je k dispozícii",
                            note: ""
                        }
                    ]
                }
            ]
        },
        {
            year: "2023",
            months: [
                {
                    month: "Január",
                    events: [
                        {
                            title: "Info zatiaľ nie je k dispozícii",
                            note: ""
                        }
                    ]
                }
            ]
        },
        {
            year: "2022",
            months: [
                {
                    month: "Január",
                    events: [
                        {
                            title: "Info zatiaľ nie je k dispozícii",
                            note: ""
                        }
                    ]
                }
            ]
        },
        {
            year: "2021",
            months: [
                {
                    month: "Január",
                    events: [
                        {
                            title: "Info zatiaľ nie je k dispozícii",
                            note: ""
                        }
                    ]
                }
            ]
        },
        {
            year: "2020",
            months: [
                {
                    month: "Január",
                    events: [
                        {
                            title: "Info zatiaľ nie je k dispozícii",
                            note: ""
                        }
                    ]
                }
            ]
        }   
    ],
    minecraftProjects: [
        {
            name: "Astralys.cz",
            status: "Aktívny projekt",
            intro: "Info zatiaľ nie je k dispozícii."
        },
        {
            name: "Flip",
            status: "UKONČENÝ PROJEKT",
            intro: "Info zatiaľ nie je k dispozícii."
        },
        {
            name: "Tensium.eu",
            status: "UKONČENÝ PROJEKT",
            intro: "Info zatiaľ nie je k dispozícii."
        },
        {
            name: "Fishcraft",
            status: "ARCHÍVNY PROJEKT",
            intro: "ACCESS-DENIED"
        }
    ],
    javaProjects: [
        {
            id: "astralys-shield",
            name: "AstralysShield",
            type: "Mod + Plugin",
            icon: "fa-solid fa-shield",
            summary: "Klient-server bezpečnostný systém pre Minecraft, ktorý overuje integritu klienta a pomáha serveru vyhodnocovať rizikové správanie.",
            description: "AstralysShield je klientsko-serverový anti-cheat a trust systém pre Minecraft 1.21.11. Kombinuje Fabric klienta a Paper/Folia plugin do jedného riešenia, ktoré pomáha serverom overovať klienta, vyhodnocovať podozrivé signály a znižovať ban evasion.",
            features: [
                "Real-time Mod List Analysis – analýza načítaných Fabric modov a klientskych rozšírení.",
                "Client File Verification – kontrola vybraných Minecraft konfigurácií a súborov.",
                "Client Integrity Validation – overovanie integrity klienta a detekcia neoprávnených zásahov.",
                "Risk & Trust Engine – viacúrovňové vyhodnocovanie rizika namiesto jednoduchého ´legit / cheat´ modelu.",
                "Secure Client ↔ Server Handshake – zabezpečená komunikácia medzi klientom a serverom."
            ],
            process: "AstralysShield vznikol ako odpoveď na limity tradičných serverových anti-cheatov, ktoré dokážu pracovať iba s dátami prijatými zo servera a často musia odhadovať správanie klienta na základe packetov alebo pohybu hráča. Cieľom projektu bolo vytvoriť systém, ktorý poskytne serveru viac kontextu o stave klienta a zároveň zachová flexibilitu pre ďalší vývoj a rozširovanie. Projekt začal ako jednoduchý experiment s overovaním klienta pri pripojení, no postupne sa rozrástol na komplexný ekosystém pozostávajúci zo serverového pluginu a klientského Fabric módu. Počas vývoja boli navrhnuté a implementované mechanizmy pre zabezpečenú komunikáciu, správu session, integrity kontroly, risk scoring, trust systém, hardvérové fingerprinty a viacvrstvové vyhodnocovanie podozrivých udalostí. Veľká časť vývoja bola venovaná hľadaniu rovnováhy medzi efektívnou detekciou a minimalizáciou false positive výsledkov. Namiesto jednoduchého modelu „legit alebo cheat“ využíva AstralysShield viacero nezávislých signálov, ktoré sa kombinujú do jedného výsledku. To umožňuje administrátorom robiť lepšie rozhodnutia a zároveň znižuje riziko nesprávnych postihov pre legitímnych hráčov. Dôležitou súčasťou projektu je aj modularita a rozšíriteľnosť. Architektúra bola navrhnutá tak, aby bolo možné v budúcnosti pridávať nové detekčné mechanizmy, bezpečnostné kontroly, integrácie a analytické nástroje bez potreby prepisovania existujúcich systémov. Vďaka tomu je projekt pripravený na dlhodobý vývoj a prispôsobovanie novým typom klientov, modifikácií a techník obchádzania ochrany. AstralysShield je aktívne vyvíjaný projekt. Funkcionalita, detekčné mechanizmy aj interná architektúra sa priebežne upravujú na základe testovania, spätnej väzby a nových poznatkov z oblasti Minecraft bezpečnosti. Aktuálny stav preto nepredstavuje finálnu verziu, ale základ pre ďalšie rozširovanie a postupné budovanie komplexného klient-server bezpečnostného riešenia.",
            stack: " Java • Fabric • Paper/Spigot • HMAC • SQLite"
        },
        {
            id: "czsk-tiers",
            name: "CZ/SK Tiers",
            type: "Plugin",
            icon: "fa-solid fa-ranking-star",
            summary: "Integrácia oficiálneho CZ/SK PvP tierlistu priamo do Minecraft servera pomocou cacheovaného dátového systému, PlaceholderAPI a automatickej synchronizácie.",
            description: "Technické riešenie pre správu úrovní, hodnotení a konzistentného hráčskeho progresu.",
            features: [
                "Real-time synchronizácia - Automatické načítavanie a aktualizácia PvP tierov z externej databázy bez zaťaženia servera.",
                "PlaceholderAPI - Dynamické placeholdery pre TAB, hologramy, NPC a rebríčky vrátane TOP hráčov v jednotlivých PvP módoch.",
                "Cache architektúra - Dáta sú uložené v pamäti servera a pravidelne synchronizované, čo zabezpečuje vysoký výkon a minimálny počet požiadaviek."
            ],
            process: "Projekt vznikol ako riešenie pre integráciu oficiálneho CZ/SK PvP tierlistu priamo do Minecraft serverov. Hlavným cieľom bolo odstrániť potrebu manuálneho spracovania dát a umožniť ich okamžité využitie v TABe, hologramoch, NPC systémoch a vlastných pluginoch. Počas vývoja bola navrhnutá vlastná cache vrstva, synchronizačný systém a podpora dynamických PlaceholderAPI placeholderov vrátane globálnych a módovo špecifických leaderboardov.",
            stack: " Java • Paper API • PlaceholderAPI • JSON API • Cache Architecture • Leaderboards"
        }
    ]
};

const elements = {
    enterScreen: document.getElementById("enterScreen"),
    bgMusic: document.getElementById("bgMusic"),
    breadcrumb: document.getElementById("breadcrumb"),
    contentScroll: document.getElementById("contentScroll"),
    timelineList: document.getElementById("timelineList"),
    minecraftProjectList: document.getElementById("minecraftProjectList"),
    javaProjectList: document.getElementById("javaProjectList"),
    javaProjectDetail: document.getElementById("javaProjectDetail")
};

const sectionLabels = {
    home: "Home",
    minecraft: "Minecraft Administrator",
    java: "Java Developer",
    security: "CyberSecurity",
    cisco: "Cisco",
    school: "IT School"
};

function renderTimeline() {
    elements.timelineList.innerHTML = portfolioData.timeline.map((yearBlock) => `
        <section class="timeline-year">
            <h3 class="timeline-year-label">${yearBlock.year}</h3>
            <div class="timeline-months">
                ${yearBlock.months.map((monthBlock) => `
                    <div class="timeline-month">
                        <h4 class="timeline-month-label">${monthBlock.month}</h4>
                        <div class="timeline-events">
                            ${monthBlock.events.map((event) => `
                                <article class="timeline-entry">
                                    <h5 class="timeline-entry-title">${event.title}</h5>
                                    <p class="note">${event.note}</p>
                                </article>
                            `).join("")}
                        </div>
                    </div>
                `).join("")}
            </div>
        </section>
    `).join("");
}

function renderMinecraftProjects() {
    elements.minecraftProjectList.innerHTML = portfolioData.minecraftProjects.map((project) => `
        <article class="minecraft-project">
            <div class="project-topline">
                <h3>${project.name}</h3>
                <span>${project.status}</span>
            </div>
            <p class="project-intro">${project.intro}</p>
        </article>
    `).join("");
}

function renderJavaProjects() {
    elements.javaProjectList.innerHTML = portfolioData.javaProjects.map((project) => `
        <button class="java-project-card" type="button" data-project-id="${project.id}">
            <span class="project-icon"><i class="${project.icon}"></i></span>
            <span>
                <strong>${project.name}</strong>
                <small>${project.type} · ${project.summary}</small>
            </span>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    `).join("");
}

function renderJavaDetail(project) {
    elements.javaProjectDetail.innerHTML = `
        <span class="project-type">${project.type}</span>
        <h2 class="detail-title">${project.name}</h2>
        <p class="detail-description">${project.description}</p>

        <div class="feature-list">
            ${project.features.map((feature) => `
                <div class="feature-item">
                    <i class="fa-solid fa-check"></i>
                    <p>${feature}</p>
                </div>
            `).join("")}
        </div>

        <section class="detail-section">
            <h3>Development story</h3>
            <p>${project.process}</p>
            <div class="tech-line">Core technologies: <strong>${project.stack}</strong></div>
        </section>

        <div class="gallery-placeholder">
            <div>
                <i class="fa-regular fa-images"></i>
                <strong>Gallery / Preview</strong>
                <small>Screenshots, videos or interface previews can be added here.</small>
            </div>
        </div>
    `;
}

renderTimeline();
renderMinecraftProjects();
renderJavaProjects();

function enterWebsite() {
    if (elements.enterScreen.classList.contains("hidden")) return;

    elements.enterScreen.classList.add("hidden");
    elements.bgMusic.volume = 0.25;
    elements.bgMusic.play().catch(() => {});
    startParticles();
}

elements.enterScreen.addEventListener("click", enterWebsite, { passive: false });
elements.enterScreen.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        enterWebsite();
    }
}, { passive: false });

const menuButtons = document.querySelectorAll(".menu-btn");
const pages = document.querySelectorAll(".page");
const javaViews = document.querySelectorAll(".java-view");

function showSection(sectionId) {
    const page = document.getElementById(sectionId);
    if (!page) return;

    menuButtons.forEach((button) => {
        const isActive = button.dataset.section === sectionId;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
    });

    pages.forEach((item) => item.classList.toggle("active", item.id === sectionId));
    elements.breadcrumb.textContent = sectionLabels[sectionId];
    elements.contentScroll.scrollTo({ top: 0, behavior: "auto" });

    if (sectionId === "java") showJavaView("overview");
}

menuButtons.forEach((button) => {
    button.addEventListener("click", () => showSection(button.dataset.section), { passive: false });
});

document.querySelectorAll(".expandable-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const content = document.getElementById(trigger.getAttribute("aria-controls"));
        const willOpen = trigger.getAttribute("aria-expanded") !== "true";

        trigger.setAttribute("aria-expanded", String(willOpen));
        content.hidden = !willOpen;
        content.classList.toggle("open", willOpen);
    }, { passive: false });
});

function showJavaView(viewName, project = null) {
    if (project) renderJavaDetail(project);

    javaViews.forEach((view) => {
        view.classList.toggle("active", view.dataset.javaView === viewName);
    });

    const breadcrumbLabels = {
        overview: "Java Developer",
        projects: "Java / Projects",
        detail: "Java / Project Detail"
    };

    elements.breadcrumb.textContent = breadcrumbLabels[viewName];
    elements.contentScroll.scrollTo({ top: 0, behavior: "auto" });
}

document.querySelectorAll("[data-java-route]").forEach((button) => {
    button.addEventListener("click", () => showJavaView(button.dataset.javaRoute), { passive: false });
});

elements.javaProjectList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project-id]");
    if (!card) return;

    const project = portfolioData.javaProjects.find((item) => item.id === card.dataset.projectId);
    if (project) showJavaView("detail", project);
}, { passive: false });

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
