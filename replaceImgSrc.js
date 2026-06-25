const fs = require('fs');
const htmlPath = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/components/home.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// URLs
const img2 = "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600"; // Indian patient and doctor
const img3 = "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600"; // Medical records / services
const img4 = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"; // Hospital building

// We will use replace with regex for exact targeted tags
html = html.replace(/<img src="assets\/img\/video_consult\.png" alt="Book Appointment"/g, '<img src="' + img2 + '" alt="Book Appointment"');
html = html.replace(/<img src="assets\/img\/1\.jpg\.jpeg" alt="Book Appointment"/g, '<img src="' + img2 + '" alt="Book Appointment"');

html = html.replace(/<img src="assets\/img\/lab_tests\.png" alt="Patient Services"/g, '<img src="' + img3 + '" alt="Patient Services"');
html = html.replace(/<img src="assets\/img\/2\.jpg\.jpeg" alt="Patient Services"/g, '<img src="' + img3 + '" alt="Patient Services"');

html = html.replace(/<img src="assets\/img\/find_doctors\.png" alt="Our Locations"/g, '<img src="' + img4 + '" alt="Our Locations"');
html = html.replace(/<img src="assets\/img\/doctors_fanned\.png" alt="Our Locations"/g, '<img src="' + img4 + '" alt="Our Locations"');

fs.writeFileSync(htmlPath, html, 'utf8');
console.log("Images replaced via regex successfully!");
