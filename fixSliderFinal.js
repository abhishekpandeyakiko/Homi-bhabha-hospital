const fs = require('fs');

// 1 & 2. Fix home.html (Width, Border Radius, Emojis)
const homePath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let homeHtml = fs.readFileSync(homePath, 'utf8');

// Fix Width and Border Radius
homeHtml = homeHtml.replace(
  '<section class="max-w-[1450px] mx-auto px-6 py-8 relative overflow-hidden bg-transparent">',
  '<section class="w-full relative overflow-hidden bg-transparent">'
);
homeHtml = homeHtml.replace(
  '<div class="relative rounded-[2.5rem] bg-[#031A3E] overflow-hidden flex flex-col shadow-xl border border-slate-800/20 hero-grid-bg">',
  '<div class="relative bg-[#031A3E] overflow-hidden flex flex-col hero-grid-bg">'
);

// Fix Emojis
homeHtml = homeHtml.replace(/Γ¥ñ∩╕Å/g, '❤️');
homeHtml = homeHtml.replace(/≡ƒ¢í∩╕Å/g, '🛡️');
homeHtml = homeHtml.replace(/≡ƒÄù∩╕Å/g, '🎀');

fs.writeFileSync(homePath, homeHtml, 'utf8');

// 3. Fix JS initialization for the slider
const mainJsPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/assets/js/main.js';
let mainJs = fs.readFileSync(mainJsPath, 'utf8');

// Wrap everything in a function if it's not already
if (!mainJs.includes('function initMain()')) {
  mainJs = `
function initMain() {
${mainJs}
}

// Support both direct load and router load
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(initMain, 100);
} else {
  document.addEventListener('DOMContentLoaded', () => { setTimeout(initMain, 100); });
}

// Re-init on custom event
window.addEventListener('componentsLoaded', initMain);
`;
  fs.writeFileSync(mainJsPath, mainJs, 'utf8');
}

const routerJsPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/assets/js/router.js';
if (fs.existsSync(routerJsPath)) {
  let routerJs = fs.readFileSync(routerJsPath, 'utf8');
  if (!routerJs.includes('componentsLoaded')) {
    routerJs = routerJs.replace(
      "console.log('All components loaded via router.');",
      "console.log('All components loaded via router.');\n  window.dispatchEvent(new Event('componentsLoaded'));"
    );
    fs.writeFileSync(routerJsPath, routerJs, 'utf8');
  }
}

console.log('Fixed slider width, border radius, emojis, and initialized JS properly!');
