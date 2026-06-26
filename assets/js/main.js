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
    let isCarouselTransitioning = false;
    window.scrollCarousel = function(direction) {
      if (isCarouselTransitioning) return;
      
      const carousel = document.getElementById('services-carousel');
      if (!carousel || !carousel.firstElementChild) return;
      
      isCarouselTransitioning = true;
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
          isCarouselTransitioning = false;
        }, 500);
      } else {
        // Prev: move the last element to the start instantly
        carousel.prepend(carousel.lastElementChild);
        carousel.scrollBy({ left: cardWidth, behavior: 'instant' });
        
        // Then smoothly scroll back to reveal it
        setTimeout(() => {
          carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
          setTimeout(() => {
            isCarouselTransitioning = false;
          }, 500);
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
        }, 6000);
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

    // --- Stat Counter Animation ---
    const counters = document.querySelectorAll('.stat-counter');
    if (counters.length > 0) {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
              current += increment;
              if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
              } else {
                counter.innerText = target;
              }
            };
            
            updateCounter();
            observer.unobserve(counter); // Only animate once
          }
        });
      }, observerOptions);
      
      counters.forEach(counter => {
        counterObserver.observe(counter);
      });
    }

    // --- What's New Updates Ticker & Tab Filtering ---
    const tickerContainer = document.getElementById('updates-ticker-container');
    if (tickerContainer) {
      let scrollInterval;
      const speed = 1; // pixels per step
      const delay = 35; // ms per step
      
      function startScroll() {
        if (scrollInterval) clearInterval(scrollInterval);
        if (tickerContainer.scrollHeight <= tickerContainer.clientHeight) {
          tickerContainer.scrollTop = 0;
          return;
        }
        scrollInterval = setInterval(() => {
          if (tickerContainer.scrollTop + tickerContainer.clientHeight >= tickerContainer.scrollHeight - 1) {
            tickerContainer.scrollTop = 0;
          } else {
            tickerContainer.scrollTop += speed;
          }
        }, delay);
      }
      
      function stopScroll() {
        if (scrollInterval) clearInterval(scrollInterval);
      }
      
      tickerContainer.addEventListener('mouseenter', stopScroll);
      tickerContainer.addEventListener('mouseleave', startScroll);
      
      // Tab switching logic
      const tabs = document.querySelectorAll('.update-tab-btn');
      const items = document.querySelectorAll('.update-item');
      
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // Remove active class from all tabs
          tabs.forEach(t => {
            t.classList.remove('bg-white', 'border', 'border-slate-300', 'text-dark-navy', 'shadow-sm', 'font-bold');
            t.classList.add('text-slate-600', 'hover:text-dark-navy', 'font-semibold');
          });
          
          // Add active class to clicked tab
          tab.classList.add('bg-white', 'border', 'border-slate-300', 'text-dark-navy', 'shadow-sm', 'font-bold');
          tab.classList.remove('text-slate-600', 'hover:text-dark-navy', 'font-semibold');
          
          const category = tab.getAttribute('data-tab');
          
          // Filter items
          items.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
              item.classList.remove('hidden');
            } else {
              item.classList.add('hidden');
            }
          });
          
          // Reset scroll position and restart scrolling
          tickerContainer.scrollTop = 0;
          startScroll();
        });
      });
      
      // Start initial scroll
      setTimeout(startScroll, 500);
    }
}

// Ensure it runs dynamically
document.addEventListener('DOMContentLoaded', () => { setTimeout(initMain, 100); });
window.addEventListener('componentsLoaded', () => { setTimeout(initMain, 100); });

// =============================================
// HEADER INLINE SEARCH
// =============================================
function openHeaderSearch() {
  const searchBox = document.getElementById('headerSearchBox');
  const input     = document.getElementById('headerSearchInput');
  if (!searchBox) return;
  // Show as flex overlay (position:absolute — no layout shift)
  searchBox.style.display = 'flex';
  if (input) { input.value = ''; input.focus(); }
}

function closeHeaderSearch() {
  const searchBox = document.getElementById('headerSearchBox');
  if (searchBox) searchBox.style.display = 'none';
}

function doHeaderSearch() {
  const input = document.getElementById('headerSearchInput');
  const query = input ? input.value.trim() : '';
  if (query) {
    // TODO: replace with real search redirect
    console.log('Search:', query);
    alert('Searching for: ' + query);
  }
  closeHeaderSearch();
}

// Close search on outside click
document.addEventListener('click', function(e) {
  const wrap = document.getElementById('headerSearchWrap');
  if (wrap && !wrap.contains(e.target)) closeHeaderSearch();
});

// =============================================
// LANGUAGE DROPDOWN
// =============================================
function toggleLangDropdown() {
  const menu = document.getElementById('langDropdownMenu');
  const chevron = document.getElementById('langChevron');
  if (!menu) return;
  const isHidden = menu.classList.contains('hidden');
  menu.classList.toggle('hidden', !isHidden);
  if (chevron) chevron.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
}

function selectLang(label) {
  const selected = document.getElementById('selectedLang');
  if (selected) selected.textContent = label;
  // Close dropdown
  const menu = document.getElementById('langDropdownMenu');
  const chevron = document.getElementById('langChevron');
  if (menu) menu.classList.add('hidden');
  if (chevron) chevron.style.transform = 'rotate(0deg)';
}

// Close lang dropdown when clicking outside
document.addEventListener('click', function(e) {
  const wrap = document.querySelector('.lang-selector-wrap');
  if (wrap && !wrap.contains(e.target)) {
    const menu = document.getElementById('langDropdownMenu');
    const chevron = document.getElementById('langChevron');
    if (menu) menu.classList.add('hidden');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  }
});

// =============================================
// SCREEN READER TOGGLE
// =============================================
let screenReaderOn = false;
function toggleScreenReader() {
  screenReaderOn = !screenReaderOn;
  const label = document.getElementById('screenReaderLabel');

  if (screenReaderOn) {
    if (label) label.style.color = '#0D1B4E';
    document.body.classList.add('screen-reader-mode');
  } else {
    if (label) label.style.color = '#6b85a3';
    document.body.classList.remove('screen-reader-mode');
  }
}
