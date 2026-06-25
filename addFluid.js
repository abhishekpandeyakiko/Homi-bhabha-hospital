const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

// Use regex to find <section class="..."> and add container-fluid
html = html.replace(/<section\s+class="([^"]*)"/g, (match, classList) => {
  // Check if it already has container-fluid
  if (!classList.includes('container-fluid')) {
    // Add container-fluid to the beginning of the class list
    return `<section class="container-fluid ${classList}"`;
  }
  return match;
});

fs.writeFileSync(homeHtmlPath, html, 'utf8');
console.log('Successfully added container-fluid to all sections!');
