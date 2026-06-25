const fs = require('fs');
const htmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const lines = html.split('\\n');

// The cards are from line 630 to line 694.
const cardsLines = lines.slice(629, 694).join('\\n'); // slice is 0-indexed, so 629 is line 630

// We want to insert two copies of cardsLines right after line 694 (index 693).
lines.splice(694, 0, cardsLines, cardsLines);

fs.writeFileSync(htmlPath, lines.join('\\n'), 'utf8');
console.log("Successfully duplicated the cards using line numbers!");
