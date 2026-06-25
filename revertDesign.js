const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

const restoredDesignWith3Cards = `    <div class="max-w-[1200px] mx-auto px-6">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">

        <!-- Card 1: Patient Services -->
        <div
          class="bg-white rounded-[1.5rem] shadow-sm hover:shadow-xl border border-slate-100/50 transition-all duration-300 flex flex-col group overflow-hidden">
          <div
            class="w-full aspect-[4/3] sm:aspect-square bg-[#B9D6F3] overflow-hidden flex items-end justify-center pt-6">
            <img src="assets/img/video_consult.png" alt="Patient Services"
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-5 flex flex-col bg-white border-t border-slate-50">
            <h3 class="text-[17px] leading-tight font-extrabold text-[#112A46] mb-1">Patient Services</h3>
            <p class="text-slate-500 text-[12px] font-medium mt-1">OPD, IPD, Appointment, Medical Records & More</p>
          </div>
        </div>

        <!-- Card 2: Book Appointment -->
        <div
          class="bg-white rounded-[1.5rem] shadow-sm hover:shadow-xl border border-slate-100/50 transition-all duration-300 flex flex-col group overflow-hidden">
          <div
            class="w-full aspect-[4/3] sm:aspect-square bg-[#D4D5FA] overflow-hidden flex items-end justify-center pt-6">
            <img src="assets/img/lab_tests.png" alt="Book Appointment"
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
          </div>
          <div class="p-5 flex flex-col bg-white border-t border-slate-50">
            <h3 class="text-[17px] leading-tight font-extrabold text-[#112A46] mb-1">Book Appointment</h3>
            <p class="text-slate-500 text-[12px] font-medium mt-1">Book your appointment online</p>
          </div>
        </div>

        <!-- Card 3: Doctors Directory -->
        <div
          class="bg-white rounded-[1.5rem] shadow-sm hover:shadow-xl border border-slate-100/50 transition-all duration-300 flex flex-col group overflow-hidden">
          <div
            class="w-full aspect-[4/3] sm:aspect-square bg-[#98C8D4] overflow-hidden flex items-end justify-center pt-6">
            <img src="assets/img/find_doctors.png" alt="Doctors Directory"
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-5 flex flex-col bg-white border-t border-slate-50">
            <h3 class="text-[17px] leading-tight font-extrabold text-[#112A46] mb-1">Doctors Directory</h3>
            <p class="text-slate-500 text-[12px] font-medium mt-1">Search our specialist doctors</p>
          </div>
        </div>

      </div>
    </div>`;

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
  
  const newSectionPart = openingTag + '\n' + restoredDesignWith3Cards + closingTag;
  
  html = html.substring(0, startIndex) + newSectionPart + html.substring(endIndex);
  
  fs.writeFileSync(homeHtmlPath, html, 'utf8');
  console.log('Successfully reverted design and updated 3 unique cards!');
} else {
  console.log('Could not find markers.');
}
