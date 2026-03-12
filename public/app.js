/* Window */
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const percent = (scrollTop / height) * 100;
    document.getElementById("scroll-bar").style.width = percent + "%";
});

/* Random */
const bubble = document.getElementById("bubble");

const texts = [
    "semangat harimu",
    "ngoding lagi bang",
    "kopi dulu biar waras",
    "scroll santai aja"
];

let i = 0;

setInterval(() => {
    bubble.innerText = texts[i];
    bubble.classList.add("show");

    setTimeout(() => {
        bubble.classList.remove("show");
    }, 1000);

    i = (i + 1) % texts.length;
}, 3000);

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const percent = (scrollTop / height) * 100;
    document.getElementById("scroll-bar").style.width = percent + "%";
});

function topPage() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function kopi() {
    window.open("https://trakteer.id", "_blank");
}

function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: location.href
        });
    } else {
        navigator.clipboard.writeText(location.href);
        alert("link dicopy");
    }
}
/* Start Func*/
function time() {
    const time = document.getElementById("time");
    updateTime();
    setInterval(updateTime, 1000);

    function updateTime() {
        const now = new Date();

        let h = String(now.getHours()).padStart(2, "0");
        let m = String(now.getMinutes()).padStart(2, "0");
        let s = String(now.getSeconds()).padStart(2, "0");

        time.textContent = `${h}:${m}:${s}`;
    }
}

/* Start Func*/

time();
