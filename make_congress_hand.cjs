// Script to create the official Congress Hand SVG symbol
const fs = require('fs');
const path = require('path');

// Faithful Congress Hand Symbol (vector path matching the official INC election symbol)
const congressHandSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 280" width="100%" height="100%" fill="none">
  <!-- Solid white fill inside hand silhouette -->
  <path d="M 68 255 C 68 250, 62 245, 60 235 C 57 220, 56 195, 54 175 C 51 155, 48 135, 46 115 C 44 95, 43 75, 49 60 C 53 50, 63 48, 68 58 C 73 68, 72 90, 72 110 C 72 100, 72 80, 73 60 C 74 42, 85 40, 90 48 C 95 56, 95 75, 95 95 C 95 85, 95 65, 97 50 C 99 35, 110 33, 115 42 C 120 50, 120 70, 120 90 C 120 80, 122 65, 125 55 C 128 45, 137 45, 140 52 C 144 60, 142 80, 142 105 C 142 125, 142 145, 145 160 C 148 145, 155 130, 162 125 C 169 120, 175 125, 175 135 C 175 145, 170 160, 165 175 C 158 195, 150 215, 148 235 C 145 250, 145 255, 145 255 Z" fill="#FFFFFF"/>

  <!-- Precise Hand Line-Art Contours & Palm Creases matching the reference -->
  <g stroke="#000000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <!-- Index Finger -->
    <path d="M 68 130 L 68 70 C 68 52, 52 52, 52 70 L 52 165 C 52 195, 58 225, 64 255" />
    <!-- Middle Finger -->
    <path d="M 74 135 L 74 55 C 74 38, 92 38, 92 55 L 92 140" />
    <!-- Ring Finger -->
    <path d="M 98 140 L 98 48 C 98 32, 116 32, 116 48 L 116 142" />
    <!-- Little Finger -->
    <path d="M 122 142 L 122 65 C 122 50, 138 50, 138 65 L 138 165 C 138 195, 145 225, 146 255" />
    <!-- Thumb -->
    <path d="M 136 155 C 148 140, 166 126, 172 136 C 178 146, 166 168, 154 186 C 146 198, 142 220, 145 255" />
    
    <!-- Palm Creases & Knuckle details matching official symbol -->
    <path d="M 58 85 L 63 85" stroke-width="4" />
    <path d="M 58 105 L 63 105" stroke-width="4" />
    <path d="M 79 72 L 87 72" stroke-width="4" />
    <path d="M 79 95 L 87 95" stroke-width="4" />
    <path d="M 103 68 L 111 68" stroke-width="4" />
    <path d="M 103 92 L 111 92" stroke-width="4" />
    <path d="M 126 88 L 134 88" stroke-width="4" />

    <!-- Palm Lifeline / Heartline Creases -->
    <path d="M 60 178 C 75 170, 105 155, 130 162" stroke-width="6" />
    <path d="M 68 200 C 85 190, 115 185, 138 202" stroke-width="6" />
    <path d="M 78 222 C 92 215, 110 215, 126 230" stroke-width="5" />
    
    <!-- Wrist Base Band -->
    <path d="M 64 255 C 80 252, 120 252, 146 255" stroke-width="8" />
  </g>
</svg>`;

// Write congress-hand.svg to public/images/branding/ and public/
const brandingDir = path.join(__dirname, 'public', 'images', 'branding');
if (!fs.existsSync(brandingDir)) fs.mkdirSync(brandingDir, { recursive: true });

fs.writeFileSync(path.join(brandingDir, 'congress-hand.svg'), congressHandSvg, 'utf8');
fs.writeFileSync(path.join(__dirname, 'public', 'congress-hand.svg'), congressHandSvg, 'utf8');

// Also create favicon.svg with the Congress Hand on pure clean background with round container
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="bandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FF671F" />
      <stop offset="33%" stop-color="#FF671F" />
      <stop offset="33%" stop-color="#FFFFFF" />
      <stop offset="66%" stop-color="#FFFFFF" />
      <stop offset="66%" stop-color="#046A38" />
      <stop offset="100%" stop-color="#046A38" />
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#bandGrad)" />
  <rect x="1" y="1" width="62" height="62" rx="13" fill="none" stroke="#000000" stroke-width="1.5" stroke-opacity="0.15" />
  <!-- Hand symbol in white center area -->
  <g transform="translate(18, 8) scale(0.14)">
    <path d="M 68 255 C 68 250, 62 245, 60 235 C 57 220, 56 195, 54 175 C 51 155, 48 135, 46 115 C 44 95, 43 75, 49 60 C 53 50, 63 48, 68 58 C 73 68, 72 90, 72 110 C 72 100, 72 80, 73 60 C 74 42, 85 40, 90 48 C 95 56, 95 75, 95 95 C 95 85, 95 65, 97 50 C 99 35, 110 33, 115 42 C 120 50, 120 70, 120 90 C 120 80, 122 65, 125 55 C 128 45, 137 45, 140 52 C 144 60, 142 80, 142 105 C 142 125, 142 145, 145 160 C 148 145, 155 130, 162 125 C 169 120, 175 125, 175 135 C 175 145, 170 160, 165 175 C 158 195, 150 215, 148 235 C 145 250, 145 255, 145 255 Z" fill="#FFFFFF"/>
    <g stroke="#000000" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M 68 130 L 68 70 C 68 52, 52 52, 52 70 L 52 165 C 52 195, 58 225, 64 255" />
      <path d="M 74 135 L 74 55 C 74 38, 92 38, 92 55 L 92 140" />
      <path d="M 98 140 L 98 48 C 98 32, 116 32, 116 48 L 116 142" />
      <path d="M 122 142 L 122 65 C 122 50, 138 50, 138 65 L 138 165 C 138 195, 145 225, 146 255" />
      <path d="M 136 155 C 148 140, 166 126, 172 136 C 178 146, 166 168, 154 186 C 146 198, 142 220, 145 255" />
      <path d="M 60 178 C 75 170, 105 155, 130 162" stroke-width="8" />
      <path d="M 68 200 C 85 190, 115 185, 138 202" stroke-width="8" />
      <path d="M 64 255 L 146 255" stroke-width="10" />
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(__dirname, 'public', 'favicon.svg'), faviconSvg, 'utf8');
console.log('Created Congress hand SVG and favicon.svg successfully');
