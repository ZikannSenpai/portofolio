async function init() {
    const input = "toni";
    try {
        const res = await fetch(
            `https://zikaneko.vercel.app/api/anime/search?query=${encodeURIComponent(input)}`
        );

        const json = await res.json();
        const data = json.data.animeList[0].genreList;
        console.log("data:", data);
    } catch (err) {
        console.error("Error:", err);
    }
}
init();
