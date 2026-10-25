/* Pozadie hero — pokojná perspektívna mriežka bodov, ktorá sa pomaly blíži
   a pri pohybe myši sa pod kurzorom jemne zvlní. Ďaleko vybledne do pozadia.
   Canvas žije iba v hero. Mimo viewportu a na skrytej záložke sa nekreslí,
   pri prefers-reduced-motion vznikne jeden statický snímok. */
(function () {
    "use strict";

    var canvas = document.getElementById("heroBg");
    if (!canvas || !canvas.getContext) return;

    var hero = canvas.parentElement;
    var ctx = canvas.getContext("2d");
    var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    var ROWS = 17;          /* počet hĺbkových radov mriežky */
    var ROW_SPEED = 0.16;   /* rady za sekundu — pomalý pohyb k divákovi */
    var WAVE_AMP = 12;      /* px, vlnenie mriežky */
    var BUMP_AMP = 34;      /* px, vydutie pod kurzorom */
    var BUMP_SIGMA = 130;   /* px, dosah kurzora */
    var MAX_DPR = 2;

    var width = 0;
    var height = 0;
    var dpr = 1;
    var cols = 31;
    var horizon = 0;
    var spanX = 0;
    var xs = null;          /* súradnice bodov pre aktuálny snímok */
    var ys = null;
    var bumps = null;       /* sila vydutia každého bodu, pre druhý priechod */
    var scales = null;      /* 1 / z pre každý rad */
    var pointer = { x: -9999, y: -9999, sx: -9999, sy: -9999, strength: 0, active: false };
    var clock = 0;
    var running = false;
    var visible = true;
    var rafId = 0;
    var last = 0;

    function layout() {
        cols = width < 600 ? 15 : width < 1000 ? 23 : 31;
        horizon = height * 0.3;
        spanX = width * 1.4;
        var size = (ROWS + 1) * cols;
        xs = new Float32Array(size);
        ys = new Float32Array(size);
        bumps = new Float32Array(size);
        scales = new Float32Array(ROWS + 1);
    }

    function resize() {
        var rect = hero.getBoundingClientRect();
        width = Math.max(1, Math.round(rect.width));
        height = Math.max(1, Math.round(rect.height));
        dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        layout();
        draw();
    }

    /* hĺbka radu: bližšie rady sú od seba ďalej, vzdialené sa zhusťujú k horizontu */
    function depth(row) {
        return 1 + 0.22 * row + 0.02 * row * row;
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        var travel = clock * ROW_SPEED;
        var base = Math.floor(travel);
        var phase = travel - base;
        var invMax = 1 / depth(ROWS);
        var span = 1 - invMax;
        var cx = width / 2;
        var colStep = spanX / (cols - 1);
        var sigma2 = 2 * BUMP_SIGMA * BUMP_SIGMA;
        var useBump = pointer.strength > 0.01;
        var r, c, k, i, rf, z, inv, w, y, x, dx, dy, b;

        for (r = 0; r <= ROWS; r++) {
            rf = r - phase;
            z = depth(rf);
            inv = 1 / z;
            scales[r] = inv;
            k = base + r;
            for (c = 0; c < cols; c++) {
                i = r * cols + c;
                w = Math.sin(c * 0.5 + k * 0.42 + clock * 0.7) + Math.sin(c * 0.23 - k * 0.31 + clock * 0.45);
                x = cx + (c - (cols - 1) / 2) * colStep * inv;
                y = horizon + (height - horizon) * (inv - invMax) / span - w * 0.5 * WAVE_AMP * inv;
                b = 0;
                if (useBump) {
                    dx = x - pointer.sx;
                    dy = y - pointer.sy;
                    b = Math.exp(-(dx * dx + dy * dy) / sigma2) * pointer.strength;
                    y -= b * BUMP_AMP * Math.sqrt(inv);
                }
                xs[i] = x;
                ys[i] = y;
                bumps[i] = b;
            }
        }

        /* vodorovné čiary rádov */
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgb(56,189,248)";
        for (r = 0; r <= ROWS; r++) {
            ctx.globalAlpha = Math.min(0.2, 0.03 + scales[r] * 0.18);
            ctx.beginPath();
            ctx.moveTo(xs[r * cols], ys[r * cols]);
            for (c = 1; c < cols; c++) ctx.lineTo(xs[r * cols + c], ys[r * cols + c]);
            ctx.stroke();
        }

        /* zvislé čiary stĺpcov */
        ctx.globalAlpha = 0.09;
        for (c = 0; c < cols; c++) {
            ctx.beginPath();
            ctx.moveTo(xs[c], ys[c]);
            for (r = 1; r <= ROWS; r++) ctx.lineTo(xs[r * cols + c], ys[r * cols + c]);
            ctx.stroke();
        }

        /* body v priesečníkoch */
        ctx.fillStyle = "rgb(45,212,191)";
        for (r = 0; r <= ROWS; r++) {
            inv = scales[r];
            var s = 1 + inv * 1.8;
            ctx.globalAlpha = Math.min(0.75, 0.12 + inv * 0.6);
            for (c = 0; c < cols; c++) {
                i = r * cols + c;
                ctx.fillRect(xs[i] - s / 2, ys[i] - s / 2, s, s);
            }
        }

        /* body pod kurzorom: azúrové, najsilnejšie s drobným limetkovým akcentom */
        if (useBump) {
            for (r = 0; r <= ROWS; r++) {
                inv = scales[r];
                for (c = 0; c < cols; c++) {
                    i = r * cols + c;
                    b = bumps[i];
                    if (b < 0.12) continue;
                    ctx.fillStyle = b > 0.8 ? "rgb(163,230,53)" : "rgb(56,189,248)";
                    ctx.globalAlpha = Math.min(0.95, 0.25 + b * 0.7);
                    var t = 1.6 + inv * 1.8 + b * 1.4;
                    ctx.fillRect(xs[i] - t / 2, ys[i] - t / 2, t, t);
                }
            }
        }
        ctx.globalAlpha = 1;
    }

    function frame(now) {
        if (!running) return;
        var dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        clock += dt;
        /* kurzor sa dobieha plynulo, aby vlna nepreskakovala */
        if (pointer.active) {
            if (pointer.sx < -9000) { pointer.sx = pointer.x; pointer.sy = pointer.y; }
            pointer.sx += (pointer.x - pointer.sx) * Math.min(1, dt * 9);
            pointer.sy += (pointer.y - pointer.sy) * Math.min(1, dt * 9);
            pointer.strength = Math.min(1, pointer.strength + dt * 3);
        } else {
            pointer.strength = Math.max(0, pointer.strength - dt * 2);
        }
        draw();
        rafId = requestAnimationFrame(frame);
    }

    function start() {
        if (running || motionQuery.matches || !visible || document.hidden) return;
        running = true;
        last = performance.now();
        rafId = requestAnimationFrame(frame);
    }

    function stop() {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = 0;
    }

    function sync() {
        if (motionQuery.matches) {
            stop();
            pointer.active = false;
            pointer.strength = 0;
            clock = 0;
            draw();
        } else {
            start();
        }
    }

    hero.addEventListener("pointermove", function (event) {
        if (motionQuery.matches) return;
        var rect = canvas.getBoundingClientRect();
        pointer.x = event.clientX - rect.left;
        pointer.y = event.clientY - rect.top;
        pointer.active = true;
    }, { passive: true });

    hero.addEventListener("pointerleave", function () {
        pointer.active = false;
    });

    if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (entries) {
            visible = entries[entries.length - 1].isIntersecting;
            if (visible) start(); else stop();
        }, { threshold: 0 }).observe(hero);
    }

    document.addEventListener("visibilitychange", function () {
        if (document.hidden) stop(); else start();
    });

    if (motionQuery.addEventListener) motionQuery.addEventListener("change", sync);

    if ("ResizeObserver" in window) {
        var resizeTimer = 0;
        new ResizeObserver(function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resize, 120);
        }).observe(hero);
    } else {
        window.addEventListener("resize", resize);
    }

    /* prvé meranie až v ďalšom snímku, aby nevynútilo layout počas načítania */
    requestAnimationFrame(function () {
        resize();
        sync();
    });
})();
