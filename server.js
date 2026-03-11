const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk JSON (form kontak)
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint untuk menerima pesan dari form kontak
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`📩 Pesan dari ${name} (${email}): ${message}`);
    res.json({ status: 'success', message: 'Pesan terkirim (simulasi)' });
});

app.listen(port, () => {
    console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
