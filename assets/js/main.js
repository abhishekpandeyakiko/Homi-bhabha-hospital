
function initMain() {
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

    // Mobile menu toggle
    function toggleMobileMenu() {
      const menu = document.getElementById('mobileMenu');
      const drawer = document.getElementById('mobileDrawer');
      if (menu && drawer) {
        const isOpen = !menu.classList.contains('pointer-events-none');
        if (isOpen) {
          // Close
          drawer.classList.add('translate-x-full');
          setTimeout(() => {
            menu.classList.add('opacity-0', 'pointer-events-none');
          }, 300);
        } else {
          // Open
          menu.classList.remove('opacity-0', 'pointer-events-none');
          setTimeout(() => {
            drawer.classList.remove('translate-x-full');
          }, 50);
        }
      }
    }

    // Mobile submenu toggle (Accordions)
    function toggleMobileSub(id) {
      const sub = document.getElementById(id);
      const icon = document.getElementById(id + 'Icon');
      if (sub) {
        const isHidden = sub.classList.contains('hidden');
        if (isHidden) {
          sub.classList.remove('hidden');
          sub.classList.add('flex');
          if (icon) icon.textContent = 'expand_less';
        } else {
          sub.classList.add('hidden');
          sub.classList.remove('flex');
          if (icon) icon.textContent = 'expand_more';
        }
      }
    }

    // Sticky Header Scroll Handler
    window.addEventListener('scroll', () => {
      const header = document.getElementById('siteHeader');
      if (header) {
        header.classList.toggle('is-sticky', window.scrollY > 60);
      }
    });

    // Close mobile menu drawer on outside clicks
    document.addEventListener('click', (e) => {
      const menu = document.getElementById('mobileMenu');
      const drawer = document.getElementById('mobileDrawer');
      const togglers = document.querySelectorAll('[onclick="toggleMobileMenu()"]');
      
      let clickedToggler = false;
      togglers.forEach(t => {
        if (t.contains(e.target)) clickedToggler = true;
      });

      if (menu && drawer && !menu.classList.contains('pointer-events-none')) {
        if (!drawer.contains(e.target) && !clickedToggler) {
          toggleMobileMenu();
        }
      }
    });
}

// Support both direct load and router load
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(initMain, 100);
} else {
  document.addEventListener('DOMContentLoaded', () => { setTimeout(initMain, 100); });
}

// Re-init on custom event
window.addEventListener('componentsLoaded', initMain);
