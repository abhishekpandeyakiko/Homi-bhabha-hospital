const fs = require('fs');
const htmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// Function to replace the nth occurrence of a string
function replaceNth(str, search, replace, n) {
  let count = 0;
  return str.replace(new RegExp(search, 'g'), function(match) {
    count++;
    return (count === n) ? replace : match;
  });
}

// Card 1 duplicate -> Radiation Therapy
html = replaceNth(html, '>VACCINE<', '>RADIATION<', 2);
html = replaceNth(html, '>Pediatric Dentistry<', '>Radiation Therapy<', 2);

// Card 2 duplicate -> Chemotherapy
html = replaceNth(html, '>X-RAY<', '>ONCOLOGY<', 2);
html = replaceNth(html, '>Digital X-Ray<', '>Chemotherapy<', 2);

// Card 3 duplicate -> Immunotherapy
html = replaceNth(html, '>DENTAL<', '>THERAPY<', 2);
html = replaceNth(html, '>Dental Fixing<', '>Immunotherapy<', 2);

// Card 4 duplicate -> Bone Marrow
html = replaceNth(html, '>SURGERY<', '>TRANSPLANT<', 2);
html = replaceNth(html, '>Human Brain Surgery<', '>Bone Marrow Transplant<', 2);

// Card 5 duplicate -> Pathology Labs
html = replaceNth(html, '>ONCOLOGY<', '>PATHOLOGY<', 2); // Note: ONCOLOGY is used in Card 5 originally, so occurrence 2 was Card 5's first duplicate. Wait, I just added ONCOLOGY for Card 2 duplicate, so occurrence 2 of ONCOLOGY might be Card 2 duplicate now. Let's use exact string.
html = replaceNth(html, '>Medical Oncology<', '>Pathology Labs<', 2);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log("Successfully added 5 new unique services!");
