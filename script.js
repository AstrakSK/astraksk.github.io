// =========================
// ENTER SCREEN + MUSIC
// =========================

const enterScreen = document.getElementById("enterScreen");
const bgMusic = document.getElementById("bgMusic");

if (enterScreen && bgMusic) {

    enterScreen.addEventListener("click", () => {

        enterScreen.classList.add("hidden");

        bgMusic.volume = 0.25;

        bgMusic.play().catch(err => {
            console.log(err);
        });

    });

}


// =========================
// TAB MENU
// =========================

const buttons = document.querySelectorAll(".tag-btn");
const tabs = document.querySelectorAll(".tab-content");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const target = button.dataset.tab;

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        tabs.forEach(tab => {
            tab.classList.remove("active");
        });

        button.classList.add("active");

        document
            .getElementById(target)
            .classList.add("active");

    });

});


// =========================
// DISCORD COPY
// =========================

const discordButton = document.getElementById("discordButton");
const toast = document.getElementById("toast");

if (discordButton) {

    discordButton.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText("astraksk");

            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);

        } catch (error) {

            console.error(error);

        }

    });

}


// =========================
// PARTICLES
// =========================

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

const particles = [];

const PARTICLE_COUNT = 140;

for (let i = 0; i < PARTICLE_COUNT; i++) {

    particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        radius: Math.random() * 2.5 + 1,

        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,

        opacity: Math.random() * 0.5 + 0.2

    });

}

function drawConnections() {

    for (let a = 0; a < particles.length; a++) {

        for (let b = a; b < particles.length; b++) {

            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {

                ctx.beginPath();

                ctx.strokeStyle =
                    `rgba(139,92,246,${0.15 - distance / 900})`;

                ctx.lineWidth = 1;

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();

            }

        }

    }

}

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p => {

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(139,92,246,${p.opacity})`;

        ctx.fill();

    });

    drawConnections();

    requestAnimationFrame(
        animateParticles
    );

}

animateParticles();

window.addEventListener(
    "resize",
    resizeCanvas
);