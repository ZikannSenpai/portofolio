let i = 0;
let index = 0;
let player;
let playing = false;
let shuffle = false;

const bubble = document.getElementById("bubble");

const texts = [
    "Project error? Lapor CS ya!",
    "Jangan lupa Donasi ya!",
    "Zikann Terbaik!",
    "Dukung kami terus ya!",
    "Request project di saluran ya!"
];
let playlist = [
    "https://youtu.be/TU8rZnPdThQ?si=qHRbL0vUcgo57zIg",
    "https://youtu.be/UkZh6oYzA3o?si=8h5HiJ3Zr1rbtykw",
    "https://youtu.be/kkG93ia-6Xc?si=xJfNxN1fK9SGhS9Y"
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
document.getElementById("play").onclick = playPause;
document.getElementById("next").onclick = next;
document.getElementById("prev").onclick = prev;

document.getElementById("volume").oninput = e => {
    player.setVolume(e.target.value);
};
document.getElementById("shuffle").onclick = () => {
    shuffle = !shuffle;
};
document.getElementById("progress").oninput = e => {
    let dur = player.getDuration();
    player.seekTo((e.target.value / 100) * dur);
};

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

function getID(url) {
    let id = url.split("v=")[1] || url.split("/").pop();
    return id;
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("ytplayer", {
        height: "0",
        width: "0",
        videoId: getID(playlist[index]),
        events: {
            onReady: loadSong,
            onStateChange: onPlayerStateChange
        }
    });
}

function loadSong() {
    let id = getID(playlist[index]);
    player.loadVideoById(id);
    document.getElementById("cover").src =
        "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";
    fetch("https://noembed.com/embed?url=https://www.youtube.com/watch?v=" + id)
        .then(r => r.json())
        .then(d => {
            document.getElementById("title").innerText = d.title;
        });
}

function playPause() {
    if (!playing) {
        player.playVideo();
        document.querySelector("#play i").className = "fas fa-pause";
        playing = true;
    } else {
        player.pauseVideo();
        document.querySelector("#play i").className = "fas fa-play";
        playing = false;
    }
}

function next() {
    if (shuffle) {
        index = Math.floor(Math.random() * playlist.length);
    } else {
        index++;
        if (index >= playlist.length) index = 0;
    }
    loadSong();
}

function prev() {
    index--;
    if (index < 0) index = playlist.length - 1;
    loadSong();
}

function onPlayerStateChange(e) {
    if (e.data === 0) next();
}

setInterval(() => {
    if (player && player.getCurrentTime) {
        let cur = player.getCurrentTime();
        let dur = player.getDuration();
        document.getElementById("current").innerText = format(cur);
        document.getElementById("duration").innerText = format(dur);
        let percent = (cur / dur) * 100;
        document.getElementById("progress").value = percent;
    }
}, 1000);

function format(s) {
    let m = Math.floor(s / 60);
    let sec = Math.floor(s % 60);
    if (sec < 10) sec = "0" + sec;
    return m + ":" + sec;
}

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
