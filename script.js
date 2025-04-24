const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateStars();
}

function generateStars() {
    stars = [];
    const numStars = 80;
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            alpha: Math.random(),
            speed: 0.002 + Math.random() * 0.02
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) star.speed *= -1;
    }
    requestAnimationFrame(drawStars); // Keep the animation going
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
requestAnimationFrame(drawStars); // Start the animation loop initially

    // Typewriter effect
const roles = ["Frontend Developer", "UI/UX Designer", "Programmer", "AI Enthusist", "Backend Developer"];
let index = 0, charIndex = 0, deleting = false;
const typewriter = document.querySelector(".typewriter");

function type() {
    let current = roles[index];
    typewriter.textContent = current.substring(0, charIndex) + (charIndex % 2 === 0 ? "|" : "");
    if (!deleting && charIndex < current.length) {
        charIndex++;
    } else if (deleting && charIndex > 0) {
        charIndex--;
    } else if (!deleting && charIndex === current.length) {
        deleting = true;
        setTimeout(type, 1000);
        return;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        index = (index + 1) % roles.length;
    }
    setTimeout(type, deleting ? 80 : 150);
}

type();