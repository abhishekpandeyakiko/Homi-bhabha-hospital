const fs = require('fs');

const origPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/original_index.html';
const homePath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';

// Read file as utf16le
let origContent = fs.readFileSync(origPath, 'utf16le');
if (origContent.charCodeAt(0) === 0xFEFF) origContent = origContent.substring(1);

// Look for the slider
const sliderStartStr1 = '<!-- ===================================================\n         HERO SLIDER';
const sliderStartStr2 = '<!-- ===================================================\r\n         HERO SLIDER';

let startIndex = origContent.indexOf(sliderStartStr1);
if (startIndex === -1) startIndex = origContent.indexOf(sliderStartStr2);

const sliderEndStr1 = '<!-- ===================================================\n             BOTTOM QUICK LINKS STRIP';
const sliderEndStr2 = '<!-- ===================================================\r\n             BOTTOM QUICK LINKS STRIP';

let endIndex = origContent.indexOf(sliderEndStr1);
if (endIndex === -1) endIndex = origContent.indexOf(sliderEndStr2);

if (endIndex === -1) {
    // try old matching
    const fallbackEnd = origContent.indexOf('<!-- ===================================================\n         BOTTOM QUICK LINKS STRIP');
    const fallbackEnd2 = origContent.indexOf('<!-- ===================================================\r\n         BOTTOM QUICK LINKS STRIP');
    if (fallbackEnd !== -1) endIndex = fallbackEnd;
    else if (fallbackEnd2 !== -1) endIndex = fallbackEnd2;
}

if (startIndex !== -1 && endIndex !== -1) {
    const sliderCode = origContent.substring(startIndex, endIndex).replace(/\r\n/g, '\n');
    
    let homeContent = fs.readFileSync(homePath, 'utf8');
    
    const targetIndex = homeContent.indexOf('<!-- ===================================================\n             BOTTOM QUICK LINKS STRIP');
    const targetIndexFallback = homeContent.indexOf('<!-- ===================================================\n         BOTTOM QUICK LINKS STRIP');
    
    const finalTargetIndex = targetIndex !== -1 ? targetIndex : targetIndexFallback;
    
    if (finalTargetIndex !== -1) {
        homeContent = homeContent.substring(0, finalTargetIndex) + sliderCode + '\n    ' + homeContent.substring(finalTargetIndex);
        fs.writeFileSync(homePath, homeContent, 'utf8');
        console.log('Successfully restored slider.');
    } else {
        console.log('Target index in home.html not found.');
    }
} else {
    console.log('Slider markers not found in original index.', startIndex, endIndex);
}
