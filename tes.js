const os = require("os");

Object.keys(os).forEach(k => {
    if (typeof os[k] === "function") {
        try {
            const res = os[k]();
            console.log("OS CALL:", k, "RES:", res);
        } catch (e) {
            console.log("OS CALL:", k, "ERROR:", e.message);
        }
    }
});
