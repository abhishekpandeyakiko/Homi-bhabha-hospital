const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

// The exact string to find and move
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

// Remove it from current location (which is near line 287)
html = html.replace(statsRowHtml, '');

// Now explicitly inject it at the end of custom-about-us-section
const targetSection = '<section class="custom-about-us-section';
const startIndex = html.indexOf(targetSection);

if (startIndex !== -1) {
  // We want to insert it just before the `</section>` of this specific section.
  const sectionEndIndex = html.indexOf('</section>', startIndex);
  
  // Actually, we want to insert it inside the `max-w-[1200px] mx-auto` container, so it's aligned.
  // Let's find the closing div of max-w-[1200px] which is right before </section>
  const insertIndex = html.lastIndexOf('</div>', sectionEndIndex - 1);
  
  if (insertIndex !== -1) {
    html = html.substring(0, insertIndex) + statsRowHtml + '\n    ' + html.substring(insertIndex);
    fs.writeFileSync(homeHtmlPath, html, 'utf8');
    console.log('Successfully and accurately placed the stats row inside custom-about-us-section!');
  } else {
    console.log('Could not find inner div to insert into.');
  }
} else {
  console.log('Could not find custom-about-us-section.');
}
