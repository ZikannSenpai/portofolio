const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk menyajikan file statis dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// Contoh endpoint API untuk data proyek (jika ingin dinamis)
app.get('/api/projects', (req, res) => {
  const projects = [
    { title: 'Project 1', description: 'Deskripsi proyek 1', image: 'https://via.placeholder.com/300' },
    { title: 'Project 2', description: 'Deskripsi proyek 2', image: 'https://via.placeholder.com/300' },
    { title: 'Project 3', description: 'Deskripsi proyek 3', image: 'https://via.placeholder.com/300' },
  ];
  res.json(projects);
});

// Contoh endpoint API untuk skills
app.get('/api/skills', (req, res) => {
  const skills = ['JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'Express', 'MongoDB'];
  res.json(skills);
});

app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
