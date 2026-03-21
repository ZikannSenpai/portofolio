const $ = id => document.getElementById(id);

function formatDuration(ms) {
    if (!ms && ms !== 0) return "-";
    const total = Math.floor(ms / 1000);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
}

function formatBytes(bytes) {
    if (!bytes && bytes !== 0) return "-";
    const units = ["B", "KB", "MB", "GB"];
    let n = bytes;
    let i = 0;
    while (n >= 1024 && i < units.length - 1) {
        n /= 1024;
        i++;
    }
    return `${n.toFixed(i === 0 ? 0 : 2)} ${units[i]}`;
}

function showCards() {
    document
        .querySelectorAll(".fade, .card")
        .forEach(el => el.classList.add("show"));
}

function setPlaceholder() {
    $("thumb").src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5QOINeYUe_85OTkeIPMw-hG6Z0Kh4njryOmxYVoaqbw&s=10";
    $("title").textContent = "Belum ada data";
    $("type").textContent = "-";
    $("artis").textContent = "-";
    $("durasi").textContent = "-";
    $("album").textContent = "-";
    $("releaseDate").textContent = "-";
    $("size").textContent = "-";
    $("badge").textContent = "Track Info";
}

function renderData(data) {
    $("download").href = data.download;
    $("thumb").src =
        data.image ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9gUXKwt2KErC_jWWlkZkGabxpeGchT-fyw&s";
    $("title").textContent = data.title || "-";
    $("type").textContent = data.type || "-";
    $("artis").textContent = data.artis || "-";
    $("durasi").textContent = formatDuration(data.durasi);
    $("album").textContent = data.album || "-";
    $("releaseDate").textContent = data.releaseDate || "-";
    $("size").textContent = formatBytes(data.size);
    $("badge").textContent = data.source
        ? `Source: ${data.source}`
        : "Track Info";
}

async function searchTrack() {
    const q = $("query").value.trim();
    if (!q) return;

    setPlaceholder();
    $("badge").textContent = "Loading...";

    try {
        const res = await fetch(
            "https://www.sankavollerei.com/download/spotify/play?apikey=planaai&q=" +
                encodeURIComponent(q)
        );
        const json = await res.json();

        if (json?.status && json?.data) {
            renderData(json.data);
        } else {
            $("badge").textContent = "Tidak ditemukan";
            setPlaceholder();
        }
    } catch (err) {
        $("badge").textContent = "Gagal ambil data";
        setPlaceholder();
    }

    showCards();
}

$("searchBtn").addEventListener("click", searchTrack);
$("query").addEventListener("keydown", e => {
    if (e.key === "Enter") searchTrack();
});

showCards();
setPlaceholder();
