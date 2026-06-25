const fs = require('fs');
const file = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/assets/scss/home.css';

const cssToAdd = `

/* ======================================= */
/* CUSTOM SECTION CLASSES                  */
/* ======================================= */

.custom-hero-section { }
.custom-feature-cards-section { }
.custom-about-us-section { }
.custom-ticker-marquee-section { }
.custom-our-services-section { }
.custom-appointment-section { }
.custom-doctors-section { }
.custom-statistics-counter-section { }
.custom-partners-section { }
.custom-blog-section { }
.custom-newsletter-cta-section { }
`;

fs.appendFileSync(file, cssToAdd);
console.log('Appended custom section classes to CSS');
