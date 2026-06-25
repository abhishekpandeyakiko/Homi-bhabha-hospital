const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

const newAboutHtml = `    <div class="max-w-[1200px] mx-auto">
      
      <!-- Top Header -->
      <div class="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-slate-200/60 pb-6">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-[#112A46] flex items-center gap-2">
          About Hospital <span class="text-[#0B63E5] text-4xl mt-1">*</span>
        </h2>
        <div class="flex items-center gap-3 mt-4 sm:mt-0">
          <span class="text-4xl font-black text-[#112A46]">10+</span>
          <p class="text-xs font-bold text-slate-500 uppercase leading-tight tracking-wider">Years of<br>Experience</p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <!-- Left Image Area -->
        <div class="relative w-full">
          <!-- The main image -->
          <div class="rounded-tl-[2.5rem] rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-br-none overflow-hidden shadow-2xl bg-white border-[12px] border-white max-w-[450px]">
            <img src="assets/img/about_doctor.png" alt="Expert Doctor" class="w-full object-cover aspect-[4/5] object-center" />
          </div>

          <!-- Floating Blue Badge -->
          <div class="absolute top-8 -right-4 lg:-right-12 w-32 h-32 bg-[#0B63E5] rounded-3xl shadow-xl flex items-center justify-center">
            <!-- Center Icon -->
            <div class="absolute inset-0 flex items-center justify-center z-10">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
                <i class="fa-solid fa-heart-pulse text-red-500 text-xl"></i>
              </div>
            </div>
            <!-- Circular Text Animation -->
            <div class="w-full h-full animate-[spin_10s_linear_infinite] relative circular-text-container">
               <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-sm">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text font-size="9" font-weight="bold" fill="white" letter-spacing="1.5">
                  <textPath href="#circlePath" startOffset="0%">
                    ONCOLOGY • SURGERY • RADIOTHERAPY •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        <!-- Right Text Area -->
        <div class="space-y-6">
          <p class="text-[#0B63E5] text-xs font-black tracking-widest uppercase">About Hospital</p>
          <h3 class="text-3xl lg:text-4xl font-extrabold text-[#112A46] leading-[1.2]">
            We are a leading oncology center helping thousands of patients with expert care.
          </h3>
          <p class="text-[#112A46] font-bold text-md mt-2">
            We're Putting your Care First
          </p>

          <!-- Check List -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
            <div class="flex items-center gap-3 border-b border-dashed border-slate-300 pb-3">
              <i class="fa-solid fa-circle-check text-[#0B63E5]"></i>
              <span class="text-sm font-semibold text-slate-600">Advanced Cancer Care</span>
            </div>
            <div class="flex items-center gap-3 border-b border-dashed border-slate-300 pb-3">
              <i class="fa-solid fa-circle-check text-[#0B63E5]"></i>
              <span class="text-sm font-semibold text-slate-600">24 Hrs Ambulance Service</span>
            </div>
            <div class="flex items-center gap-3 border-b border-dashed border-slate-300 pb-3">
              <i class="fa-solid fa-circle-check text-[#0B63E5]"></i>
              <span class="text-sm font-semibold text-slate-600">State-of-the-art Surgery</span>
            </div>
            <div class="flex items-center gap-3 border-b border-dashed border-slate-300 pb-3">
              <i class="fa-solid fa-circle-check text-[#0B63E5]"></i>
              <span class="text-sm font-semibold text-slate-600">100% Satisfaction Rate</span>
            </div>
            <div class="flex items-center gap-3 border-b border-dashed border-slate-300 pb-3">
              <i class="fa-solid fa-circle-check text-[#0B63E5]"></i>
              <span class="text-sm font-semibold text-slate-600">Subsidized Treatment</span>
            </div>
            <div class="flex items-center gap-3 border-b border-dashed border-slate-300 pb-3">
              <i class="fa-solid fa-circle-check text-[#0B63E5]"></i>
              <span class="text-sm font-semibold text-slate-600">Professional Doctors</span>
            </div>
          </div>

          <!-- Button -->
          <div class="pt-6">
            <a href="#" class="inline-flex items-center gap-2 bg-[#0B63E5] hover:bg-blue-700 text-white font-bold text-sm px-7 py-3 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5">
              More About <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>

        </div>

      </div>
    </div>`;

const startMarker = '<section class="custom-about-us-section';
const endMarker = '<!-- ===================================================';

const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const sectionPart = html.substring(startIndex, endIndex);
  
  // Replace the opening section tag to include the background gradient from the screenshot
  const tagEnd = sectionPart.indexOf('>') + 1;
  const openingTag = '<section class="custom-about-us-section py-20 relative overflow-hidden bg-gradient-to-br from-[#EEF4FA] to-[#F2F8FC]">';
  
  const closingTag = '\n  </section>\n\n  ';
  
  const newSectionPart = openingTag + '\n' + newAboutHtml + closingTag;
  
  html = html.substring(0, startIndex) + newSectionPart + html.substring(endIndex);
  
  fs.writeFileSync(homeHtmlPath, html, 'utf8');
  console.log('Successfully updated About Us section layout!');
} else {
  console.log('Could not find markers.');
}
