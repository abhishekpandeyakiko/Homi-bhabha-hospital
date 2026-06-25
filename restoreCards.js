const fs = require('fs');

const htmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const targetStart = `<section class="custom-feature-cards-section relative z-20 py-16 bg-gradient-to-b from-[#EBF3FC] to-[#F6FAFE]">`;
const targetEnd = `<!-- Locations Modal -->`;

const replacement = `<section class="custom-feature-cards-section relative z-20 py-16 bg-gradient-to-b from-[#EBF3FC] to-[#F6FAFE]">
    <div class="max-w-[1300px] mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <!-- Card 1: Patient Services -->
        <a href="#"
          class="bg-white rounded-[1rem] shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group overflow-hidden">
          <div class="w-full aspect-square bg-slate-100 overflow-hidden relative">
            <img src="assets/img/doctors_directory.png" alt="Doctors Directory"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div class="p-6 flex flex-col bg-white border-t border-slate-50">
            <h3 class="text-[18px] leading-tight font-extrabold text-[#112A46] mb-1">Doctors Directory</h3>
            <p class="text-slate-500 text-[13px] font-medium leading-snug">Search our specialist doctors</p>
          </div>
        </a>

        <!-- Card 2: Book Appointment -->
        <a href="#appointment-section"
          class="bg-white rounded-[1rem] shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group overflow-hidden">
          <div class="w-full aspect-square bg-slate-100 overflow-hidden relative">
            <img src="assets/img/video_consult.png" alt="Book Appointment"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div class="p-6 flex flex-col bg-white border-t border-slate-50">
            <h3 class="text-[18px] leading-tight font-extrabold text-[#112A46] mb-1">Book Appointment</h3>
            <p class="text-slate-500 text-[13px] font-medium leading-snug">Book your appointment online</p>
          </div>
        </a>

        <!-- Card 3: Patient Services -->
        <a href="#"
          class="bg-white rounded-[1rem] shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group overflow-hidden">
          <div class="w-full aspect-square bg-slate-100 overflow-hidden relative">
            <img src="assets/img/lab_tests.png" alt="Patient Services"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div class="p-6 flex flex-col bg-white border-t border-slate-50">
            <h3 class="text-[18px] leading-tight font-extrabold text-[#112A46] mb-1">Patient Services</h3>
            <p class="text-slate-500 text-[13px] font-medium leading-snug">OPD, IPD, Medical Records</p>
          </div>
        </a>

        <!-- Card 4: Our Locations -->
        <button onclick="document.getElementById('locationsModal').classList.remove('hidden')"
          class="text-left bg-white rounded-[1rem] shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group overflow-hidden">
          <div class="w-full aspect-square bg-slate-100 overflow-hidden relative">
            <img src="assets/img/find_doctors.png" alt="Our Locations"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div class="p-6 flex flex-col bg-white border-t border-slate-50">
            <h3 class="text-[18px] leading-tight font-extrabold text-[#112A46] mb-1">Our Locations</h3>
            <p class="text-slate-500 text-[13px] font-medium leading-snug">View multiple hospital branches</p>
          </div>
        </button>

      </div>
    </div>

    `;

const startIndex = html.indexOf(targetStart);
const endIndex = html.indexOf(targetEnd);

if (startIndex !== -1 && endIndex !== -1) {
  const newHtml = html.substring(0, startIndex) + replacement + html.substring(endIndex);
  fs.writeFileSync(htmlPath, newHtml, 'utf8');
  console.log("Restored full section properly!");
} else {
  console.log("Failed to find boundaries.");
}
