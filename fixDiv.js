const fs = require('fs');

const homeHtmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(homeHtmlPath, 'utf8');

// I added an extra opening div inside Left Image Area, so I need to close it before Right Text Area
const rightTextAreaComment = '<!-- Right Text Area -->';
if (html.includes(rightTextAreaComment)) {
  html = html.replace(rightTextAreaComment, '</div>\n\n        <!-- Right Text Area -->');
  fs.writeFileSync(homeHtmlPath, html, 'utf8');
  console.log('Fixed missing closing div!');
} else {
  console.log('Could not find Right Text Area comment');
}
