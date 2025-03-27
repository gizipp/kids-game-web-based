const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/og-image.svg'));

sharp(svgBuffer)
  .resize(1200, 630)
  .png()
  .toFile(path.join(__dirname, '../public/og-image.png'))
  .then(() => console.log('OG image generated successfully!'))
  .catch(err => console.error('Error generating OG image:', err)); 