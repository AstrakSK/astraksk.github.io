/* =============================================================
   Digitálny mozog — mapa stránky ako sieť uzlov.

   Mozog je hierarchia: v strede stojí otvorený uzol a okolo neho
   na prstenci sedia len tie veci, ktoré sa dajú reálne rozkliknúť.
   Domov → sekcie → kategórie → položky. Späť sa ide tlačidlom,
   lebo rodič na obrazovke nie je — vedie k nemu len vlákno, ktoré
   sa stráca v tme.

   Rozloženie sa počíta v premietnutých pixeloch, takže prstenec
   sa zmestí na 13" aj na 27" — nikdy nevytečie z obrazovky.

   Ďaleko vzadu je druhá, oveľa hustejšia sieť: internet. Tento
   mozog je len jeho vybraný kúsok, ktorý máme na monitore.

   Kreslí sa do <canvas id="brain">, interaktívne body sú DOM
   tlačidlá v <div id="brainHud"> (kvôli ostrému textu, hoveru
   a klávesnici).

   Verejné API je na window.Brain — pozri koniec súboru.
   ============================================================= */

(() => {
    "use strict";

    const canvas = document.getElementById("brain");
    const netCanvas = document.getElementById("brainNet");
    const hud = document.getElementById("brainHud");
    if (!canvas || !netCanvas || !hud) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const netCtx = netCanvas.getContext("2d", { alpha: true });

    /* Internet sa kreslí na zlomku rozlíšenia a prehliadač ho roztiahne
       na celé okno. To roztiahnutie je samo osebe rozmazanie — a je
       zadarmo. CSS `filter: blur()` vyzeral rovnako, ale bez GPU stál
       26 snímkov za sekundu (59 → 33). */
    const NET_SCALE = 0.27;
    let netRatio = NET_SCALE;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    /* ---------- konštanty ---------- */

    const NEAR = 120;
    const FADE_IN = 460;

    const VIEW_DIST = 1250;      /* odstup kamery od roviny scény */
    const RING_X = 0.36;         /* polomer prstenca ako podiel šírky */
    const RING_Y = 0.30;         /* a výšky — elipsa sadne na širokú obrazovku */
    const RING_MAX_X = 560;
    const RING_MAX_Y = 300;
    const DEPTH = 170;           /* rozptyl v hĺbke, len pre parallax */
    const DEPTH_BAND = 52;       /* v pásme menší — inak sa prstenec pokriví */

    /* Mozog nie je celoobrazovkový režim — žije v pásme vedľa obsahu.
       Šírku pásma drží CSS (--brain-band), aby sa layout a scéna
       nerozišli. Pod prahom je pásmo nulové a mozog je len pozadie. */
    const BAND_MIN = 260;

    /* Internet: ďaleko, husto, potichu. */
    const NET_Z = 2300;
    const NET_SPAN = 3200;
    const NET_HAZE_START = 4200;
    const NET_HAZE_RANGE = 6200;
    /* Vzruchy sú krátke a rýchle, takže jeden z nich je na plátne len
       pár pixelov. Viditeľné ich robí počet, nie veľkosť — pri tomto
       tempe ich naraz beží niekoľko stoviek. */
    const NET_PULSE_LIMIT = 760;

    /* Pozor na väzbu: koľko vzruchov beží naraz je `tempo × životnosť`,
       a životnosť je prevrátená rýchlosť. Spomalenie o 20 % teda samo
       osebe zahustí sieť o štvrtinu — tempo sa musí stiahnuť s ním,
       inak sa stlmenie vyruší. */
    const NET_PULSE_SPAWN = 0.00113;

    /* Vzruchy v mozgu — jemné, bez hlavy, len stopa po vlákne. */
    const MIND_PULSE_LIMIT = 26;
    const MIND_PULSE_SPAWN = 0.16;

    const COLORS = {
        line: "174, 190, 230",
        node: "196, 210, 244",
        center: "206, 190, 255",
        active: "183, 148, 255",
        core: "255, 255, 255",
        net: "116, 142, 194",
        netPulse: "222, 242, 255",
        mindPulse: "186, 160, 250"
    };

    /* ---------- stav ---------- */

    let width = 0;
    let height = 0;
    let focal = 900;
    let ratio = 1;

    const cam = { x: 0, y: 0, z: -VIEW_DIST };
    const camTarget = { x: 0, y: 0, z: -VIEW_DIST };



    let root = null;
    let current = null;          /* otvorený uzol — stred scény */
    let selected = null;         /* rozkliknutá položka bez potomkov */
    let nodeById = new Map();

    let scene = [];              /* stred + deti, to jediné je klikateľné */
    let center = null;

    let netNodes = [];
    let netEdges = [];
    let netPulses = [];
    let mindPulses = [];
    let netTimer = 0;
    let mindTimer = 0;

    /* Posun celej scény. Pri kroku dnu aj von scéna nenaskočí — začne
       posunutá tak, aby nový stred ležal presne tam, kde bol uzol,
       z ktorého sme vyšli, a odtiaľ sa zvezie po vlákne na miesto. */
    const shift = { x: 0, y: 0, z: 0 };

    /* Smer cesty pre svetlo, ktoré po vlákne prebehne spolu s nami. */
    const travel = { x: 0, y: 0, z: 0, t: 1, dir: 1 };

    /* Cesta medzi úrovňami má dve fázy. Najprv sa chvíľu vidí len
       vlákno, po ktorom ideme — kamera je pri ňom a sieť cieľa ešte
       nie je. Až potom sa rozvinie. */
    const journey = { active: false, t: 0, hold: 1.25, x: 0, y: 0 };

    /* 0 = vidno len vlákno a stred, 1 = celá úroveň. */
    let unfold = 1;

    /* Kam ukazuje vlákno k rodičovi. Mení sa podľa toho, kde uzol
       visel u rodiča. */
    let parentDir = null;



    let navigate = () => {};
    let labelFor = (id) => id;

    /* Obsah stránky vie mozog prepnúť a mozog vie prepnúť obsah —
       bez tejto poistky by si preklik v mozgu sám prepísal úroveň
       späť na sekciu. */
    let syncing = false;

    let running = false;
    let started = false;
    let frameHandle = 0;
    let lastFrame = 0;
    let clock = 0;

    let frameCost = 16;
    let quality = 1;
    let band = 0;

    /* ---------- pomocné ---------- */

    const clamp = (value, min, max) => (value < min ? min : value > max ? max : value);
    const lerp = (a, b, t) => a + (b - a) * t;

    function reduced() {
        return motionQuery.matches;
    }

    let seed = 20200412;
    function random() {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return seed / 4294967296;
    }

    function spread(scale) {
        return (random() - 0.5) * 2 * scale;
    }

    function shortLabel(text, limit = 26) {
        const head = String(text).split(/[—–:,.(]/)[0].trim();
        if (head.length <= limit) return head;
        const cut = head.slice(0, limit);
        const space = cut.lastIndexOf(" ");
        return `${(space > 12 ? cut.slice(0, space) : cut).trim()}…`;
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, (char) => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        }[char]));
    }

    /* ---------- sprity ---------- */
    /* Žiara sa vykreslí raz do offscreen canvasu a potom sa už len
       škáluje — radial gradient pre každý uzol v každom snímku by
       bola najdrahšia vec v slučke. */

    function makeSprite(size, paint) {
        const sprite = document.createElement("canvas");
        sprite.width = size;
        sprite.height = size;
        paint(sprite.getContext("2d"), size);
        return sprite;
    }

    const glowSprite = makeSprite(128, (c, size) => {
        const mid = size / 2;
        const gradient = c.createRadialGradient(mid, mid, 0, mid, mid, mid);
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(0.16, "rgba(255,255,255,.72)");
        gradient.addColorStop(0.42, "rgba(255,255,255,.2)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        c.fillStyle = gradient;
        c.fillRect(0, 0, size, size);
    });

    const shadeSprite = makeSprite(256, (c, size) => {
        const mid = size / 2;
        const gradient = c.createRadialGradient(mid, mid, 0, mid, mid, mid);
        gradient.addColorStop(0, "rgba(6, 5, 13, .92)");
        gradient.addColorStop(0.55, "rgba(6, 5, 13, .7)");
        gradient.addColorStop(1, "rgba(6, 5, 13, 0)");
        c.fillStyle = gradient;
        c.fillRect(0, 0, size, size);
    });

    const haloSprite = makeSprite(256, (c, size) => {
        const mid = size / 2;
        const gradient = c.createRadialGradient(mid, mid, 0, mid, mid, mid);
        gradient.addColorStop(0, "rgba(124, 92, 214, .14)");
        gradient.addColorStop(0.6, "rgba(96, 72, 180, .05)");
        gradient.addColorStop(1, "rgba(96, 72, 180, 0)");
        c.fillStyle = gradient;
        c.fillRect(0, 0, size, size);
    });

    /* ---------- strom ---------- */
    /* Do mozgu ide len to, čo má na stránke zmysel otvoriť. Nie je
       to zrkadlo dát, je to mapa ciest. */

    function makeItem(id, label, extra) {
        return Object.assign({
            id,
            label,
            caption: "",
            text: "",
            meta: "",
            action: null,
            children: [],
            parent: null,
            weight: 1
        }, extra);
    }

    function adopt(parent, children) {
        children.forEach((child) => {
            child.parent = parent;
            parent.children.push(child);
        });
        return parent;
    }

    function buildTree(data) {
        nodeById = new Map();

        const timelineYears = data.timeline
            .filter((year) => Array.isArray(year.months))
            .map((year) => {
                const events = year.months.reduce((sum, month) => sum + month.events.length, 0);
                const unit = events === 1 ? "udalosť" : events < 5 ? "udalosti" : "udalostí";
                return makeItem(`minecraft/timeline/${year.year}`, String(year.year), {
                    caption: "rok",
                    text: `${events} ${unit} — ${year.months.map((month) => month.month).join(", ")}.`,
                    action: { type: "section", id: "minecraft" }
                });
            });

        const servers = data.servers.map((server) => makeItem(`minecraft/servers/${server.name}`, server.name, {
            caption: server.role,
            text: server.intro,
            meta: `${server.status} · ${server.period}`,
            action: { type: "section", id: "minecraft" }
        }));

        const minecraft = adopt(makeItem("minecraft", "Minecraft", {
            caption: "sekcia",
            text: "Servery, pozície a technické míľniky od roku 2020.",
            action: { type: "section", id: "minecraft" }
        }), [
            adopt(makeItem("minecraft/timeline", "Časová os", {
                caption: "kategória",
                text: "Servery, pozície a technické míľniky po rokoch.",
                action: { type: "section", id: "minecraft" }
            }), timelineYears),

            adopt(makeItem("minecraft/servers", "Servery", {
                caption: "kategória",
                text: "Projekty, na ktorých som robil.",
                action: { type: "section", id: "minecraft" }
            }), servers)
        ]);

        const dev = adopt(makeItem("dev", "Vývoj", {
            caption: "sekcia",
            text: "Vlastné projekty — pluginy, mody, backend aj aplikácie.",
            action: { type: "section", id: "dev" }
        }), data.devProjects.map((project) => makeItem(`dev/${project.id}`, project.name, {
            caption: project.kind,
            text: project.summary,
            meta: `${project.state} · ${project.stack.slice(0, 3).join(" · ")}`,
            action: { type: "project", id: project.id }
        })));

        const infra = adopt(makeItem("infra", "Infraštruktúra", {
            caption: "sekcia",
            text: "Čo beží pod projektmi a ako sa to prevádzkuje.",
            action: { type: "section", id: "infra" }
        }), [
            adopt(makeItem("infra/stack", "Stack", {
                caption: "kategória",
                text: "Vrstvy, na ktorých to stojí.",
                action: { type: "section", id: "infra" }
            }), data.stack.map((layer) => makeItem(`infra/stack/${layer.tech}`, layer.tech, {
                caption: layer.layer,
                text: layer.note,
                action: { type: "section", id: "infra" }
            }))),

            adopt(makeItem("infra/practices", "Prax", {
                caption: "kategória",
                text: "Pravidlá, ktoré držia prevádzku pri živote.",
                action: { type: "section", id: "infra" }
            }), data.practices.map((practice, index) => makeItem(`infra/practices/${index}`, shortLabel(practice), {
                caption: "prax",
                text: practice,
                action: { type: "section", id: "infra" }
            })))
        ]);

        const network = adopt(makeItem("network", "Siete", {
            caption: "sekcia",
            text: "Sieťová časť — od zapojenia po prevádzku.",
            action: { type: "section", id: "network" }
        }), data.network.map((item, index) => makeItem(`network/${index}`, shortLabel(item), {
            caption: "siete",
            text: item,
            action: { type: "section", id: "network" }
        })));

        const school = adopt(makeItem("school", "Škola", {
            caption: "sekcia",
            text: "Odbor, zameranie a čo z toho reálne používam.",
            action: { type: "section", id: "school" }
        }), data.school.map((item, index) => makeItem(`school/${index}`, shortLabel(item), {
            caption: "škola",
            text: item,
            action: { type: "section", id: "school" }
        })));

        const ai = adopt(makeItem("ai", "AI spoločníci", {
            caption: "sekcia",
            text: "Modely, ktoré mi kryjú časť práce — kód, grafika, rešerš.",
            action: { type: "section", id: "ai" }
        }), data.ai.map((tool) => makeItem(`ai/${tool.name}`, tool.name, {
            caption: tool.role,
            text: tool.note,
            action: { type: "section", id: "ai" }
        })));

        root = adopt(makeItem("home", "Domov", {
            caption: "mozog",
            text: "Mapa celej stránky. Klikni na sekciu a prepadneš o úroveň nižšie.",
            action: { type: "section", id: "home" }
        }), [minecraft, dev, infra, network, school, ai]);

        const index = (node) => {
            nodeById.set(node.id, node);
            node.children.forEach(index);
        };
        index(root);

        current = root;
        selected = null;
    }

    /* ---------- rozloženie scény ---------- */

    /* Prevod premietnutých pixelov na svetové jednotky v rovine z=0.
       Vďaka nemu je prstenec vždy rovnako veľký voči obrazovke. */
    function worldPerPixel() {
        return VIEW_DIST / focal;
    }

    function ringRadius() {
        const unit = worldPerPixel();

        /* V pásme je prstenec kruhovejší — na úzkom páse by široká
           elipsa vytiekla do textu. */
        if (interactive()) {
            const reach = Math.min(band * 0.25, height * 0.24, 175);
            return { x: reach * 0.66 * unit, y: reach * 1.35 * unit };
        }

        return {
            x: Math.min(width * RING_X, RING_MAX_X) * unit,
            y: Math.min(height * RING_Y, RING_MAX_Y) * unit
        };
    }

    /* Kde na prstenci dieťa sedí. Rovnaký vzorec potrebuje rozloženie
       aj smer vlákna k rodičovi, preto je tu raz. */
    function ringSlot(count, index, base) {
        const rings = count > 9 ? 2 : 1;
        const ring = rings === 1 ? 0 : index % 2;
        const inRing = rings === 1 ? count : Math.ceil((count - ring) / 2);
        const slot = rings === 1 ? index : Math.floor(index / 2);

        return {
            turn: base + (slot / Math.max(1, inRing)) * Math.PI * 2
                + (ring ? Math.PI / Math.max(1, inRing) : 0),
            scale: ring ? 0.58 : 1
        };
    }

    /* Od akého uhla sa deti uzla rozsádzajú. Prstenec je natočený tak,
       aby vlákno k rodičovi viedlo medzerou medzi deťmi — inak dieťa
       sadne presne na cestu späť a nedá sa rozoznať, čo je čo.

       Prstenec je elipsa, takže pootočenie o pol kroku v parametri
       nie je pol medzery na obrazovke — pri ôsmich deťoch z toho
       vyšli dva stupne. Natočenie sa preto hľadá v uhloch, ktoré
       reálne vidno. */
    function ringBase(item) {
        const dir = parentDirection(item);
        if (!dir) return -Math.PI / 2;

        const count = item.children.length;
        if (!count) return -Math.PI / 2;

        const radius = ringRadius();
        const parentAngle = Math.atan2(dir.y, dir.x);
        const step = (Math.PI * 2) / Math.max(1, count > 9 ? Math.ceil(count / 2) : count);

        let bestBase = parentAngle;
        let bestGap = -1;

        for (let probe = 0; probe < 24; probe += 1) {
            const base = parentAngle + (probe / 24) * step;
            let gap = Math.PI;

            for (let index = 0; index < count; index += 1) {
                const { turn, scale } = ringSlot(count, index, base);
                const angle = Math.atan2(
                    Math.sin(turn) * radius.y * scale,
                    Math.cos(turn) * radius.x * scale
                );

                let apart = Math.abs(angle - parentAngle);
                if (apart > Math.PI) apart = Math.PI * 2 - apart;
                if (apart < gap) gap = apart;
            }

            if (gap > bestGap) {
                bestGap = gap;
                bestBase = base;
            }
        }

        return bestBase;
    }

    /* Kde sedí i-te dieťa voči stredu.

       V pásme to nie je prstenec, ale zvislý vejár: rozostup v osi y
       je daný konštrukciou, takže sa štítky nemajú ako prekryť. Na
       kruhu sa v 380-pixelovom páse prekrývali na každej úrovni —
       vodorovný štítok má cez 150 px a dva uzly v rovnakej výške si
       ho položili cez seba. Mimo pásma (široké pozadie) zostáva
       pôvodný prstenec. */
    function childOffset(count, index) {
        const unit = worldPerPixel();

        if (interactive()) {
            const rowGap = clamp((height * 0.58) / Math.max(1, count - 1), 46, 94);
            const bulge = Math.min(band * 0.17, 76);

            /* Pri nepárnom počte by prostredné dieťa sadlo presne na
               výšku stredu a štítky by sa prekryli — vejár sa preto
               posunie o pol riadka. */
            const skew = count % 2 ? 0.5 : 0;

            return {
                x: (band * 0.1 + bulge * Math.sin((Math.PI * (index + 0.5)) / count)) * unit,
                y: (index - (count - 1) / 2 + skew) * rowGap * unit,
                z: 0
            };
        }

        const { turn, scale } = ringSlot(count, index, ringBase(currentOwner(count, index)));
        const radius = ringRadius();

        return {
            x: Math.cos(turn) * radius.x * scale,
            y: Math.sin(turn) * radius.y * scale,
            z: Math.sin(turn * 2 + index) * DEPTH
        };
    }

    /* Prstencový režim potrebuje uzol, ktorého deti kreslíme. Pri
       rozložení je to `current`, pri smere k rodičovi jeho rodič —
       preto sa podáva zvonku cez `layoutOwner`. */
    let layoutOwner = null;
    function currentOwner() {
        return layoutOwner || current;
    }

    /* Smer, ktorým leží rodič — opak miesta, kde uzol visel u neho.
       Vďaka tomu vlákno aj tlačidlo „späť" ukazujú tam, odkiaľ sme
       reálne prišli. */
    function parentDirection(item) {
        const parent = item && item.parent;
        if (!parent) return null;

        const index = parent.children.indexOf(item);
        if (index < 0) return null;

        const previous = layoutOwner;
        layoutOwner = parent;
        const offset = childOffset(parent.children.length, index);
        layoutOwner = previous;

        const length = Math.hypot(offset.x, offset.y) || 1;
        return { x: -offset.x / length, y: -offset.y / length };
    }

    /* Deti sedia na elipse okolo stredu. Nad deväť kusov sa prstenec
       rozdelí na dva, aby sa štítky neprekrývali. */
    function layoutScene() {
        scene = [];

        const list = current.children;

        center = {
            item: current,
            kind: "center",
            bx: 0, by: 0, bz: 0,
            x: 0, y: 0, z: 0,
            r: 2.4,
            glow: 64,
            born: 0
        };

        scene.push(center);

        layoutOwner = current;

        list.forEach((item, index) => {
            const offset = childOffset(list.length, index);

            scene.push({
                item,
                kind: "child",
                bx: offset.x,
                by: offset.y,
                bz: offset.z,
                x: 0, y: 0, z: 0,
                r: item.children.length ? 1.8 : 1.3,
                glow: item.children.length ? 34 : 22,
                born: 0
            });
        });

        layoutOwner = null;

        /* `pulse` rozfázuje dýchanie žiary. Vlastný pohyb uzol nemá —
           popisok na ňom visí a chvenie by bolo na texte vidieť. */
        scene.forEach((node, index) => {
            node.pulse = index * 1.7;
            node.x = node.bx;
            node.y = node.by;
            node.z = node.bz;
        });
    }

    /* ---------- internet ---------- */
    /* Mimo mozgu je tma a v nej druhá sieť — oveľa hustejšia, oveľa
       menšia, bez popiskov. Nič sa v nej nedá kliknúť; je to kulisa,
       ktorá hovorí, že toto je len vybraný kúsok siete. */

    function netCount() {
        if (width < 720) return 900;
        if (width < 1440) return 1700;
        return 2400;
    }

    function buildNet() {
        netNodes = [];
        netEdges = [];
        netPulses = [];

        const total = Math.round(netCount() * (quality < 0.8 ? 0.6 : 1));

        for (let index = 0; index < total; index += 1) {
            /* Uzly sa sypú do kužeľa pohľadu, nie do kvádra — inak by
               vzdialenejšie vrstvy nedosiahli okraje obrazovky a sieť
               by pri krajoch riedla do prázdna. */
            const depth = NET_Z + random() * NET_SPAN;
            const reach = depth / 820;

            netNodes.push({
                bx: spread(1360 * reach),
                by: spread(880 * reach),
                bz: depth,
                x: 0, y: 0, z: 0,
                sx: 0, sy: 0, ps: 0, fade: 0, vis: false,
                r: 0.5 + random() * 0.55,
                alpha: 0.3 + random() * 0.4,
                pulse: random() * Math.PI * 2,
                drift: 2 + random() * 4,
                speed: 0.04 + random() * 0.07
            });
        }

        /* Susedia sa hľadajú v mriežke, nie každý s každým — 620 uzlov
           by inak znamenalo 190 tisíc porovnaní pri každom resize. */
        const cell = 760;
        const grid = new Map();
        const key = (x, y, z) => `${Math.floor(x / cell)}:${Math.floor(y / cell)}:${Math.floor(z / cell)}`;

        netNodes.forEach((node, index) => {
            const id = key(node.bx, node.by, node.bz);
            if (!grid.has(id)) grid.set(id, []);
            grid.get(id).push(index);
        });

        const pairs = new Set();

        netNodes.forEach((node, index) => {
            const gx = Math.floor(node.bx / cell);
            const gy = Math.floor(node.by / cell);
            const gz = Math.floor(node.bz / cell);
            const near = [];

            for (let dx = -1; dx <= 1; dx += 1) {
                for (let dy = -1; dy <= 1; dy += 1) {
                    for (let dz = -1; dz <= 1; dz += 1) {
                        const bucket = grid.get(`${gx + dx}:${gy + dy}:${gz + dz}`);
                        if (!bucket) continue;

                        for (let step = 0; step < bucket.length; step += 1) {
                            const other = bucket[step];
                            if (other === index) continue;
                            const target = netNodes[other];
                            const distance = (node.bx - target.bx) ** 2
                                + (node.by - target.by) ** 2
                                + (node.bz - target.bz) ** 2;
                            if (distance > cell * cell) continue;
                            near.push({ other, distance });
                        }
                    }
                }
            }

            near.sort((first, second) => first.distance - second.distance);

            near.slice(0, 4).forEach(({ other }) => {
                const id = index < other ? `${index}:${other}` : `${other}:${index}`;
                if (pairs.has(id)) return;
                pairs.add(id);
                netEdges.push({ a: netNodes[index], b: netNodes[other] });
            });
        });
    }

    /* ---------- vzruchy ---------- */

    function spawnNetPulse() {
        if (!netEdges.length) return;
        const edge = netEdges[(Math.random() * netEdges.length) | 0];
        const flip = Math.random() < 0.5;

        netPulses.push({
            a: flip ? edge.b : edge.a,
            b: flip ? edge.a : edge.b,
            t: 0,
            speed: 2.08 + Math.random() * 3.52
        });
    }

    function spawnMindPulse() {
        if (scene.length < 2) return;
        const node = scene[1 + ((Math.random() * (scene.length - 1)) | 0)];
        const inward = Math.random() < 0.5;

        mindPulses.push({
            a: inward ? node : center,
            b: inward ? center : node,
            t: 0,
            speed: 1.7 + Math.random() * 1.5
        });
    }

    function updatePulses(delta) {
        netTimer += delta;
        const netBudget = Math.round(NET_PULSE_LIMIT * quality);

        while (netTimer > NET_PULSE_SPAWN) {
            netTimer -= NET_PULSE_SPAWN;
            if (netPulses.length >= netBudget) break;
            spawnNetPulse();
        }

        for (let index = netPulses.length - 1; index >= 0; index -= 1) {
            const pulse = netPulses[index];
            pulse.t += pulse.speed * delta;
            if (pulse.t > 1) netPulses.splice(index, 1);
        }

        mindTimer += delta;

        while (mindTimer > MIND_PULSE_SPAWN) {
            mindTimer -= MIND_PULSE_SPAWN;
            if (mindPulses.length >= MIND_PULSE_LIMIT) break;
            spawnMindPulse();
        }

        for (let index = mindPulses.length - 1; index >= 0; index -= 1) {
            const pulse = mindPulses[index];
            pulse.t += pulse.speed * delta;
            if (pulse.t > 1) mindPulses.splice(index, 1);
        }
    }

    /* ---------- kamera ---------- */

    /* Šírka pásma. Nečíta sa z premennej --brain-band: getComputedStyle
       vracia pre custom property surový `clamp(...)`, nie pixely.
       Obsah je o pásmo odsadený, takže jeho ľavý okraj je tá hodnota
       — a navyše vždy sedí s tým, čo layout naozaj spravil. */
    function bandWidth() {
        const shell = document.querySelector(".shell");
        if (!shell) return 0;
        return Math.round(shell.getBoundingClientRect().left);
    }

    function interactive() {
        return band >= BAND_MIN;
    }

    /* Kam na obrazovke má sadnúť stred scény. */
    function stagePoint() {
        if (interactive()) return { x: band * 0.18, y: height * 0.47 };
        return { x: width * 0.22, y: height * 0.5 };
    }

    function applyView() {
        /* Počas jazdy kamera pritiahne k vláknu a potom zasa povolí. */
        const ride = journey.active
            ? 1 + 0.42 * Math.sin(Math.PI * clamp(journey.t / journey.hold, 0, 1))
            : 1;

        const distance = VIEW_DIST / ride;
        const scale = focal / distance;
        const stage = stagePoint();

        /* Kamera sa nastaví tak, aby stred scény pristál presne na
           mieste v pásme — nie cez text. */
        camTarget.x = (width / 2 - stage.x) / scale;
        camTarget.y = (height / 2 - stage.y) / scale;
        camTarget.z = -distance;
    }

    /* ---------- projekcia a kreslenie ---------- */

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        ratio = Math.min(window.devicePixelRatio || 1, 1.5);
        focal = clamp(height * 1.02, 640, 1180);

        canvas.width = Math.floor(width * ratio);
        canvas.height = Math.floor(height * ratio);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

        band = bandWidth();

        netRatio = NET_SCALE;
        netCanvas.width = Math.floor(width * netRatio);
        netCanvas.height = Math.floor(height * netRatio);
        netCanvas.style.width = `${width}px`;
        netCanvas.style.height = `${height}px`;
        netCtx.setTransform(netRatio, 0, 0, netRatio, 0, 0);

        layoutScene();
        applyView();
    }

    function project(node, hazeStart, hazeRange) {
        const dz = node.z - cam.z;

        if (dz < NEAR) {
            node.vis = false;
            node.fade = 0;
            return;
        }

        const scale = focal / dz;
        node.ps = scale;
        node.sx = (node.x - cam.x) * scale + width / 2;
        node.sy = (node.y - cam.y) * scale + height / 2;
        node.fade = clamp((dz - NEAR) / FADE_IN, 0, 1)
            * clamp(1 - (dz - hazeStart) / hazeRange, 0, 1);

        const margin = 160;
        node.vis = node.fade > 0.015
            && node.sx > -margin && node.sx < width + margin
            && node.sy > -margin && node.sy < height + margin;
    }

    function drawNet(strength) {
        netCtx.setTransform(netRatio, 0, 0, netRatio, 0, 0);
        netCtx.clearRect(0, 0, width, height);
        netCtx.globalCompositeOperation = "source-over";
        netCtx.globalAlpha = 1;

        for (let index = 0; index < netNodes.length; index += 1) {
            project(netNodes[index], NET_HAZE_START, NET_HAZE_RANGE);
        }

        /* Hrany aj uzly idú jedným ťahom — pri tisícoch uzlov je každý
           samostatný stroke cítiť. */
        netCtx.beginPath();
        for (let index = 0; index < netEdges.length; index += 1) {
            const edge = netEdges[index];
            if (!edge.a.vis && !edge.b.vis) continue;
            if (edge.a.fade <= 0 || edge.b.fade <= 0) continue;
            netCtx.moveTo(edge.a.sx, edge.a.sy);
            netCtx.lineTo(edge.b.sx, edge.b.sy);
        }
        netCtx.strokeStyle = `rgba(${COLORS.net}, ${0.26 * strength})`;
        netCtx.lineWidth = 1.1;
        netCtx.stroke();

        /* Tri pásma podľa hĺbky — jedna spoločná alfa pre všetky uzly
           by zo siete spravila plochú textúru bez diaľky. */
        for (let band = 0; band < 3; band += 1) netBands[band].length = 0;

        for (let index = 0; index < netNodes.length; index += 1) {
            const node = netNodes[index];
            if (!node.vis) continue;
            const band = clamp(Math.floor(node.fade * node.alpha * 4.4), 0, 2);
            const size = clamp(node.r * node.ps * 3.4, 1.9, 3.6);
            netBands[band].push(node.sx - size / 2, node.sy - size / 2, size);
        }

        for (let band = 0; band < 3; band += 1) {
            const points = netBands[band];
            if (!points.length) continue;

            netCtx.fillStyle = `rgba(${COLORS.net}, ${(0.26 + band * 0.18) * strength})`;
            for (let step = 0; step < points.length; step += 3) {
                netCtx.fillRect(points[step], points[step + 1], points[step + 2], points[step + 2]);
            }
        }
    }

    const netBands = [[], [], []];
    const dot = { sx: 0, sy: 0, ps: 0, fade: 0, ok: false };

    function projectPoint(x, y, z, hazeStart, hazeRange) {
        const dz = z - cam.z;

        if (dz < NEAR) {
            dot.ok = false;
            return dot;
        }

        const scale = focal / dz;
        dot.ps = scale;
        dot.sx = (x - cam.x) * scale + width / 2;
        dot.sy = (y - cam.y) * scale + height / 2;
        dot.fade = clamp((dz - NEAR) / FADE_IN, 0, 1)
            * clamp(1 - (dz - hazeStart) / hazeRange, 0, 1);
        dot.ok = dot.fade > 0.02
            && dot.sx > -40 && dot.sx < width + 40
            && dot.sy > -40 && dot.sy < height + 40;

        return dot;
    }

    /* Vzruch je stopa po vlákne, nie letiaca bodka — hlavu úmyselne
       nekreslíme, inak to vyzerá ako padajúce hviezdy.

       Stopy sa zbierajú do pásiem priehľadnosti a každé pásmo ide
       jedným ťahom. Tristo samostatných strokov stálo desať snímkov
       za sekundu. */
    const trailBands = [[], [], [], []];

    function drawPulseTrail(target, list, tint, alphaScale, tail, hazeStart, hazeRange, strength) {
        if (!list.length) return;

        for (let band = 0; band < trailBands.length; band += 1) trailBands[band].length = 0;

        let stroke = 0.5;

        for (let index = 0; index < list.length; index += 1) {
            const pulse = list[index];
            const a = pulse.a;
            const b = pulse.b;
            const head = clamp(pulse.t, 0, 1);
            const back = clamp(pulse.t - tail, 0, 1);
            if (head - back < 0.004) continue;

            const from = projectPoint(
                a.x + (b.x - a.x) * back,
                a.y + (b.y - a.y) * back,
                a.z + (b.z - a.z) * back,
                hazeStart, hazeRange
            );
            if (!from.ok) continue;

            const fx = from.sx;
            const fy = from.sy;
            const ffade = from.fade;
            const fps = from.ps;

            const to = projectPoint(
                a.x + (b.x - a.x) * head,
                a.y + (b.y - a.y) * head,
                a.z + (b.z - a.z) * head,
                hazeStart, hazeRange
            );
            if (!to.ok) continue;

            /* Na koncoch vlákna vzruch dobehne a zhasne, ale nie do
               nuly — s čistým sínusom bol jasný len v strede dráhy
               a cez rozmazanie ho nebolo vidieť. */
            const life = 0.5 + 0.5 * Math.sin(Math.PI * head);
            const alpha = clamp(ffade * strength * alphaScale * life, 0, 1);
            if (alpha < 0.015) continue;

            const band = clamp(Math.floor(alpha / alphaScale * 4), 0, trailBands.length - 1);
            trailBands[band].push(fx, fy, to.sx, to.sy);
            if (fps > stroke) stroke = fps;
        }

        target.globalCompositeOperation = "lighter";
        target.lineCap = "round";
        /* Sieťové plátno má zlomkové rozlíšenie, takže projekčná mierka
           vychádza okolo 0,2 — bez vlastného minima by čiara mala pol
           pixela a antialiasing ju rozmaže do stratena. */
        target.lineWidth = target === netCtx
            ? clamp(stroke * 6, 1.4, 2.8)
            : clamp(stroke * 0.9, 0.3, 1.1);

        for (let band = 0; band < trailBands.length; band += 1) {
            const points = trailBands[band];
            if (!points.length) continue;

            target.beginPath();
            for (let step = 0; step < points.length; step += 4) {
                target.moveTo(points[step], points[step + 1]);
                target.lineTo(points[step + 2], points[step + 3]);
            }

            target.strokeStyle = `rgba(${tint}, ${(alphaScale * (band + 1)) / 4})`;
            target.stroke();
        }
    }

    /* Vlákno k rodičovi. Nevedie nikam viditeľnému — vytráca sa
       smerom k rohu, kde je tlačidlo o krok späť. */
    function drawParentThread(strength) {
        if (!center || !center.vis || !current.parent) return;

        const x = center.sx;
        const y = center.sy;

        /* Vlákno sa stráca v tme — ukazuje, že úroveň niekde pokračuje,
           nevedie k ničomu klikateľnému. */
        const reach = Math.max(width, height) * 1.15;
        const toX = x + parentDir.x * reach;
        const toY = y + parentDir.y * reach;

        /* Počas jazdy je vlákno to jediné, čo na scéne svieti. */
        const lead = journey.active ? 1.9 : 1;

        const gradient = ctx.createLinearGradient(x, y, toX, toY);
        gradient.addColorStop(0, `rgba(${COLORS.line}, ${clamp(0.5 * lead * strength, 0, 1)})`);
        gradient.addColorStop(0.55, `rgba(${COLORS.line}, ${clamp(0.16 * lead * strength, 0, 1)})`);
        gradient.addColorStop(1, `rgba(${COLORS.line}, 0)`);

        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = gradient;
        ctx.lineWidth = journey.active ? 1.5 : 0.9;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(toX, toY);
        ctx.stroke();
    }


    function drawSpokes(strength) {
        if (!center) return;

        ctx.globalCompositeOperation = "source-over";
        ctx.beginPath();

        for (let index = 1; index < scene.length; index += 1) {
            const node = scene[index];
            if (!node.vis && !center.vis) continue;
            ctx.moveTo(center.sx, center.sy);
            ctx.lineTo(node.sx, node.sy);
        }

        ctx.strokeStyle = `rgba(${COLORS.line}, ${0.46 * strength})`;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    /* Mozog musí čitateľne ležať pred internetom. Pod scénu sa preto
       položí tmavý kruh, ktorý vzdialenú sieť utlmí, a na neho slabá
       fialová žiara — akoby svietil zvnútra.

       Oba prechody sú sprity: createRadialGradient dvakrát na snímok
       stálo pätnásť snímkov za sekundu. */
    function drawMindWash(strength) {
        if (!center || !center.vis) return;

        const radius = clamp(Math.min(width, height) * 0.62 * center.ps * 1.6, 220, Math.max(width, height) * 0.9);

        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = clamp(strength, 0, 1);
        ctx.drawImage(shadeSprite, center.sx - radius, center.sy - radius, radius * 2, radius * 2);

        const halo = radius * 0.72;
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = clamp(strength, 0, 1);
        ctx.drawImage(haloSprite, center.sx - halo, center.sy - halo, halo * 2, halo * 2);

        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
    }

    /* Svetlo, ktoré po vlákne prebehne spolu s nami. Beží v smere
       cesty — dnu od kraja do stredu, von naopak. */
    function drawTravel(strength) {
        if (travel.t >= 1 || !center) return;

        const reach = Math.hypot(travel.x, travel.y, travel.z);
        if (reach < 40) return;

        const ease = travel.t * travel.t * (3 - 2 * travel.t);
        const head = travel.dir > 0 ? ease : 1 - ease;
        const life = Math.sin(Math.PI * travel.t);

        const ax = center.x - travel.x;
        const ay = center.y - travel.y;
        const az = center.z - travel.z;

        const back = clamp(head - 0.26, 0, 1);
        const from = projectPoint(
            ax + travel.x * back,
            ay + travel.y * back,
            az + travel.z * back,
            3200, 3000
        );
        if (!from.ok) return;

        const fx = from.sx;
        const fy = from.sy;

        const to = projectPoint(
            ax + travel.x * head,
            ay + travel.y * head,
            az + travel.z * head,
            3200, 3000
        );
        if (!to.ok) return;

        ctx.globalCompositeOperation = "lighter";
        ctx.lineCap = "round";
        ctx.strokeStyle = `rgba(${COLORS.mindPulse}, ${clamp(0.5 * life * strength, 0, 1)})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(fx, fy);
        ctx.lineTo(to.sx, to.sy);
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
    }

    function drawNode(node, strength, bloom) {
        const isCenter = node.kind === "center";
        const isSelected = selected === node;
        const alpha = node.fade * strength * node.born;
        if (alpha <= 0.015) return;

        const beat = 0.88 + Math.sin(clock * 1.1 + node.pulse) * 0.12;
        const tint = isSelected ? COLORS.active
            : isCenter ? COLORS.center
            : COLORS.node;

        if (node.glow > 0) {
            const radius = clamp(node.glow * node.ps * beat, 3, width < 720 ? 110 : 190);
            ctx.globalAlpha = clamp(alpha * (isCenter ? 0.5 : 0.36) * bloom, 0, 1);
            ctx.drawImage(glowSprite, node.sx - radius, node.sy - radius, radius * 2, radius * 2);
        }

        const core = clamp(node.r * node.ps * (isSelected ? 1.4 : 1), 0.5, 7);
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(node.sx, node.sy, core, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${isCenter || isSelected ? COLORS.core : tint}, ${clamp(alpha * 0.92, 0, 1)})`;
        ctx.fill();
    }

    /* Popisky kreslené po znakoch — letter-spacing na canvase zatiaľ
       nemá každý prehliadač a rozostup robí polovicu vzhľadu. */
    function drawTracked(text, x, y, tracking, align) {
        const widths = [];
        let total = 0;

        for (const char of text) {
            const measured = ctx.measureText(char).width + tracking;
            widths.push(measured);
            total += measured;
        }

        let cursor = align === "right" ? x - total + tracking : x;

        for (let index = 0; index < text.length; index += 1) {
            ctx.fillText(text[index], cursor, y);
            cursor += widths[index];
        }
    }

    function drawLabels(strength) {
        /* V pásme nesú popisky DOM prvky — kreslený štítok by sa
           s nimi zdvojil. Kreslí sa len vtedy, keď pásmo nie je. */
        if (interactive()) return;

        const node = selected || center;
        if (!node || !node.vis || node.fade < 0.2 || node.ps < 0.12) return;

        const alpha = clamp(node.fade * 0.76 * strength, 0, 1);
        if (alpha < 0.05) return;

        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = 1;
        ctx.font = "500 10px ui-monospace, \"Cascadia Mono\", \"SF Mono\", Consolas, monospace";
        ctx.textBaseline = "middle";

        const side = node.sx < width * 0.34 ? -1 : 1;
        const align = side < 0 ? "right" : "left";
        const offset = clamp(Math.max(node.glow, 24) * node.ps * 0.62, 16, 70);
        const x = node.sx + offset * side;
        const y = node.sy - offset * 0.55;

        ctx.strokeStyle = `rgba(${COLORS.line}, ${alpha * 0.5})`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(node.sx + offset * 0.35 * side, node.sy - offset * 0.3);
        ctx.lineTo(x - 6 * side, y);
        ctx.lineTo(x + 74 * side, y);
        ctx.stroke();

        ctx.fillStyle = `rgba(${COLORS.active}, ${alpha})`;
        drawTracked(shortLabel(node.item.label, 22).toUpperCase(), x, y - 10, 2.6, align);

        ctx.fillStyle = `rgba(${COLORS.node}, ${alpha * 0.4})`;
        drawTracked((node.item.caption || "").toUpperCase(), x, y + 11, 2, align);
    }

    function render(strength) {
        const bloom = strength * strength;

        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        ctx.clearRect(0, 0, width, height);

        for (let index = 0; index < scene.length; index += 1) {
            project(scene[index], 3200, 3000);
        }

        drawNet(strength);
        drawPulseTrail(netCtx, netPulses, COLORS.netPulse, 0.45, 0.11, NET_HAZE_START, NET_HAZE_RANGE, strength);

        drawMindWash(strength);
        drawParentThread(strength);
        drawSpokes(strength);
        drawPulseTrail(ctx, mindPulses, COLORS.mindPulse, 0.52, 0.1, 3200, 3000, strength);
        drawTravel(strength);

        /* Režim kreslenia sa nastaví raz — prepínanie pri každom uzle
           bola v profile jedna z najdrahších položiek slučky. */
        ctx.globalCompositeOperation = "lighter";
        for (let index = 0; index < scene.length; index += 1) {
            if (scene[index].vis) drawNode(scene[index], strength, bloom);
        }

        ctx.globalAlpha = 1;
        drawLabels(strength);
        ctx.globalCompositeOperation = "source-over";
    }

    /* ---------- snímková slučka ---------- */

    function step(now) {
        if (!running) return;

        const delta = Math.min((now - lastFrame) / 1000, 0.1);
        lastFrame = now;
        clock += delta;

        /* Kĺzavý priemer ceny snímku. Keď stroj nestíha, sieť si sama
           uberie — radšej menej svetiel než trhaný pohyb. */
        frameCost += (delta * 1000 - frameCost) * 0.08;
        if (frameCost > 21 && quality > 0.5) quality = Math.max(0.5, quality - delta * 0.9);
        else if (frameCost < 14 && quality < 1) quality = Math.min(1, quality + delta * 0.4);

        if (journey.active) {
            journey.t += delta;
            if (journey.t >= journey.hold) journey.active = false;
        }

        /* Rozvinutie cieľovej siete. Nabieha až po fáze vlákna. */
        const unfoldEase = 1 - Math.exp(-delta * 2.6);
        unfold = lerp(unfold, journey.active ? 0 : 1, unfoldEase);

        /* Počas cesty sa scéna zvezie pomalšie — je to jazda po
           spoji, nie prestrih. */
        const shiftEase = 1 - Math.exp(-delta * (journey.active ? 1.5 : 3.4));
        shift.x = lerp(shift.x, 0, shiftEase);
        shift.y = lerp(shift.y, 0, shiftEase);
        shift.z = lerp(shift.z, 0, shiftEase);

        if (travel.t < 1) travel.t = Math.min(1, travel.t + delta * 1.7);

        applyView();

        const camEase = 1 - Math.exp(-delta * 4.6);
        cam.x = lerp(cam.x, camTarget.x, camEase);
        cam.y = lerp(cam.y, camTarget.y, camEase);
        cam.z = lerp(cam.z, camTarget.z, camEase);

        updatePulses(delta);

        /* Rovnaké tempo ako sklz — rôzne rýchlosti krútili dráhu uzla
           do oblúka namiesto rovnej cesty po vlákne. */
        const bornEase = 1 - Math.exp(-delta * 3.4);

        for (let index = 0; index < scene.length; index += 1) {
            const node = scene[index];

            /* Stred je vidieť vždy — je to miesto, kam ideme. Prstenec
               čaká na koniec jazdy po vlákne. */
            node.born = lerp(node.born, index ? unfold : 1, bornEase);

            /* Uzly nemajú vlastný pohyb — popisok visí na bode a každé
               chvenie je na texte vidieť. Hýbe sa len nábeh a sklz. */
            const grow = 0.25 + node.born * 0.75;

            node.x = node.bx * grow + shift.x;
            node.y = node.by * grow + shift.y;
            node.z = node.bz * grow + shift.z;
        }

        for (let index = 0; index < netNodes.length; index += 1) {
            const node = netNodes[index];
            node.x = node.bx + Math.sin(clock * node.speed + node.pulse) * node.drift;
            node.y = node.by + Math.cos(clock * node.speed * 0.9 + node.pulse) * node.drift;
            node.z = node.bz;
        }

        render(interactive() ? 0.92 : 0.6);
        updateHud();

        frameHandle = requestAnimationFrame(step);
    }

    function start() {
        started = true;
        if (running || document.hidden || reduced()) {
            if (reduced()) staticFrame();
            return;
        }
        running = true;
        lastFrame = performance.now();
        frameHandle = requestAnimationFrame(step);
    }

    function stop() {
        running = false;
        cancelAnimationFrame(frameHandle);
    }

    /* Jeden statický snímok — pre prefers-reduced-motion a pre stav
       pred vstupom na stránku. */
    function staticFrame() {
        shift.x = 0;
        shift.y = 0;
        shift.z = 0;
        travel.t = 1;
        journey.active = false;
        unfold = 1;
        parentDir = parentDirection(current);
        applyView();

        cam.x = camTarget.x;
        cam.y = camTarget.y;
        cam.z = camTarget.z;

        scene.forEach((node) => {
            node.born = 1;
            node.x = node.bx;
            node.y = node.by;
            node.z = node.bz;
        });

        netNodes.forEach((node) => {
            node.x = node.bx;
            node.y = node.by;
            node.z = node.bz;
        });

        render(interactive() ? 0.92 : 0.6);
        updateHud();
    }

    /* ---------- HUD: uzly ako statické popisky ---------- */

    const hudBar = document.createElement("div");
    hudBar.className = "brain-bar";
    hudBar.innerHTML = '<span class="brain-path" id="brainPath">MOZOG</span>';

    const layer = document.createElement("div");
    layer.className = "brain-layer";

    hud.append(hudBar, layer);

    const pathLabel = hudBar.querySelector("#brainPath");
    const buttons = new Map();

    function buttonFor(node) {
        const id = node.item.id;
        if (buttons.has(id)) return buttons.get(id);

        /* Uzol je popisok, nie tlačidlo — grafika je dekorácia,
           naviguje sa menu a obsahom. */
        const element = document.createElement("div");
        element.className = "brain-node";
        element.innerHTML = `
            <span class="brain-text">
                <strong></strong>
                <small></small>
            </span>
        `;

        /* Referencie a posledný stav si prvok nesie so sebou —
           querySelector pre každý uzol v každom snímku stál viac než
           celé kreslenie siete. */
        element._strong = element.querySelector("strong");
        element._small = element.querySelector("small");
        element._flags = "";

        layer.appendChild(element);
        buttons.set(id, element);
        return element;
    }

    function updateHud() {
        if (!interactive()) {
            buttons.forEach((element) => element.classList.remove("shown"));
            return;
        }

        const seen = new Set();

        scene.forEach((node) => {
            const element = buttonFor(node);
            const id = node.item.id;
            seen.add(id);

            /* V pásme sa meria proti pásmu, nie proti oknu — inak by
               uzol pri pravom kraji vytiekol do textu. */
            const edge = interactive() ? band : width;
            const pad = interactive() ? 34 : (width < 720 ? 30 : 60);
            const inFrame = node.sx > pad && node.sx < edge - pad
                && node.sy > 78 && node.sy < height - 64;

            if (!node.vis || !inFrame || node.ps < 0.08 || node.fade < 0.18 || node.born < 0.1) {
                if (element.classList.contains("shown")) element.classList.remove("shown");
                return;
            }

            const strong = element._strong;
            const small = element._small;
            const label = node.item.label;
            const caption = node.item.children.length
                ? `${node.item.children.length} ${node.item.children.length === 1 ? "položka" : node.item.children.length < 5 ? "položky" : "položiek"}`
                : node.item.caption || "";

            if (strong.textContent !== label) strong.textContent = label;
            if (small.textContent !== caption) small.textContent = caption;

            /* Vo vejári idú štítky vždy doprava — striedanie strán by
               ich v úzkom páse zrazilo do seba. */
            const flip = interactive() ? false : node.sx > width * 0.62;
            const isCenter = node.kind === "center";
            const flags = `${isCenter ? "c" : ""}${node.item.children.length ? "h" : "l"}${flip ? "f" : ""}${selected === node ? "a" : ""}`;

            if (element._flags !== flags) {
                element._flags = flags;
                element.classList.add("shown");
                element.classList.toggle("is-hub", isCenter || node.item.children.length > 0);
                element.classList.toggle("is-center", isCenter);
                element.classList.toggle("is-leaf", !isCenter && !node.item.children.length);
                element.classList.toggle("flip", flip);
                element.classList.toggle("is-active", selected === node);
            } else if (!element.classList.contains("shown")) {
                element.classList.add("shown");
            }
            /* Bod kreslí canvas — popisok sa naň len zavesí a vycentruje. */
            element.style.transform = `translate3d(${Math.round(node.sx)}px, ${Math.round(node.sy)}px, 0) translateY(-50%)${flip ? " translateX(-100%)" : ""}`;
            element.style.setProperty("--depth", clamp(node.fade * node.born, 0, 1).toFixed(3));
            element.style.setProperty("--near", clamp(node.ps * 1.4, 0.55, 1.15).toFixed(3));
        });

        buttons.forEach((element, id) => {
            if (seen.has(id)) return;
            element.classList.remove("shown");
        });

    }

    function setPath() {
        const trail = [];
        let cursor = current;

        while (cursor) {
            trail.unshift(cursor === root ? "MOZOG" : cursor.label.toUpperCase());
            cursor = cursor.parent;
        }

        if (selected) trail.push(selected.item.label.toUpperCase());
        pathLabel.textContent = trail.join(" / ");

    }

    /* ---------- navigácia v mozgu ---------- */

    function sceneNodeFor(item) {
        return scene.find((entry) => entry.item === item) || null;
    }

    /* Prestavba scény s letom: kamera zostane tam, kde bol uzol, z
       ktorého sme vyšli, a odtiaľ dobehne do nového stredu. */
    /* Prestavba úrovne so sklzom po vlákne.

       `anchorItem` je uzol, ktorý má po prestavbe zostať na mieste,
       kde práve je — pri kroku dnu je to otvorené dieťa, pri kroku
       von uzol, z ktorého cúvame. Scéna sa oň zavesí a odtiaľ sa
       zvezie na svoje miesto; kamera sa pritom nehýbe. */
    function rebuild(anchorItem, direction) {
        const before = anchorItem ? sceneNodeFor(anchorItem) : null;
        const fromX = before ? before.x : 0;
        const fromY = before ? before.y : 0;
        const fromZ = before ? before.z : 0;

        layoutScene();

        const after = anchorItem ? sceneNodeFor(anchorItem) : null;

        /* Uzly nenaskočia naraz — rozbalia sa po prstenci od toho,
           ktorý je najbližšie k smeru, odkiaľ prichádzame. Hodnoty
           `born` musia byť hotové skôr, než sa dopočíta posun: `born`
           škáluje polomer prstenca, takže inak by uzol na prvom
           snímku poskočil. */
        const bias = Math.hypot(fromX, fromY) || 1;

        scene.forEach((node, index) => {
            if (!index) {
                node.born = 0.5;
                return;
            }

            const along = (node.bx * fromX + node.by * fromY) / bias;
            node.born = clamp(0.16 + along / (bias * 5), 0, 0.34);
        });

        /* Kam uzol na prvom snímku reálne padne — vrátane mierky. */
        const grow = after ? 0.25 + after.born * 0.75 : 1;
        const toX = after ? after.bx * grow : 0;
        const toY = after ? after.by * grow : 0;
        const toZ = after ? after.bz * grow : 0;

        shift.x = fromX - toX;
        shift.y = fromY - toY;
        shift.z = (fromZ - toZ) * 0.5;

        travel.x = -shift.x;
        travel.y = -shift.y;
        travel.z = -shift.z;
        travel.t = 0;
        travel.dir = direction;

        parentDir = parentDirection(current);

        /* Sieť cieľa sa schová a kamera zostane pri vlákne. Bez tohto
           by nová úroveň naskočila skôr, než stihnem po spoji prísť. */
        const along = Math.hypot(shift.x, shift.y);

        if (along > 30) {
            journey.active = true;
            journey.t = 0;
            journey.x = shift.x / along;
            journey.y = shift.y / along;
            unfold = 0;
            scene.forEach((node, index) => {
                if (index) node.born = 0;
            });
        }

        applyView();
    }

    function enter(item) {
        if (!item || !item.children.length) return;

        current = item;
        selected = null;
        rebuild(item, 1);
        setPath();

        /* obsah stránky ide za mozgom, nech sedia na tej istej sekcii */
        tellPage(item);

        if (reduced()) staticFrame();
    }

    function back() {
        if (!current.parent) return;

        const from = current;
        current = current.parent;
        selected = null;

        /* Uzol, z ktorého cúvame, zostane pod okom a odsunie sa na
           svoje miesto v prstenci — presne opačný pohyb než krok dnu. */
        rebuild(from, -1);
        setPath();
        tellPage(current);

        if (reduced()) staticFrame();
    }

    /* Povie stránke, na ktorej sekcii mozog stojí, a pritom si nedá
       prepísať vlastnú úroveň. */
    function tellPage(item) {
        syncing = true;
        navigate({ type: "section", id: sectionOf(item), silent: true });
        syncing = false;
    }

    /* Do ktorej sekcie stránky uzol patrí — koreň id pred lomkou. */
    function sectionOf(item) {
        return item === root ? "home" : item.id.split("/")[0];
    }

    /* ---------- vstupy ---------- */

    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            resize();
            buildNet();
            if (!running) staticFrame();
        }, 160);
    }, { passive: true });

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) stop();
        else if (started) start();
    }, { passive: true });

    motionQuery.addEventListener("change", () => {
        stop();
        if (reduced()) staticFrame();
        else if (started) start();
    }, { passive: true });

    /* ---------- verejné API ---------- */

    /* Nájde položku v podstrome sekcie. Zhoda ide cez akciu projektu,
       presný názov alebo popisok. */
    function findItem(section, matcher) {
        const start = section === "home" ? root : nodeById.get(section);
        if (!start || matcher === undefined || matcher === null) return null;

        const query = typeof matcher === "string" ? { label: matcher } : matcher;
        const stack = [start];
        const loose = [];

        while (stack.length) {
            const item = stack.shift();

            if (item !== start) {
                if (query.project && item.action
                    && item.action.type === "project" && item.action.id === query.project) return item;

                if (query.label) {
                    const wanted = query.label.trim().toLowerCase();
                    const label = item.label.trim().toLowerCase();
                    if (label === wanted) return item;
                    if (label.startsWith(wanted) || wanted.startsWith(label)) loose.push(item);
                }

                if (query.caption && (item.caption || "").trim().toLowerCase() === query.caption.trim().toLowerCase()) {
                    return item;
                }
            }

            stack.push(...item.children);
        }

        return loose[0] || null;
    }

    /* Otvorí úroveň, na ktorej daná položka leží, a označí ju. */
    function reveal(item) {
        if (!item) return false;

        const parent = item.children.length ? item : item.parent || root;
        const changed = parent !== current;

        current = parent;
        layoutScene();

        selected = item.children.length ? null : sceneNodeFor(item);

        if (changed) {
            applyView();
        }

        setPath();
        return true;
    }

    hud.removeAttribute("aria-hidden");

    window.Brain = {
        build(data, options = {}) {
            navigate = options.onNavigate || navigate;
            if (options.sectionLabels) {
                labelFor = (id) => options.sectionLabels[id] || id;
            }

            buildTree(data);
            resize();
            buildNet();
            staticFrame();
        },

        /* Pozadie ide za obsahom stránky — sekcia sa otvorí ako úroveň. */
        goToSection(id, { instant = false } = {}) {
            if (syncing) return;

            const item = id === "home" ? root : nodeById.get(id);
            if (!item) return;

            const same = item === current;
            current = item;
            selected = null;
    
            if (!same) rebuild(null, 1);
            else applyView();

            setPath();
            if (instant || reduced()) staticFrame();
        },

        /* Let ku konkrétnej položke — projekt, rok, server. */
        goToNode(section, matcher, { instant = false } = {}) {
            const item = findItem(section, matcher);
            if (!item) {
                this.goToSection(section, { instant });
                return false;
            }

            reveal(item);
            if (instant || reduced()) staticFrame();
            return true;
        },

        clearNode() {
            if (!selected) return;
            selected = null;
                setPath();
            if (reduced()) staticFrame();
        },

        start,
        stop
    };
})();
