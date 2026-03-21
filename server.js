const express = require("express");
const axios = require("axios");
const path = require("path");
const os = require("os");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/project", express.static(path.join(__dirname, "public/project")));

app.get("/donate", (req, res) => {
    res.sendFile(path.join(__dirname, "public/project/donasi/donasi.html"));
});
app.get("/downloadanime", (req, res) => {
    res.sendFile(path.join(__dirname, "public/project/batch/main.html"));
});
app.get("/searchanime", (req, res) => {
    res.sendFile(path.join(__dirname, "public/project/anime Search/main.html"));
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
