/* Window */
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const percent = (scrollTop / height) * 100;
    document.getElementById("scroll-bar").style.width = percent + "%";
});

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
