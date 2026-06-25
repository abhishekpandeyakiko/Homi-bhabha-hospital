const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

const newGridHtml = `    <div class="max-w-[1000px] mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <!-- Card 1: Patient Services -->
        <a href="#" class="bg-white rounded-[1rem] shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group overflow-hidden">
          <div class="w-full aspect-[4/3] bg-slate-100 overflow-hidden relative">
            <img src="assets/img/patient_services.png" alt="Patient Services"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div class="p-4 flex flex-col bg-white border-t border-slate-50">
            <h3 class="text-[15px] leading-tight font-extrabold text-[#112A46] mb-1">Patient Services</h3>
            <p class="text-slate-500 text-[11px] font-medium leading-snug">OPD, IPD, Medical Records</p>
          </div>
        </a>

        <!-- Card 2: Book Appointment -->
        <a href="#appointment-section" class="bg-white rounded-[1rem] shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group overflow-hidden">
          <div class="w-full aspect-[4/3] bg-slate-100 overflow-hidden relative">
            <img src="assets/img/book_appointment.png" alt="Book Appointment"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div class="p-4 flex flex-col bg-white border-t border-slate-50">
            <h3 class="text-[15px] leading-tight font-extrabold text-[#112A46] mb-1">Book Appointment</h3>
            <p class="text-slate-500 text-[11px] font-medium leading-snug">Book your appointment online</p>
          </div>
        </a>

        <!-- Card 3: Doctors Directory -->
        <a href="#" class="bg-white rounded-[1rem] shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group overflow-hidden">
          <div class="w-full aspect-[4/3] bg-slate-100 overflow-hidden relative">
            <img src="assets/img/doctors_directory.png" alt="Doctors Directory"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div class="p-4 flex flex-col bg-white border-t border-slate-50">
            <h3 class="text-[15px] leading-tight font-extrabold text-[#112A46] mb-1">Doctors Directory</h3>
            <p class="text-slate-500 text-[11px] font-medium leading-snug">Search our specialist doctors</p>
          </div>
        </a>

        <!-- Card 4: Our Locations -->
        <button onclick="document.getElementById('locationsModal').classList.remove('hidden')" class="text-left bg-white rounded-[1rem] shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group overflow-hidden">
          <div class="w-full aspect-[4/3] bg-slate-100 overflow-hidden relative">
            <img src="assets/img/hospital_locations.png" alt="Our Locations"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div class="p-4 flex flex-col bg-white border-t border-slate-50">
            <h3 class="text-[15px] leading-tight font-extrabold text-[#112A46] mb-1">Our Locations</h3>
            <p class="text-slate-500 text-[11px] font-medium leading-snug">View multiple hospital branches</p>
          </div>
        </button>

      </div>
    </div>
    
    <!-- Locations Modal -->
    <div id="locationsModal" class="fixed inset-0 z-[100] hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-transform scale-100">
        <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h2 class="text-xl font-bold text-[#112A46]"><i class="fa-solid fa-map-location-dot text-brand-red mr-2"></i> Our Hospital Locations</h2>
          <button onclick="document.getElementById('locationsModal').classList.add('hidden')" class="text-slate-400 hover:text-red-500 transition-colors">
            <i class="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>
        <div class="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          
          <div class="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100 hover:shadow-md transition-shadow">
            <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 mt-1">
              <i class="fa-solid fa-hospital"></i>
            </div>
            <div>
              <h4 class="font-bold text-[#112A46] text-sm">Homi Bhabha Cancer Hospital, Sangrur</h4>
              <p class="text-slate-500 text-xs mt-1">Civil Hospital Campus, Sangrur, Punjab 148001</p>
              <a href="#" class="text-blue-600 hover:underline text-xs font-semibold mt-2 inline-block">Get Directions &rarr;</a>
            </div>
          </div>

          <div class="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100 hover:shadow-md transition-shadow">
            <div class="w-10 h-10 rounded-full bg-[#0097A7] flex items-center justify-center text-white shrink-0 mt-1">
              <i class="fa-solid fa-hospital"></i>
            </div>
            <div>
              <h4 class="font-bold text-[#112A46] text-sm">Homi Bhabha Cancer Hospital, Mullanpur</h4>
              <p class="text-slate-500 text-xs mt-1">Medicity, New Chandigarh, Mullanpur, Punjab 140901</p>
              <a href="#" class="text-[#0097A7] hover:underline text-xs font-semibold mt-2 inline-block">Get Directions &rarr;</a>
            </div>
          </div>
          
          <div class="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100 hover:shadow-md transition-shadow">
            <div class="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-white shrink-0 mt-1">
              <i class="fa-solid fa-hospital"></i>
            </div>
            <div>
              <h4 class="font-bold text-[#112A46] text-sm">Tata Memorial Hospital (Parent)</h4>
              <p class="text-slate-500 text-xs mt-1">Dr. E Borges Road, Parel, Mumbai, Maharashtra 400012</p>
              <a href="#" class="text-slate-600 hover:underline text-xs font-semibold mt-2 inline-block">Get Directions &rarr;</a>
            </div>
          </div>

        </div>
        <div class="p-4 border-t border-slate-100 bg-slate-50 text-center">
          <button onclick="document.getElementById('locationsModal').classList.add('hidden')" class="px-6 py-2 bg-[#112A46] text-white rounded-full font-semibold text-sm hover:bg-blue-900 transition-colors">Close Map</button>
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
  
  const newSectionPart = openingTag + '\n' + newGridHtml + closingTag;
  
  html = html.substring(0, startIndex) + newSectionPart + html.substring(endIndex);
  
  fs.writeFileSync(homeHtmlPath, html, 'utf8');
  console.log('Successfully added 4th card, generated images, and modal!');
} else {
  console.log('Could not find markers.');
}
