const fs = require('fs');
const file = 'c:/Users/ADMIN/Documents/Homi bhabha cancer hospital/assets/scss/home.css';

const cssToAdd = `

/* ======================================= */
/* ABOUT US CIRCULAR TEXT                  */
/* ======================================= */

.circular-text-container svg {
  transform-origin: center;
  /* animation applied in tailwind classes directly */
}
.circular-text-container path {
  fill: transparent;
}
.circular-text-container text {
  font-family: inherit;
  fill: white;
  font-weight: 700;
  letter-spacing: 2px;
}
`;

fs.appendFileSync(file, cssToAdd);
console.log('Appended circular text CSS');
