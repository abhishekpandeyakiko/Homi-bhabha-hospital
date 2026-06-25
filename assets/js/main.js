function initMain() {
    // --- Hero Slider ---
    let currentHeroSlide = 0;
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('#sliderDots button');

    function changeHeroSlide(index) {
      if (heroSlides.length === 0) return;
      
      heroSlides[currentHeroSlide].classList.remove('active');
      heroDots[currentHeroSlide].classList.remove('s-dot-active');
      
      currentHeroSlide = index;
      
      heroSlides[currentHeroSlide].classList.add('active');
      heroDots[currentHeroSlide].classList.add('s-dot-active');
    }

    let heroInterval;
    function startHeroAutoplay() {
      if (heroSlides.length > 0) {
        heroInterval = setInterval(() => {
          const next = (currentHeroSlide + 1) % heroSlides.length;
          changeHeroSlide(next);
        }, 6000);
      }
    }

    if (heroSlides.length > 0) {
      heroSlides[0].classList.add('active');
      heroDots[0].classList.add('s-dot-active');
      startHeroAutoplay();
    }

    window.goHeroSlide = function(index) {
      clearInterval(heroInterval);
      changeHeroSlide(index);
      startHeroAutoplay();
    }

    // Mobile menu toggle
    window.toggleMobileMenu = function() {
      const menu = document.getElementById('mobileMenu');
      const drawer = document.getElementById('mobileDrawer');
      if (menu && drawer) {
        const isOpen = !menu.classList.contains('pointer-events-none');
        if (isOpen) {
          drawer.classList.add('translate-x-full');
          setTimeout(() => {
            menu.classList.add('opacity-0', 'pointer-events-none');
          }, 300);
        } else {
          menu.classList.remove('opacity-0', 'pointer-events-none');
          setTimeout(() => {
            drawer.classList.remove('translate-x-full');
          }, 50);
        }
      }
    };

    window.toggleMobileSub = function(id) {
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
    };

    window.addEventListener('scroll', () => {
      const header = document.getElementById('siteHeader');
      if (header) {
        header.classList.toggle('is-sticky', window.scrollY > 60);
      }
    });

    document.addEventListener('click', (e) => {
      const menu = document.getElementById('mobileMenu');
      const drawer = document.getElementById('mobileDrawer');
      if (!menu || !drawer || menu.classList.contains('pointer-events-none')) return;

      const togglers = document.querySelectorAll('[onclick="toggleMobileMenu()"]');
      let clickedToggler = false;
      togglers.forEach(t => {
        if (t.contains(e.target)) clickedToggler = true;
      });

      if (!drawer.contains(e.target) && !clickedToggler) {
        window.toggleMobileMenu();
      }
    });

    // --- Services Carousel Logic (Infinite One-Way Slide) ---
    window.scrollCarousel = function(direction) {
      const carousel = document.getElementById('services-carousel');
      if (!carousel || !carousel.firstElementChild) return;
      
      // Calculate the width of one card plus the gap (gap-6 is 24px)
      const cardWidth = carousel.firstElementChild.offsetWidth + 24;

      if (direction > 0) {
        // Next: scroll right smoothly
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
        
        // After the smooth scroll completes, move the first element to the end
        setTimeout(() => {
          carousel.appendChild(carousel.firstElementChild);
          // Adjust scroll position instantly to prevent visual jumping
          carousel.scrollBy({ left: -cardWidth, behavior: 'instant' });
        }, 500);
      } else {
        // Prev: move the last element to the start instantly
        carousel.prepend(carousel.lastElementChild);
        carousel.scrollBy({ left: cardWidth, behavior: 'instant' });
        
        // Then smoothly scroll back to reveal it
        setTimeout(() => {
          carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }, 20);
      }
    };

    const servicesCarousel = document.getElementById('services-carousel');
    if (servicesCarousel) {
      if (window.servicesAutoSlideInterval) {
        clearInterval(window.servicesAutoSlideInterval);
      }
      
      const startAutoSlide = () => {
        window.servicesAutoSlideInterval = setInterval(() => {
          window.scrollCarousel(1); // 1 indicates 'next'
        }, 3500);
      };

      const stopAutoSlide = () => {
        clearInterval(window.servicesAutoSlideInterval);
      };

      startAutoSlide();

      servicesCarousel.addEventListener('mouseenter', stopAutoSlide);
      servicesCarousel.addEventListener('mouseleave', startAutoSlide);
      
      // Also add touch events for mobile
      servicesCarousel.addEventListener('touchstart', stopAutoSlide, {passive: true});
      servicesCarousel.addEventListener('touchend', startAutoSlide, {passive: true});
    }
}

// Ensure it runs dynamically
document.addEventListener('DOMContentLoaded', () => { setTimeout(initMain, 100); });
window.addEventListener('componentsLoaded', () => { setTimeout(initMain, 100); });
