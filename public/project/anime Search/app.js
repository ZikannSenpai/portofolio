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

/*logic*/

const result = document.getElementById("results");
const btn = document.getElementById("search-btn");
const inp = document.getElementById("search");

btn.onclick = async () => {
    const input = inp.value.trim();
    if (!input) {
        result.innerHTML = "Input Tidak Boleh Kosong!";
        return;
    }

    result.innerHTML = "Loading...";

    try {
        const res1 = await fetch(
            `https://zikaneko.vercel.app/api/anime/search?query=${encodeURIComponent(input)}`
        );
        const res2 = await fetch(
            `https://www.sankavollerei.com/anime/animasu/search/${encodeURIComponent(input)}`
        );

        const json1 = await res1.json();
        const json2 = await res2.json();

        // gabungin jadi satu array
        const data1 = json1.data?.animeList || [];
        const data2 = json2?.animes || [];
        const combined = [...data2, ...data1];

        if (!combined.length) {
            result.innerHTML = "Anime tidak ditemukan!";
            return;
        }

        let html = "";
        combined.forEach(item => {
            html += `
            <div class="result-card">
                <img class="thumb" src="${item.poster}">
                <div class="meta">
                    <div class="video-title">${item.title || "No Title"}</div>
                    <div class="author">@${item.author || "ZikaNyawDev"}</div>
                    <div class="info">
                        <span>Status: ${item.status || item.status_or_day || "Unknown"}</span>
                        <span>Score: ${item.score || "N/A"}</span>
                    </div>
                    <div class="genre-list">
                        ${item.genreList ? item.genreList.map(g => `<span>${g.title}</span>`).join("") : ""}
                    </div>
                </div>
            </div>`;
        });

        result.innerHTML = html;
    } catch (err) {
        result.innerHTML = `Error: ${err}`;
        console.error("Error:", err);
    }
};
