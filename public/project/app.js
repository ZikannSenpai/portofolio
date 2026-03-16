function getGreeting() {
    const hour = new Date().getHours();

    if (hour >= 4 && hour < 11) return "HALO, SELAMAT PAGI.";
    if (hour >= 11 && hour < 15) return "HALO, SELAMAT SIANG.";
    if (hour >= 15 && hour < 18) return "HALO, SELAMAT SORE.";
    return "HALO, SELAMAT MALAM.";
}

const texts = [
    getGreeting(),
    "WELCOME TO MY DASHBOARD.",
    "CEPAT, MUDAH & MURAH.",
    "MADE BY ZIKASHMIST."
];
let i = 0;
let j = 0;
let isDeleting = false;
const speed = 60;

function type() {
    const current = texts[i];

    if (!isDeleting) {
        document.getElementById("type").textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 3000);
            return;
        }
    } else {
        document.getElementById("type").textContent = current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % texts.length;
        }
    }

    setTimeout(type, isDeleting ? 40 : speed);
}

type();
const navBtn = document.getElementById("navBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

navBtn.onclick = () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
};

overlay.onclick = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
};
