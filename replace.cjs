const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Header / General dark backgrounds
content = content.replace(/bg-nc-blue(?!-light|\/)/g, 'bg-nc-navy-dark');
content = content.replace(/bg-nc-blue-light/g, 'bg-nc-tech-blue');
content = content.replace(/from-nc-blue-light/g, 'from-nc-tech-blue');
content = content.replace(/from-nc-blue(?!-light|\/)/g, 'from-nc-navy-dark');
content = content.replace(/to-nc-blue/g, 'to-nc-navy-dark');

// Buttons / Gold -> Green
content = content.replace(/bg-nc-gold(?!-light|\/)/g, 'bg-nc-trust-green');
content = content.replace(/bg-nc-gold-light/g, 'bg-nc-tech-blue');
content = content.replace(/text-nc-gold/g, 'text-nc-trust-green');
content = content.replace(/shadow-nc-gold/g, 'shadow-nc-trust-green');
content = content.replace(/ring-nc-gold/g, 'ring-nc-trust-green');
content = content.replace(/hover:bg-nc-gold/g, 'hover:bg-nc-trust-green');
content = content.replace(/hover:text-nc-gold/g, 'hover:text-nc-trust-green');
content = content.replace(/from-nc-gold/g, 'from-nc-trust-green');

// Texts / Titles
content = content.replace(/text-nc-blue/g, 'text-nc-teal-title');
content = content.replace(/hover:text-nc-blue/g, 'hover:text-nc-teal-title');
content = content.replace(/border-nc-blue/g, 'border-nc-teal-title');
content = content.replace(/ring-nc-blue/g, 'ring-nc-teal-title');
content = content.replace(/shadow-nc-blue/g, 'shadow-nc-navy-dark');
content = content.replace(/hover:bg-nc-blue/g, 'hover:bg-nc-trust-green'); // mostly buttons

// Grays to Soft BG
content = content.replace(/bg-nc-gray/g, 'bg-nc-soft-bg');
content = content.replace(/bg-slate-50/g, 'bg-nc-soft-bg');

// Specifics
content = content.replace(/bg-nc-navy-dark text-white px-6 py-2.5 rounded-full/g, 'bg-nc-trust-green text-white px-6 py-2.5 rounded-full');
content = content.replace(/bg-nc-navy-dark text-white px-6 py-3 rounded-full/g, 'bg-nc-trust-green text-white px-6 py-3 rounded-full');
content = content.replace(/bg-nc-navy-dark text-white px-8 py-4 rounded-xl/g, 'bg-nc-trust-green text-white px-8 py-4 rounded-xl');
content = content.replace(/border-2 border-nc-teal-title text-nc-teal-title hover:bg-nc-trust-green hover:text-white/g, 'border-2 border-nc-trust-green text-nc-trust-green hover:bg-nc-trust-green hover:text-white');
content = content.replace(/bg-white border-2 border-nc-teal-title/g, 'bg-white border-2 border-nc-trust-green');

fs.writeFileSync('src/App.tsx', content, 'utf8');
