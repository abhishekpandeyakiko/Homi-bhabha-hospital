const fs = require('fs');

const homePath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let content = fs.readFileSync(homePath, 'utf8');

// 1. Fix slide 1 image
content = content.replace('src="doctor_hero.png"', 'src="assets/img/doctor_hero.png"');

// 2. Fix slide 2
const slide2Old = `<div class="lg:col-span-5 flex justify-center relative w-full h-full min-h-[300px] lg:min-h-0 items-center">
                <!-- Hospital photo inside a premium frame -->
                <div class="w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-8 border-white/10 shadow-2xl relative z-10 bg-slate-800">
                  <img src="1.jpg.jpeg" alt="Mullanpur Hospital Building" class="w-full h-full object-cover scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>`;

const slide2New = `<div class="lg:col-span-5 flex justify-center relative w-full h-full min-h-[300px] lg:min-h-0">
                <!-- Background decorative details -->
                <div class="absolute top-[20%] left-[-10%] text-white/5 text-8xl font-light pointer-events-none select-none">+</div>
                <div class="absolute bottom-[20%] right-[-10%] text-white/5 text-8xl font-light pointer-events-none select-none">+</div>
                
                <!-- Floating image matching slide 1 -->
                <img src="assets/img/1.jpg.jpeg" alt="Mullanpur Hospital Building" class="absolute bottom-0 h-[100%] max-h-[500px] lg:max-h-[600px] object-contain z-10 drop-shadow-2xl select-none" />`;

content = content.replace(slide2Old, slide2New);

// 3. Fix slide 3
const slide3Old = `<div class="lg:col-span-5 flex justify-center relative w-full h-full min-h-[300px] lg:min-h-0 items-center">
                <!-- Hospital photo inside a premium frame -->
                <div class="w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-8 border-white/10 shadow-2xl relative z-10 bg-slate-800">
                  <img src="2.jpg.jpeg" alt="Sangrur Hospital Building" class="w-full h-full object-cover scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>`;

const slide3New = `<div class="lg:col-span-5 flex justify-center relative w-full h-full min-h-[300px] lg:min-h-0">
                <!-- Background decorative details -->
                <div class="absolute top-[20%] left-[-10%] text-white/5 text-8xl font-light pointer-events-none select-none">+</div>
                <div class="absolute bottom-[20%] right-[-10%] text-white/5 text-8xl font-light pointer-events-none select-none">+</div>
                
                <!-- Floating image matching slide 1 -->
                <img src="assets/img/2.jpg.jpeg" alt="Sangrur Hospital Building" class="absolute bottom-0 h-[100%] max-h-[500px] lg:max-h-[600px] object-contain z-10 drop-shadow-2xl select-none" />`;

content = content.replace(slide3Old, slide3New);

// 4. Check for any remaining stray direct images like achievement_badge.png or doctors_fanned.png
content = content.replace('src="achievement_badge.png"', 'src="assets/img/achievement_badge.png"');
content = content.replace('src="doctors_fanned.png"', 'src="assets/img/doctors_fanned.png"');

fs.writeFileSync(homePath, content, 'utf8');
console.log('Fixed images and slider shapes!');
