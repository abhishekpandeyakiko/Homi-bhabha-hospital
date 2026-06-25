const fs = require('fs');

const origIndex = fs.readFileSync('c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/original_index_utf8.html', 'utf8');
const lines = origIndex.split(/\r?\n/);

let startIndex = -1;
let endIndex = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('HERO SECTION') || lines[i].includes('HERO SLIDER')) {
        startIndex = i - 1; // get the <!-- === marker
    }
    if (startIndex !== -1 && i > startIndex + 10 && lines[i].includes('BOTTOM STATS STRIP')) {
        endIndex = i - 1;
        break;
    }
}

if (startIndex !== -1 && endIndex !== -1) {
    const heroCode = lines.slice(startIndex, endIndex).join('\n');
    const homePath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
    let homeLines = fs.readFileSync(homePath, 'utf8').split(/\r?\n/);
    
    let targetIndex = -1;
    for (let i = 0; i < homeLines.length; i++) {
        if (homeLines[i].includes('BOTTOM QUICK LINKS STRIP')) {
            targetIndex = i - 1;
            break;
        }
    }
    
    if (targetIndex !== -1) {
        homeLines.splice(targetIndex, 0, heroCode);
        fs.writeFileSync(homePath, homeLines.join('\n'), 'utf8');
        console.log('Hero slider successfully restored!');
    } else {
        console.log('Could not find BOTTOM QUICK LINKS start in home.html');
    }
} else {
    console.log('Could not find markers. Start: ' + startIndex + ' End: ' + endIndex);
}
