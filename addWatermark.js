const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

const injectionPoint = '<div class="max-w-[1200px] mx-auto">';
const watermarkHtml = `
    <!-- Faint Medical Background Graphic -->
    <i class="fa-solid fa-stethoscope absolute -right-10 top-1/2 -translate-y-1/2 text-[#0B63E5] opacity-[0.04] text-[600px] pointer-events-none z-0 transform -rotate-12"></i>

    `;

// To ensure we inject it inside the custom-about-us-section
const sectionMarker = '<section class="custom-about-us-section';
const startIndex = html.indexOf(sectionMarker);

if (startIndex !== -1) {
  // Find the exact injection point after the section tag starts
  const injectionIndex = html.indexOf(injectionPoint, startIndex);
  if (injectionIndex !== -1) {
    html = html.substring(0, injectionIndex) + watermarkHtml + html.substring(injectionIndex);
    fs.writeFileSync(homeHtmlPath, html, 'utf8');
    console.log('Successfully added background stethoscope watermark!');
  } else {
    console.log('Could not find injection point inside about section.');
  }
} else {
  console.log('Could not find about section marker.');
}
