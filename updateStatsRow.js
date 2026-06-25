const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

// The block to replace
const oldStatsBlockRegex = /<!-- Stats Row \(Moved to text side\) -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

const newStatsHtml = `
          <!-- Stats Row (Moved to text side) -->
          <div class="pt-8 mt-8 border-t border-slate-200/60">
            <div class="flex items-center justify-between divide-x divide-slate-200/60">
              
              <div class="flex-1 text-center px-1">
                <h4 class="text-2xl sm:text-3xl font-extrabold text-[#007aff] leading-none tracking-tight">650+</h4>
                <p class="text-[#112A46] text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1.5">Beds</p>
              </div>

              <div class="flex-1 text-center px-1">
                <h4 class="text-2xl sm:text-3xl font-extrabold text-[#007aff] leading-none tracking-tight">606+</h4>
                <p class="text-[#112A46] text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1.5">Staff</p>
              </div>

              <div class="flex-1 text-center px-1">
                <h4 class="text-2xl sm:text-3xl font-extrabold text-[#007aff] leading-none tracking-tight">680+</h4>
                <p class="text-[#112A46] text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1.5">Doctors</p>
              </div>

              <div class="flex-1 text-center px-1">
                <h4 class="text-2xl sm:text-3xl font-extrabold text-[#007aff] leading-none tracking-tight">22+</h4>
                <p class="text-[#112A46] text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1.5">Specialties</p>
              </div>

            </div>
          </div>`;

if (html.match(oldStatsBlockRegex)) {
  html = html.replace(oldStatsBlockRegex, newStatsHtml);
  fs.writeFileSync(homeHtmlPath, html, 'utf8');
  console.log('Successfully updated stats row to a single sleek row without icons.');
} else {
  console.log('Could not match old stats block.');
}
