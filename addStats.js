const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

const statsRowHtml = `
      <!-- Stats Row -->
      <div class="mt-20 border-t border-slate-200/60 pt-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div class="flex items-center gap-4 md:justify-center">
            <i class="fa-solid fa-star-of-life text-[40px] text-[#2FB0B4]"></i>
            <div>
              <h4 class="text-3xl font-extrabold text-[#2FB0B4] leading-none tracking-tight">650+</h4>
              <p class="text-[#2FB0B4] text-sm font-medium mt-1">Beds Facility</p>
            </div>
          </div>

          <div class="flex items-center gap-4 md:justify-center">
            <i class="fa-solid fa-star-of-life text-[40px] text-[#2FB0B4]"></i>
            <div>
              <h4 class="text-3xl font-extrabold text-[#2FB0B4] leading-none tracking-tight">606+</h4>
              <p class="text-[#2FB0B4] text-sm font-medium mt-1">Trained Staff</p>
            </div>
          </div>

          <div class="flex items-center gap-4 md:justify-center">
            <i class="fa-solid fa-star-of-life text-[40px] text-[#2FB0B4]"></i>
            <div>
              <h4 class="text-3xl font-extrabold text-[#2FB0B4] leading-none tracking-tight">680+</h4>
              <p class="text-[#2FB0B4] text-sm font-medium mt-1">Doctors</p>
            </div>
          </div>

          <div class="flex items-center gap-4 md:justify-center">
            <i class="fa-solid fa-star-of-life text-[40px] text-[#2FB0B4]"></i>
            <div>
              <h4 class="text-3xl font-extrabold text-[#2FB0B4] leading-none tracking-tight">22+</h4>
              <p class="text-[#2FB0B4] text-sm font-medium mt-1">Specialities</p>
            </div>
          </div>

        </div>
      </div>
`;

const insertMarker = `        </div>\n\n      </div>\n    </div>\n  </section>`;
const beforeInsertMarker = `        </div>\n\n      </div>`;

// Looking at lines 520-524:
// 520:         </div>
// 521: 
// 522:       </div>
// 523:     </div>
// 524:   </section>

if (html.includes(beforeInsertMarker)) {
  html = html.replace(beforeInsertMarker, beforeInsertMarker + '\n' + statsRowHtml);
  fs.writeFileSync(homeHtmlPath, html, 'utf8');
  console.log('Successfully inserted stats row!');
} else {
  console.log('Could not find marker.');
}
