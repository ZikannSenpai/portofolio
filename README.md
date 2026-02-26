# portofolio

PROJECT: ZikNext - Portofolio (Next.js)

Structure

README.md package.json next.config.js /pages/_app.js /pages/index.js /components/Navbar.js /components/ProjectCard.js /public/favicon.ico (placeholder) /styles/globals.css

---- README.md ---- ZikNext - Portofolio

Deskripsi Simple responsive Next.js portfolio dengan tema hitam dominan + aksen merah. Fitur

Navbar responsif

Animasi fade-in saat scroll (IntersectionObserver)

Efek zoom in/out saat kolom ditekan (:active transform)

Siap di-deploy ke Vercel


Cara pakai lokal

1. Install dependencies npm install


2. Jalankan dev npm run dev


3. Build npm run build npm run start



Deploy ke Vercel

1. Push repo ke GitHub/GitLab/Bitbucket


2. Login ke Vercel lalu import repository


3. Vercel otomatis detect Next.js. Klik Deploy



---- package.json ---- { "name": "ziknext-portfolio", "version": "1.0.0", "private": true, "scripts": { "dev": "next dev", "build": "next build", "start": "next start", "lint": "next lint" }, "dependencies": { "next": "13.5.6", "react": "18.2.0", "react-dom": "18.2.0" } }

---- next.config.js ---- /** Simple next config, nothing fancy */ const nextConfig = { reactStrictMode: true } module.exports = nextConfig

---- /pages/_app.js ---- import '../styles/globals.css' export default function App({ Component, pageProps }) { return <Component {...pageProps} /> }

---- /components/Navbar.js ---- import { useState } from 'react' export default function Navbar() { const [open, setOpen] = useState(false) return ( <nav className="nav"> <div className="brand">ZikNext</div> <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">☰</button> <ul className={open ? 'nav-links open' : 'nav-links'}> <li><a href="#about">About</a></li> <li><a href="#projects">Projects</a></li> <li><a href="#contact">Contact</a></li> </ul> </nav> ) }

---- /components/ProjectCard.js ---- import { useRef, useEffect, useState } from 'react' export default function ProjectCard({ title, desc }) { const ref = useRef() const [visible, setVisible] = useState(false) useEffect(() => { const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.15 }) if (ref.current) obs.observe(ref.current) return () => obs.disconnect() }, []) return ( <div ref={ref} className={"card " + (visible ? 'fade-in' : 'hidden')} tabIndex={0}> <h3>{title}</h3> <p>{desc}</p> </div> ) }

---- /pages/index.js ---- import Navbar from '../components/Navbar' import ProjectCard from '../components/ProjectCard' export default function Home() { const projects = [ { title: 'Project A', desc: 'Deskripsi singkat project A' }, { title: 'Project B', desc: 'Deskripsi singkat project B' }, { title: 'Project C', desc: 'Deskripsi singkat project C' } ] return ( <div className="page-root"> <Navbar /> <header className="hero"> <h1>ZikNext - Portofolio</h1> <p>Front-end dev | modifikasi motor | scripting</p> </header>

<section id="about" className="section">
    <h2>About</h2>
    <p>Ini portfolio singkat. Tambahin detailmu sendiri.</p>
  </section>

  <section id="projects" className="section grid">
    {projects.map((p, i) => (
      <ProjectCard key={i} title={p.title} desc={p.desc} />
    ))}
  </section>

  <section id="contact" className="section">
    <h2>Contact</h2>
    <p>Email: your@email.com</p>
  </section>

  <footer className="footer">© {new Date().getFullYear()} ZikNext</footer>
</div>

) }

---- /styles/globals.css ---- :root{ --bg:#0b0b0b; --card:#111; --red:#ff2b2b; --muted:#9a9a9a; } *{box-sizing:border-box} html,body,#__next{height:100%} body{margin:0;font-family:Inter,system-ui,Arial;background:var(--bg);color:#eee}

/* NAV */ .nav{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;position:sticky;top:0;background:linear-gradient(180deg,rgba(0,0,0,0.6),transparent);backdrop-filter:blur(4px);z-index:40} .brand{font-weight:700;color:var(--red)} .hamburger{display:none;background:none;border:0;color:#fff;font-size:20px} .nav-links{display:flex;gap:18px;list-style:none;margin:0;padding:0} .nav-links a{color:#ddd;text-decoration:none}

/* Mobile */ @media(max-width:768px){ .hamburger{display:block} .nav-links{position:fixed;right:0;top:60px;background:#070707;flex-direction:column;padding:12px;border-left:1px solid #222;transform:translateX(100%);transition:transform .25s} .nav-links.open{transform:translateX(0)} }

/* HERO */ .hero{padding:80px 24px;text-align:center} .hero h1{font-size:clamp(28px,6vw,48px);margin:0;color:var(--red)} .hero p{color:var(--muted);margin-top:8px}

.section{padding:48px 24px} .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px}

/* CARD */ .card{background:linear-gradient(180deg,var(--card),#0f0f0f);padding:20px;border-radius:12px;border:1px solid #1a1a1a;transform-origin:center;transition:transform .18s ease,opacity .6s ease,filter .2s} .card h3{margin:0 0 8px 0;color:var(--red)} .card p{margin:0;color:var(--muted)} .card:active{transform:scale(.96) translateZ(0)} .card:focus{outline:2px solid rgba(255,43,43,.12)}

/* Scroll fade-in classes */ .hidden{opacity:0;transform:translateY(14px);filter:blur(6px)} .fade-in{opacity:1;transform:translateY(0);filter:blur(0);transition:opacity .6s ease,transform .5s cubic-bezier(.2,.9,.3,1),filter .4s}

.footer{padding:24px;text-align:center;color:var(--muted)}

/* small tweaks */ @media(min-width:1200px){.hero{padding:120px 24px}}

---- END ----

Notes

Ganti isi projects di /pages/index.js sesuai portofolio lu

Kalau mau efek zoom halus saat klik bisa ganti :active di .card menjadi transform:scale(.98) with transition on transform

Untuk deploy, push ke Git provider lalu import ke Vercel