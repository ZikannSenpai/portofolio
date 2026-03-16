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

app.get("/searchanime", (req, res) => {
    res.sendFile(path.join(__dirname, "public/project/main.html"));
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
