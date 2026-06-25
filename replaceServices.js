const fs = require('fs');

const htmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const newServicesHtml = `
  <!-- ===================================================
         SERVICES SECTION (Provides Best Service Carousel)
    ==================================================== -->
  <section class="container-fluid custom-our-services-section py-20 bg-[#05183D]" id="services-section">
    <div class="max-w-[1400px] mx-auto px-6">
      
      <!-- Header -->
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
        <div class="text-white">
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight uppercase tracking-tight">PROVIDES<br>BEST SERVICE</h2>
        </div>
        <div class="text-slate-400 max-w-lg text-sm leading-relaxed">
          Enthusiastically orchestrate competitive e-services whereas superior Conveniently disintermediate innovative solutions through impactfuls tailers without seamless markets network.
        </div>
        <div>
          <button class="bg-[#007aff] hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-colors">
            View All Services <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <!-- Carousel Container -->
      <div class="relative group">
        
        <!-- Navigation Arrows -->
        <button id="prevBtn" onclick="scrollCarousel(-350)" class="absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center text-white hover:bg-[#007aff] hover:border-[#007aff] transition-colors z-10 bg-[#05183D] shadow-xl">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button id="nextBtn" onclick="scrollCarousel(350)" class="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#007aff] flex items-center justify-center text-white hover:bg-blue-600 transition-colors z-10 bg-[#007aff] shadow-xl">
          <i class="fa-solid fa-chevron-right"></i>
        </button>

        <div id="services-carousel" class="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-8 pt-4">
          
          <!-- Card 1 -->
          <div class="snap-start shrink-0 w-[280px] md:w-[320px] aspect-[3/4] relative rounded-3xl overflow-hidden group/card cursor-pointer shadow-lg">
            <img src="assets/img/lab_tests.png" alt="Pediatric Dentistry" class="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#020B21] via-[#05183D]/50 to-transparent opacity-95"></div>
            <div class="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
              <p class="text-slate-300 text-[10px] font-bold uppercase tracking-widest mb-1.5">VACCINE</p>
              <h3 class="text-white text-xl font-extrabold">Pediatric Dentistry</h3>
            </div>
            <!-- Arrow on hover -->
            <div class="absolute right-6 bottom-8 opacity-0 translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300">
               <i class="fa-solid fa-chevron-right text-[#007aff] text-2xl"></i>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="snap-start shrink-0 w-[280px] md:w-[320px] aspect-[3/4] relative rounded-3xl overflow-hidden group/card cursor-pointer shadow-lg">
            <img src="assets/img/video_consult.png" alt="Digital X-Ray" class="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#020B21] via-[#05183D]/50 to-transparent opacity-95"></div>
            <div class="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
              <p class="text-slate-300 text-[10px] font-bold uppercase tracking-widest mb-1.5">X-RAY</p>
              <h3 class="text-white text-xl font-extrabold">Digital X-Ray</h3>
            </div>
             <div class="absolute right-6 bottom-8 opacity-0 translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300">
               <i class="fa-solid fa-chevron-right text-[#007aff] text-2xl"></i>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="snap-start shrink-0 w-[280px] md:w-[320px] aspect-[3/4] relative rounded-3xl overflow-hidden group/card cursor-pointer shadow-lg">
            <img src="assets/img/doctors_simple.png" alt="Dental Fixing" class="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#020B21] via-[#05183D]/50 to-transparent opacity-95"></div>
            <div class="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
              <p class="text-slate-300 text-[10px] font-bold uppercase tracking-widest mb-1.5">DENTAL</p>
              <h3 class="text-white text-xl font-extrabold">Dental Fixing</h3>
            </div>
             <div class="absolute right-6 bottom-8 opacity-0 translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300">
               <i class="fa-solid fa-chevron-right text-[#007aff] text-2xl"></i>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="snap-start shrink-0 w-[280px] md:w-[320px] aspect-[3/4] relative rounded-3xl overflow-hidden group/card cursor-pointer shadow-lg">
            <img src="assets/img/surgeries.png" alt="Human Brain Surgery" class="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#020B21] via-[#05183D]/50 to-transparent opacity-95"></div>
            <div class="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
              <p class="text-slate-300 text-[10px] font-bold uppercase tracking-widest mb-1.5">SURGERY</p>
              <h3 class="text-white text-xl font-extrabold">Human Brain Surgery</h3>
            </div>
             <div class="absolute right-6 bottom-8 opacity-0 translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300">
               <i class="fa-solid fa-chevron-right text-[#007aff] text-2xl"></i>
            </div>
          </div>
          
          <!-- Card 5 -->
          <div class="snap-start shrink-0 w-[280px] md:w-[320px] aspect-[3/4] relative rounded-3xl overflow-hidden group/card cursor-pointer shadow-lg">
            <img src="assets/img/patient_services.png" alt="Medical Oncology" class="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#020B21] via-[#05183D]/50 to-transparent opacity-95"></div>
            <div class="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
              <p class="text-slate-300 text-[10px] font-bold uppercase tracking-widest mb-1.5">ONCOLOGY</p>
              <h3 class="text-white text-xl font-extrabold">Medical Oncology</h3>
            </div>
             <div class="absolute right-6 bottom-8 opacity-0 translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300">
               <i class="fa-solid fa-chevron-right text-[#007aff] text-2xl"></i>
            </div>
          </div>

        </div>
      </div>
      
    </div>
    
    <style>
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    </style>
    <script>
      function scrollCarousel(scrollOffset) {
        const carousel = document.getElementById('services-carousel');
        carousel.scrollBy({ left: scrollOffset, behavior: 'smooth' });
      }
    </script>
  </section>`;

const startIndex = html.indexOf('  <!-- ===================================================\n         SERVICES SECTION (Provides Best Service)\n    ==================================================== -->');
const endIndexStr = '  <!-- ===================================================\n         MAKE APPOINTMENT SECTION\n    ==================================================== -->';
const endIndex = html.indexOf(endIndexStr);

if (startIndex !== -1 && endIndex !== -1) {
  const finalHtml = html.substring(0, startIndex) + newServicesHtml + '\\n\\n' + html.substring(endIndex);
  fs.writeFileSync(htmlPath, finalHtml, 'utf8');
  console.log("Successfully replaced the Services section with the new carousel design.");
} else {
  console.log("Could not find start or end index.");
}
