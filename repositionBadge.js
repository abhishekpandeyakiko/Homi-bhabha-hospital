const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

// The chunk we want to replace
const oldChunk = `        <!-- Left Image Area -->
        <div class="relative w-full">
          <!-- The main image -->
          <div class="rounded-tl-[2.5rem] rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-br-none overflow-hidden shadow-2xl bg-white border-[12px] border-white max-w-[450px]">
            <img src="assets/img/about_doctor.png" alt="Expert Doctor" class="w-full object-cover aspect-[4/5] object-center" />
          </div>

          <!-- Floating Blue Badge -->
          <div class="absolute -top-6 -right-6 lg:-right-16 w-36 h-36 bg-[#007aff] rounded-[2rem] shadow-2xl flex items-center justify-center border-4 border-white">`;

const newChunk = `        <!-- Left Image Area -->
        <div class="w-full flex justify-center lg:justify-start">
          <div class="relative max-w-[450px] w-full">
            <!-- The main image -->
            <div class="rounded-tl-[2.5rem] rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-br-none overflow-hidden shadow-2xl bg-white border-[12px] border-white w-full">
              <img src="assets/img/about_doctor.png" alt="Expert Doctor" class="w-full object-cover aspect-[4/5] object-center" />
            </div>

            <!-- Floating Blue Badge -->
            <div class="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-32 h-32 sm:w-36 sm:h-36 bg-[#007aff] rounded-[2rem] shadow-2xl flex items-center justify-center border-4 border-white">`;

html = html.replace(oldChunk, newChunk);

fs.writeFileSync(homeHtmlPath, html, 'utf8');
console.log('Successfully repositioned badge over the image corner!');
