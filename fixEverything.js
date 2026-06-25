const fs = require('fs');
const htmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const startMarker = `              <p class="text-slate-500 text-xs mt-1">Dr. E Borges Road, Parel, Mumbai, Maharashtra 400012</p>`;
const endMarker = `    <!-- ===================================================
         SERVICES SECTION (Provides Best Service Carousel)
    ==================================================== -->`;

const replacement = `              <p class="text-slate-500 text-xs mt-1">Dr. E Borges Road, Parel, Mumbai, Maharashtra 400012</p>
              <a href="#" class="text-slate-600 hover:underline text-xs font-semibold mt-2 inline-block">Get Directions
                &rarr;</a>
            </div>
          </div>

        </div>
        <div class="p-4 border-t border-slate-100 bg-slate-50 text-center">
          <button onclick="document.getElementById('locationsModal').classList.add('hidden')"
            class="px-6 py-2 bg-[#112A46] text-white rounded-full font-semibold text-sm hover:bg-blue-900 transition-colors">Close
            Map</button>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================================================
         ABOUT MEDICAL / HOSPITAL SECTION
    ==================================================== -->
  <section
    class="container-fluid custom-about-us-section py-[30px] relative overflow-hidden bg-gradient-to-br from-[#EEF4FA] to-[#F2F8FC]">

    <div class="max-w-[1200px] mx-auto">

      <!-- Top Header -->
      <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-[#112A46]">
          About Us
        </h2>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
        <!-- Left Image Area -->
        <div class="w-full flex justify-center lg:justify-start">
          <div class="relative max-w-[450px] w-full mt-8 lg:mt-0">
            <!-- The main simple image -->
            <div class="rounded-3xl overflow-hidden shadow-xl w-full">
              <img src="assets/img/about_doctor.png" alt="Expert Doctor"
                class="w-full object-cover aspect-[4/5] object-center" />
            </div>
            
            <!-- Floating Blue Badge -->
            <div
              class="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-32 h-32 sm:w-36 sm:h-36 bg-[#007aff] rounded-[2rem] shadow-2xl flex items-center justify-center border-4 border-white z-10">
              <!-- Center Icon -->
              <div class="absolute inset-0 flex items-center justify-center z-20">
                <div class="w-[3.2rem] h-[3.2rem] bg-white rounded-full flex items-center justify-center shadow-inner">
                  <i class="fa-solid fa-heart-pulse text-red-600 text-[26px]"></i>
                </div>
              </div>
              <!-- Circular Text Animation -->
              <div class="w-[125%] h-[125%] animate-[spin_12s_linear_infinite] relative circular-text-container z-10">
                <svg viewBox="0 0 100 100" class="w-full h-full">
                  <path id="circlePath" d="M 50, 50 m -31, 0 a 31,31 0 1,1 62,0 a 31,31 0 1,1 -62,0"
                    fill="transparent" />
                  <text font-size="10" font-weight="bold" fill="white" letter-spacing="3.5">
                    <textPath href="#circlePath" startOffset="0%">
                      GYNECOLOGIST • HEALTHCARE • NEUROLOGIST •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Text Area -->
        <div class="space-y-6">

          <h3 class="text-2xl lg:text-3xl font-extrabold text-[#112A46] leading-[1.3]">
            A Premier Network of Government-Run Cancer Hospitals Across India
          </h3>
          <p class="text-slate-600 font-medium text-sm leading-relaxed mt-4">
            Our extensive medical group operates world-class facilities including <strong>TMC Mumbai, ACTREC & CCE Navi
              Mumbai, HBCHRC Vizag, BBCI Guwahati, MPMMCC & HBCH Varanasi, and HBCHRC Muzaffarpur</strong> to provide
            the highest standard of care.
          </p>

          <!-- Check List -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
            <div class="flex items-center gap-3 border-b border-dashed border-slate-300 pb-3">
              <i class="fa-solid fa-circle-check text-[#007aff]"></i>
              <span class="text-sm font-semibold text-slate-600">Completely to syndicate</span>
            </div>
            <div class="flex items-center gap-3 border-b border-dashed border-slate-300 pb-3">
              <i class="fa-solid fa-circle-check text-[#007aff]"></i>
              <span class="text-sm font-semibold text-slate-600">24 Hrs Ambulance Service</span>
            </div>
            <div class="flex items-center gap-3 border-b border-dashed border-slate-300 pb-3">
              <i class="fa-solid fa-circle-check text-[#007aff]"></i>
              <span class="text-sm font-semibold text-slate-600">Medical Surgical Services</span>
            </div>
            <div class="flex items-center gap-3 border-b border-dashed border-slate-300 pb-3">
              <i class="fa-solid fa-circle-check text-[#007aff]"></i>
              <span class="text-sm font-semibold text-slate-600">Lab & Pathology Services</span>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="#"
              class="bg-[#007aff] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-95 inline-block">
              Know More About Us
            </a>
            <div class="flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
              <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <i class="fa-solid fa-phone-volume"></i>
              </div>
              <div class="flex flex-col">
                <span class="text-[10px] uppercase font-bold text-slate-400">Emergency Call</span>
                <a href="tel:+912224177000" class="text-sm font-extrabold text-[#112A46] hover:text-[#007aff]">
                  +91 22 24177000
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- ===================================================
         GYNECOLOGIST * CARDIOLOGIST * NEUROLOGIST BANNER
    ==================================================== -->
  <section
    class="custom-ticker-marquee-section bg-[#05183D] py-6 overflow-hidden relative z-10 border-y border-white/5">
    <div class="max-w-[1400px] mx-auto px-6">
      <div class="w-full overflow-hidden relative flex">
        <div
          class="animate-marquee flex gap-12 whitespace-nowrap text-white/50 text-lg md:text-xl font-bold uppercase tracking-widest">
          <span>Gynecologist <span class="text-primary mx-3">&bull;</span></span>
          <span>Cardiologist <span class="text-primary mx-3">&bull;</span></span>
          <span>Neurologist <span class="text-primary mx-3">&bull;</span></span>
          <span>Oncologist <span class="text-primary mx-3">&bull;</span></span>
          <span>Radiologist <span class="text-primary mx-3">&bull;</span></span>
          <span>Pathologist <span class="text-primary mx-3">&bull;</span></span>

          <span>Gynecologist <span class="text-primary mx-3">&bull;</span></span>
          <span>Cardiologist <span class="text-primary mx-3">&bull;</span></span>
          <span>Neurologist <span class="text-primary mx-3">&bull;</span></span>
          <span>Oncologist <span class="text-primary mx-3">&bull;</span></span>
          <span>Radiologist <span class="text-primary mx-3">&bull;</span></span>
          <span>Pathologist <span class="text-primary mx-3">&bull;</span></span>
        </div>
      </div>
    </div>
  </section>

`;

const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newHtml = html.substring(0, startIndex) + replacement + html.substring(endIndex);
  fs.writeFileSync(htmlPath, newHtml, 'utf8');
  console.log("Successfully restored EVERYTHING perfectly!");
} else {
  console.log("Could not find markers!");
  console.log("Start Index:", startIndex);
  console.log("End Index:", endIndex);
}
