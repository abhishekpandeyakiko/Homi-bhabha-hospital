const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

// 1. Remove the stethoscope watermark
const watermarkHtml = '<!-- Faint Medical Background Graphic -->\n    <i class="fa-solid fa-stethoscope absolute -right-10 top-1/2 -translate-y-1/2 text-[#0B63E5] opacity-[0.04] text-[600px] pointer-events-none z-0 transform -rotate-12"></i>\n\n    ';
html = html.replace(watermarkHtml, '');

// 2. Adjust the floating blue badge
// Old badge HTML
const oldBadge = `<div class="absolute top-8 -right-4 lg:-right-12 w-32 h-32 bg-[#0B63E5] rounded-3xl shadow-xl flex items-center justify-center">
            <!-- Center Icon -->
            <div class="absolute inset-0 flex items-center justify-center z-10">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
                <i class="fa-solid fa-heart-pulse text-red-500 text-xl"></i>
              </div>
            </div>
            <!-- Circular Text Animation -->
            <div class="w-full h-full animate-[spin_10s_linear_infinite] relative circular-text-container">
               <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-sm">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text font-size="9" font-weight="bold" fill="white" letter-spacing="1.5">
                  <textPath href="#circlePath" startOffset="0%">
                    ONCOLOGY • SURGERY • RADIOTHERAPY •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>`;

// New badge HTML matching the screenshot more precisely
const newBadge = `<div class="absolute -top-6 -right-6 lg:-right-16 w-36 h-36 bg-[#007aff] rounded-[2rem] shadow-2xl flex items-center justify-center border-4 border-white">
            <!-- Center Icon -->
            <div class="absolute inset-0 flex items-center justify-center z-10">
              <div class="w-[3.2rem] h-[3.2rem] bg-white rounded-full flex items-center justify-center shadow-inner">
                <i class="fa-solid fa-heart-pulse text-red-600 text-[26px]"></i>
              </div>
            </div>
            <!-- Circular Text Animation -->
            <div class="w-[125%] h-[125%] animate-[spin_12s_linear_infinite] relative circular-text-container">
               <svg viewBox="0 0 100 100" class="w-full h-full">
                <!-- Adjusted radius so text sits neatly around the white circle -->
                <path id="circlePath" d="M 50, 50 m -31, 0 a 31,31 0 1,1 62,0 a 31,31 0 1,1 -62,0" fill="transparent" />
                <text font-size="10" font-weight="bold" fill="white" letter-spacing="3.5">
                  <textPath href="#circlePath" startOffset="0%">
                    GYNECOLOGIST • HEALTHCARE • NEUROLOGIST • 
                  </textPath>
                </text>
              </svg>
            </div>
          </div>`;

html = html.replace(oldBadge, newBadge);

// Make the doctor image border exactly match the screenshot (which has no visible thick border around the doctor, just soft edges, but wait...
// The screenshot doctor image has a thick white rounded shape on the left, but the right edge merges with the background?)
// No, the screenshot has a clean background on the doctor image itself, the background of the image is just a white/beige room.
// The image container is rounded on the left side, but let's keep our rounded-[2.5rem] on all 3 sides.
// I'll just change the blue color of the "About Company" subtitle and button to match the bright blue.

html = html.replace(/bg-\[#0B63E5\]/g, 'bg-[#007aff]');
html = html.replace(/text-\[#0B63E5\]/g, 'text-[#007aff]');

fs.writeFileSync(homeHtmlPath, html, 'utf8');
console.log('Successfully removed watermark and adjusted the blue heart box!');
