const fs = require('fs');

const homePath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let content = fs.readFileSync(homePath, 'utf8');

// 1. Add items-center to the image column wrappers
content = content.replace(/class="lg:col-span-5 flex justify-center relative w-full h-full min-h-\[300px\] lg:min-h-0"/g, 
  'class="lg:col-span-5 flex items-center justify-center relative w-full h-full min-h-[300px] lg:min-h-0"');

// 2. Increase dimensions and make sure object-center is used
const oldImgClass1 = 'w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] lg:w-[380px] lg:h-[480px] object-cover object-top z-10 drop-shadow-2xl select-none border-8 border-white/10 rounded-[15px] bg-slate-800/40 backdrop-blur-sm';
const newImgClass1 = 'w-[320px] h-[420px] sm:w-[380px] sm:h-[480px] lg:w-[460px] lg:h-[560px] object-cover object-top z-10 drop-shadow-2xl select-none border-8 border-white/10 rounded-[15px] bg-slate-800/40 backdrop-blur-sm';

const oldImgClass2 = 'w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] lg:w-[380px] lg:h-[480px] object-cover object-center z-10 drop-shadow-2xl select-none border-8 border-white/10 rounded-[15px] bg-slate-800/40 backdrop-blur-sm';
const newImgClass2 = 'w-[320px] h-[420px] sm:w-[380px] sm:h-[480px] lg:w-[460px] lg:h-[560px] object-cover object-center z-10 drop-shadow-2xl select-none border-8 border-white/10 rounded-[15px] bg-slate-800/40 backdrop-blur-sm';

content = content.replace(new RegExp(oldImgClass1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newImgClass1);
content = content.replace(new RegExp(oldImgClass2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newImgClass2);

fs.writeFileSync(homePath, content, 'utf8');
console.log('Fixed wrapper centering and increased image size!');
