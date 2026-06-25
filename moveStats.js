const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

// The exact string we inserted previously
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

// Remove it from wherever it is
if (html.includes(statsRowHtml)) {
  html = html.replace(statsRowHtml, '');
} else {
  // If exact match fails due to formatting, use regex to remove it
  html = html.replace(/<!-- Stats Row -->[\s\S]*?Beds Facility[\s\S]*?Trained Staff[\s\S]*?Doctors[\s\S]*?Specialities[\s\S]*?<\/div>\s*<\/div>\s*/g, '');
}

// Now inject it at the correct place, inside custom-about-us-section
// I'll look for:
//         <!-- Right Text Area -->
//         ...
//           </div>
// 
//         </div>
// 
//       </div>

// A more reliable marker is the end of the custom-about-us-section:
const endOfAboutSection = `  </section>

  <!-- ===================================================
         GYNECOLOGIST * CARDIOLOGIST * NEUROLOGIST BANNER`;

const safeMarkerIndex = html.indexOf(endOfAboutSection);
if (safeMarkerIndex !== -1) {
  // We need to inject right before `</div>\n    </div>\n  </section>`
  // Let's find the closing tags immediately before `</section>`
  
  // The structure is:
  //         </div> (Right Text Area)
  //       </div> (Grid)
  // [INSERT HERE]
  //     </div> (max-w container)
  //   </section>
  
  // To be safe, I'll use a regex replacement targeting the end of the section
  const endSectionRegex = /(<\/div>\s*<\/div>\s*<\/section>\s*<!-- ===================================================\s*GYNECOLOGIST \* CARDIOLOGIST \* NEUROLOGIST BANNER)/;
  
  // Wait, let's verify the exact end tags of the about section.
  const regexMatch = html.match(/(<\/div>\s*<\/div>\s*<\/section>)/);
  if (regexMatch) {
     html = html.replace(/(<\/div>\s*<\/div>\s*<\/section>)/, statsRowHtml + '\n$1');
     fs.writeFileSync(homeHtmlPath, html, 'utf8');
     console.log('Successfully moved stats row to the correct section!');
  } else {
     console.log('Could not match closing tags of about section.');
  }

} else {
  console.log('Could not find end of about section.');
}

