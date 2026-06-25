const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

const newGridHtml = `      <div class="max-w-[1400px] mx-auto px-4">
        <!-- Optional "I AM LOOKING FOR" heading -->
        <div class="text-center mb-6">
          <h2 class="text-[#132A55] font-extrabold text-xl tracking-wider uppercase">I AM LOOKING FOR</h2>
          <div class="w-16 h-1 bg-red-600 mx-auto mt-2 rounded-full"></div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          
          <!-- 1. Patient Services -->
          <a href="#" class="flex flex-col items-center text-center p-4 rounded-xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg bg-[#132A55]">
            <div class="mb-3 text-white">
              <i class="fa-solid fa-users text-3xl"></i>
            </div>
            <h3 class="text-white font-bold text-[12px] leading-tight mb-2">PATIENT SERVICES</h3>
            <p class="text-white/80 text-[10px] leading-snug mb-4 flex-grow">OPD, IPD, Appointment, Medical Records &amp; More</p>
            <div class="w-full mt-auto">
              <span class="inline-block w-full py-1.5 rounded-full text-[10px] font-bold text-white bg-black/20 transition-colors">
                EXPLORE
              </span>
            </div>
          </a>

          <!-- 2. Book Appointment -->
          <a href="#" class="flex flex-col items-center text-center p-4 rounded-xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg bg-[#C62828]">
            <div class="mb-3 text-white">
              <i class="fa-regular fa-calendar-check text-3xl"></i>
            </div>
            <h3 class="text-white font-bold text-[12px] leading-tight mb-2">BOOK APPOINTMENT</h3>
            <p class="text-white/80 text-[10px] leading-snug mb-4 flex-grow">Book your appointment online</p>
            <div class="w-full mt-auto">
              <span class="inline-block w-full py-1.5 rounded-full text-[10px] font-bold text-white bg-black/20 transition-colors">
                BOOK NOW
              </span>
            </div>
          </a>

          <!-- 3. Doctors Directory -->
          <a href="#" class="flex flex-col items-center text-center p-4 rounded-xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg bg-[#132A55]">
            <div class="mb-3 text-white">
              <i class="fa-solid fa-user-doctor text-3xl"></i>
            </div>
            <h3 class="text-white font-bold text-[12px] leading-tight mb-2">DOCTORS DIRECTORY</h3>
            <p class="text-white/80 text-[10px] leading-snug mb-4 flex-grow">Search our specialist doctors</p>
            <div class="w-full mt-auto">
              <span class="inline-block w-full py-1.5 rounded-full text-[10px] font-bold text-white bg-black/20 transition-colors">
                VIEW DOCTORS
              </span>
            </div>
          </a>

          <!-- 4. Health Schemes -->
          <a href="#" class="flex flex-col items-center text-center p-4 rounded-xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg bg-[#132A55]">
            <div class="mb-3 text-white">
              <i class="fa-solid fa-shield-heart text-3xl"></i>
            </div>
            <h3 class="text-white font-bold text-[12px] leading-tight mb-2">HEALTH SCHEMES</h3>
            <p class="text-white/80 text-[10px] leading-snug mb-4 flex-grow">Government &amp; TMC Health Schemes</p>
            <div class="w-full mt-auto">
              <span class="inline-block w-full py-1.5 rounded-full text-[10px] font-bold text-white bg-black/20 transition-colors">
                VIEW SCHEMES
              </span>
            </div>
          </a>

          <!-- 5. Emergency Services -->
          <a href="#" class="flex flex-col items-center text-center p-4 rounded-xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg bg-[#C62828]">
            <div class="mb-3 text-white">
              <i class="fa-solid fa-truck-medical text-3xl"></i>
            </div>
            <h3 class="text-white font-bold text-[12px] leading-tight mb-2">EMERGENCY SERVICES</h3>
            <p class="text-white/80 text-[10px] leading-snug mb-4 flex-grow">24x7 Emergency Care</p>
            <div class="w-full mt-auto">
              <span class="inline-block w-full py-1.5 rounded-full text-[10px] font-bold text-white bg-black/20 transition-colors">
                CALL NOW
              </span>
            </div>
          </a>

          <!-- 6. Reports & Records -->
          <a href="#" class="flex flex-col items-center text-center p-4 rounded-xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg bg-[#132A55]">
            <div class="mb-3 text-white">
              <i class="fa-solid fa-file-medical text-3xl"></i>
            </div>
            <h3 class="text-white font-bold text-[12px] leading-tight mb-2">REPORTS &amp; RECORDS</h3>
            <p class="text-white/80 text-[10px] leading-snug mb-4 flex-grow">Access your medical reports</p>
            <div class="w-full mt-auto">
              <span class="inline-block w-full py-1.5 rounded-full text-[10px] font-bold text-white bg-black/20 transition-colors">
                VIEW REPORTS
              </span>
            </div>
          </a>

          <!-- 7. Contact Hospital -->
          <a href="#" class="flex flex-col items-center text-center p-4 rounded-xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg bg-[#132A55]">
            <div class="mb-3 text-white">
              <i class="fa-solid fa-phone-volume text-3xl"></i>
            </div>
            <h3 class="text-white font-bold text-[12px] leading-tight mb-2">CONTACT HOSPITAL</h3>
            <p class="text-white/80 text-[10px] leading-snug mb-4 flex-grow">Address, Phone, Email &amp; Location</p>
            <div class="w-full mt-auto">
              <span class="inline-block w-full py-1.5 rounded-full text-[10px] font-bold text-white bg-black/20 transition-colors">
                CONTACT US
              </span>
            </div>
          </a>

        </div>
      </div>`;

// We need to replace the content inside <section class="custom-feature-cards-section ..."> ... </section>
// We'll use a regex that matches from <div class="max-w-[1200px] mx-auto px-6"> to the closing </div> of that container.
// It's safer to slice the string.

const startMarker = '<section class="custom-feature-cards-section';
const endMarker = '<!-- ===================================================';

const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const sectionPart = html.substring(startIndex, endIndex);
  
  // Find the end of the opening section tag
  const tagEnd = sectionPart.indexOf('>') + 1;
  const openingTag = sectionPart.substring(0, tagEnd);
  
  const closingTag = '\n  </section>\n\n  ';
  
  const newSectionPart = openingTag + '\n' + newGridHtml + closingTag;
  
  html = html.substring(0, startIndex) + newSectionPart + html.substring(endIndex);
  
  fs.writeFileSync(homeHtmlPath, html, 'utf8');
  console.log('Successfully replaced feature cards section!');
} else {
  console.log('Could not find markers.');
}
