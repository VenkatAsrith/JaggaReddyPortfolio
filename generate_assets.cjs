const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'public', 'assets', 'gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

const items = [
  { file: 'assembly-debate.svg', title: 'TELANGANA LEGISLATIVE ASSEMBLY', subtitle: 'Debating Manjeera River Basin Water & Local Farmer Allocations', accent: '#831843' },
  { file: 'manjeera-inspection.svg', title: 'MANJEERA RIVER BASIN INSPECTION', subtitle: 'Reviewing Singur Reservoir Water Inflow & Canals', accent: '#0284C7' },
  { file: 'public-rally.svg', title: 'SANGAREDDY MASS CONVENTION', subtitle: 'Addressing Constituents & Party Cadre in Sangareddy Town', accent: '#BE185D' },
  { file: 'door-to-door.svg', title: 'GRASSROOTS CITIZEN OUTREACH', subtitle: 'Direct Door-to-Door Public Grievance Interaction', accent: '#D97706' },
  { file: 'press-briefing.svg', title: 'GANDHI BHAVAN PRESS BRIEFING', subtitle: 'Statewide Media Briefing by TPCC Working President', accent: '#4F46E5' },
  { file: 'market-yard.svg', title: 'SANGAREDDY AGRICULTURAL MARKET YARD', subtitle: 'Inspecting Paddy & Cotton Procurement Centers', accent: '#059669' },
  { file: 'civic-works.svg', title: 'SANGAREDDY MUNICIPAL INFRASTRUCTURE', subtitle: 'Inspecting Civic Drainage, Road Widening & Streetlights', accent: '#7C3AED' }
];

items.forEach(it => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${it.file}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111827" />
      <stop offset="100%" stop-color="#1F2937" />
    </linearGradient>
    <linearGradient id="acc-${it.file}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${it.accent}" />
      <stop offset="100%" stop-color="#F472B6" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg-${it.file})" />
  <g opacity="0.06" stroke="#FFFFFF" stroke-width="1">
    <line x1="0" y1="150" x2="800" y2="150" />
    <line x1="0" y1="300" x2="800" y2="300" />
    <line x1="0" y1="450" x2="800" y2="450" />
    <line x1="200" y1="0" x2="200" y2="600" />
    <line x1="400" y1="0" x2="400" y2="600" />
    <line x1="600" y1="0" x2="600" y2="600" />
  </g>
  <circle cx="400" cy="220" r="95" fill="${it.accent}" fill-opacity="0.16" stroke="${it.accent}" stroke-width="2" />
  <circle cx="400" cy="220" r="65" fill="#111827" stroke="#374151" stroke-width="1.5" />
  <text x="400" y="228" font-family="'Montserrat', sans-serif" font-size="28" font-weight="800" fill="#FFFFFF" text-anchor="middle">JR</text>
  <path d="M375 250 L400 265 L425 250" stroke="${it.accent}" stroke-width="3" fill="none" stroke-linecap="round" />
  <g transform="translate(40, 390)">
    <rect width="720" height="160" rx="12" fill="#111827" fill-opacity="0.95" stroke="#374151" stroke-width="1" />
    <rect x="0" y="0" width="720" height="4" rx="2" fill="url(#acc-${it.file})" />
    <text x="32" y="48" font-family="'Montserrat', sans-serif" font-size="22" font-weight="800" fill="#FFFFFF" letter-spacing="1">${it.title}</text>
    <text x="32" y="84" font-family="'Roboto', sans-serif" font-size="15" font-weight="400" fill="#D1D5DB">${it.subtitle}</text>
    <text x="32" y="122" font-family="'Roboto', sans-serif" font-size="12" font-weight="600" fill="#9CA3AF" letter-spacing="2">SANGAREDDY ARCHIVE • T. JAYAPRAKASH REDDY</text>
  </g>
  <rect x="15" y="15" width="770" height="570" rx="12" fill="none" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="1" />
</svg>`;
  fs.writeFileSync(path.join(galleryDir, it.file), svg, 'utf-8');
  console.log(`Wrote ${it.file}`);
});

// Favicon
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#831843" />
  <rect x="2" y="2" width="60" height="60" rx="12" fill="none" stroke="#BE185D" stroke-width="2" />
  <text x="32" y="42" font-family="'Montserrat', sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="-1">JR</text>
</svg>`;
fs.writeFileSync(path.join(__dirname, 'public', 'favicon.svg'), faviconSvg, 'utf-8');
console.log('Wrote favicon.svg');
