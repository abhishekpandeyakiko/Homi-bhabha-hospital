const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

// 1. Remove the current Stats Row
const statsRowStart = '      <!-- Stats Row -->';
const statsRowEnd = '</div>\n      </div>'; // Need to be careful here
const statsRegex = /<!-- Stats Row -->[\s\S]*?Beds Facility[\s\S]*?Trained Staff[\s\S]*?Doctors[\s\S]*?Specialities[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

if (html.match(statsRegex)) {
  html = html.replace(statsRegex, '');
} else {
  console.log("Could not find stats row using regex, trying fallback...");
  // Try simpler removal
  html = html.replace(/<!-- Stats Row -->[\s\S]*?Specialities[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '');
}

// 2. Add the Stats Row to the Right Text Area
const newStatsHtml = `
          <!-- Stats Row (Moved to text side) -->
          <div class="pt-8 mt-8 border-t border-slate-200/60">
            <div class="grid grid-cols-2 gap-x-4 gap-y-6">
              
              <div class="flex items-center gap-3">
                <i class="fa-solid fa-star-of-life text-3xl text-[#2FB0B4]"></i>
                <div>
                  <h4 class="text-2xl font-extrabold text-[#2FB0B4] leading-none tracking-tight">650+</h4>
                  <p class="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Beds</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <i class="fa-solid fa-star-of-life text-3xl text-[#2FB0B4]"></i>
                <div>
                  <h4 class="text-2xl font-extrabold text-[#2FB0B4] leading-none tracking-tight">606+</h4>
                  <p class="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Staff</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <i class="fa-solid fa-star-of-life text-3xl text-[#2FB0B4]"></i>
                <div>
                  <h4 class="text-2xl font-extrabold text-[#2FB0B4] leading-none tracking-tight">680+</h4>
                  <p class="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Doctors</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <i class="fa-solid fa-star-of-life text-3xl text-[#2FB0B4]"></i>
                <div>
                  <h4 class="text-2xl font-extrabold text-[#2FB0B4] leading-none tracking-tight">22+</h4>
                  <p class="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Specialities</p>
                </div>
              </div>

            </div>
          </div>
`;

// Find the More About button
const buttonMarker = `More About <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>\n            </a>\n          </div>`;

if (html.includes(buttonMarker)) {
  html = html.replace(buttonMarker, buttonMarker + '\n' + newStatsHtml);
  fs.writeFileSync(homeHtmlPath, html, 'utf8');
  console.log('Successfully moved the stats row to the text side!');
} else {
  console.log('Could not find the button marker.');
}
