// main interactions: typing, reveal on scroll, burger, project count, click zoom handled by CSS

// TYPING (3 kalimat)
const form = document.querySelector("#contactForm")

if(form){
 form.addEventListener("submit",async(e)=>{
  e.preventDefault()

  const name = document.querySelector("#name").value
  const contact = document.querySelector("#contact").value
  const message = document.querySelector("#message").value

  const res = await fetch("/api/contact",{
   method:"POST",
   headers:{
    "Content-Type":"application/json"
   },
   body:JSON.stringify({
    name,
    contact,
    message
   })
  })

  const data = await res.json()

  alert(data.msg)
  form.reset()
 })
}

const lines = [
  "Aku bikin UI yang clean dan efisien.",
  "Suka ngulik performa & bundling.",
  "Butuh fitur? kasih brief, gue eksekusi."
];
let i = 0, pos = 0, current = '', target = document.getElementById('type-line');

function typeLoop(){
  if(!target) return;
  if(pos < lines[i].length){
    current += lines[i].charAt(pos++);
    target.textContent = current;
    setTimeout(typeLoop, 44 + Math.random()*40);
  } else {
    // pause then delete
    setTimeout(() => eraseLoop(), 900);
  }
}
function eraseLoop(){
  if(pos > 0){
    current = current.slice(0, -1);
    pos--;
    target.textContent = current;
    setTimeout(eraseLoop, 30);
  } else {
    i = (i + 1) % lines.length;
    setTimeout(typeLoop, 300);
  }
}
typeLoop();

// SCROLL REVEAL
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('show');
  });
}, {threshold: .12});

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// BURGER NAV
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if(burger){
  burger.addEventListener('click', ()=> {
    nav.classList.toggle('hidden');
  });
}

// total projects counter
const total = document.querySelectorAll('.project-card').length;
const totalEl = document.getElementById('totalProjects');
if(totalEl) totalEl.textContent = total;

// header scrolled shadow
window.addEventListener('scroll', ()=>{
  const header = document.querySelector('header');
  if(!header) return;
  if(window.scrollY > 20) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// add small press visual on cards (extra)
document.querySelectorAll('.press-zoom').forEach(el=>{
  el.addEventListener('mousedown', ()=> el.classList.add('active'));
  el.addEventListener('mouseup', ()=> el.classList.remove('active'));
  el.addEventListener('mouseleave', ()=> el.classList.remove('active'));
});
