// Active nav link when scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove("active"));
      const link = document.querySelector(nav-link[href="#${e.target.id}"]);
      link && link.classList.add("active");
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => observer.observe(s));

// Animate skill bars
const bars = document.querySelectorAll('.bar > span');
const animateBars = () => bars.forEach(b => {
  const w = b.getAttribute('data-w');
  b.style.transition = 'width 1.2s ease';
  b.style.width = w + '%';
});
const skills = document.querySelector('#skills');
const skillsObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ 
      animateBars(); 
      skillsObs.disconnect(); 
    } 
  });
}, {threshold: .4});
skillsObs.observe(skills);

// Footer year
document.getElementById('y').textContent = new Date().getFullYear();