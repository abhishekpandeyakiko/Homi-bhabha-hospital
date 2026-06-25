const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

// Replace aspect-[4/3] with aspect-square
html = html.replace(/aspect-\[4\/3\]/g, 'aspect-square');

// Replace p-4 with p-6 in the card content area
html = html.replace(/<div class="p-4 flex flex-col bg-white border-t border-slate-50">/g, '<div class="p-6 flex flex-col bg-white border-t border-slate-50">');

// Increase text sizes
html = html.replace(/text-\[15px\]/g, 'text-[18px]');
html = html.replace(/text-\[11px\]/g, 'text-[13px]');

fs.writeFileSync(homeHtmlPath, html, 'utf8');
console.log('Successfully increased box height and text sizes!');
