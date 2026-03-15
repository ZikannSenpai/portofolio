const bubble = document.getElementById("bubble");
let i = 0;
let c = 0;
let j = 0;
let current = "";
let isDeleting = false;

const text = [
    "Hello Im Zikann.",
    "Web Developeler Full Ngestuck di JS.",
    "Code Is Life.",
    "Custom Plugin Development.",
    "AI Engineer."
];
const texts = [
    "Irasaimase Onii-chan!",
    "Dukung kami terus ya, Arigatou!",
    "Project error? Lapor CS ya!",
    "Jangan lupa Donasi ya!",
    "Zikann Terbaik!",
    "Jangan lupa Follow Tiktok mimin ya!",
    "Request project di saluran ya!",
    "Jangan lupa Join Saluran ya!"
];

/* Window */
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const percent = (scrollTop / height) * 100;
    document.getElementById("scroll-bar").style.width = percent + "%";
});

/* Document */
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const percent = (scrollTop / height) * 100;
    document.getElementById("scroll-bar").style.width = percent + "%";
});

/* Start Func*/
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

function changeText() {
    bubble.innerText = texts[i];
    i = (i + 1) % texts.length;
}
changeText();
setInterval(() => {
    changeText();
}, 8000);

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

function type() {
    current = text[c];

    if (!isDeleting) {
        document.getElementById("type").textContent = current.slice(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 5000);
            return;
        }
    } else {
        document.getElementById("type").textContent = current.slice(0, j--);
        if (j < 0) {
            isDeleting = false;
            c++;
            if (c >= text.length) c = 0;
            j = 0;
        }
    }

    setTimeout(type, isDeleting ? 100 : 100);
}

function coming() {
    Swal.fire({
        icon: "info",
        title: "Coming Soon!",
        text: "this project will be released soon."
    });
}
/* Start Func*/
type();
time();
