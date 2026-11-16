// Mobile menu
var menuBtn = document.getElementById('menuBtn');
var nav = document.getElementById('nav');
menuBtn.addEventListener('click', function () {
  var open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// Active menu item while scrolling
var links = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
var sections = links.map(function (l) { return document.querySelector(l.getAttribute('href')); });
function setActive() {
  var pos = window.scrollY + 140;
  var current = 0;
  sections.forEach(function (s, i) { if (s && s.offsetTop <= pos) current = i; });
  links.forEach(function (l, i) { l.classList.toggle('active', i === current); });
}
window.addEventListener('scroll', setActive, { passive: true });
setActive();

// Back to top
var topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', function () {
  topBtn.classList.toggle('show', window.scrollY > 600);
}, { passive: true });
topBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
