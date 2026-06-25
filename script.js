/* ============================================================
   HBCH & RC - script.js
   ============================================================ */

// --- Mobile Nav Toggle ---
function toggleNav() {
  const menu = document.getElementById('navMenu');
  const toggler = document.getElementById('navToggler');
  menu.classList.toggle('open');
  toggler.classList.toggle('open');
}

// Close nav on outside click
document.addEventListener('click', (e) => {
  const menu = document.getElementById('navMenu');
  const toggler = document.getElementById('navToggler');
  if (menu && toggler && !menu.contains(e.target) && !toggler.contains(e.target)) {
    menu.classList.remove('open');
    toggler.classList.remove('open');
  }
});

// --- Sticky Header ---
window.addEventListener('scroll', () => {
  const header = document.getElementById('siteHeader');
  if (header) {
    header.classList.toggle('is-sticky', window.scrollY > 60);
  }
  // Scroll to top button
  const sttBtn = document.getElementById('sttBtn');
  if (sttBtn) {
    sttBtn.classList.toggle('show', window.scrollY > 400);
  }
});

// --- Scroll to Top ---
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Hero Slider ---
let currentHeroSlide = 0;
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('#sliderDots button');

function changeHeroSlide(index) {
  if (heroSlides.length === 0) return;
  
  // Deactivate current slide and dot
  heroSlides[currentHeroSlide].classList.remove('active');
  heroDots[currentHeroSlide].classList.remove('s-dot-active');
  
  // Update index
  currentHeroSlide = index;
  
  // Activate new slide and dot
  heroSlides[currentHeroSlide].classList.add('active');
  heroDots[currentHeroSlide].classList.add('s-dot-active');
}

// Auto transition
let heroInterval;
function startHeroAutoplay() {
  if (heroSlides.length > 0) {
    heroInterval = setInterval(() => {
      const next = (currentHeroSlide + 1) % heroSlides.length;
      changeHeroSlide(next);
    }, 6000);
  }
}

// Initialize dots and autoplay
if (heroSlides.length > 0) {
  // Set initial active states
  heroSlides[0].classList.add('active');
  heroDots[0].classList.add('s-dot-active');
  startHeroAutoplay();
}

// Interactivity helper for dot clicks
window.goHeroSlide = function(index) {
  clearInterval(heroInterval);
  changeHeroSlide(index);
  startHeroAutoplay();
}



// --- What's New Tabs ---
function switchTab(btn, tabId) {
  // Deactivate all tabs and panels
  document.querySelectorAll('.wnt').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.wn-panel').forEach(p => p.classList.remove('active'));
  // Activate selected
  btn.classList.add('active');
  const panel = document.getElementById('tab-' + tabId);
  if (panel) panel.classList.add('active');
}

// --- Animated Counter ---
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  let step = 0;
  const timer = setInterval(() => {
    step++;
    current = Math.min(Math.round(increment * step), target);
    el.textContent = current.toLocaleString();
    if (step >= steps) clearInterval(timer);
  }, duration / steps);
}

// Intersection Observer for stats
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.st-num').forEach(animateCounter);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const statsSec = document.querySelector('.stats-sec');
if (statsSec) statsObserver.observe(statsSec);

// --- Entrance Animations ---
const fadeEls = document.querySelectorAll('.svc-card, .portal-card, .qs-card, .ab-f, .stat-it');
const fadeObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 60);
      fadeObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  fadeObs.observe(el);
});

// --- Top Bar Emergency Link Pulse ---
const emergLink = document.querySelector('.tb-left a');
if (emergLink) {
  setInterval(() => {
    emergLink.style.color = emergLink.style.color === 'rgb(239, 68, 68)' ? '' : '#ef4444';
  }, 1200);
}
