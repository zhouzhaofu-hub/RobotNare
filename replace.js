import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace font sizes
content = content.replace(/text-\[8px\]/g, 'text-xs');
content = content.replace(/text-\[10px\]/g, 'text-xs');
content = content.replace(/text-\[11px\]/g, 'text-xs');
content = content.replace(/text-sm/g, 'text-base');

// Replace colors
// Alert: #E11D48 (rose-600)
content = content.replace(/text-red-500/g, 'text-[#E11D48]');
content = content.replace(/bg-red-500/g, 'bg-[#E11D48]');
content = content.replace(/text-red-600/g, 'text-[#E11D48]');
content = content.replace(/bg-red-600/g, 'bg-[#E11D48]');

// Normal: #10B981 (emerald-500)
content = content.replace(/text-green-500/g, 'text-[#10B981]');
content = content.replace(/bg-green-500/g, 'bg-[#10B981]');
content = content.replace(/text-green-600/g, 'text-[#10B981]');
content = content.replace(/bg-green-600/g, 'bg-[#10B981]');

// Attention: #F59E0B (amber-500)
content = content.replace(/text-orange-500/g, 'text-[#F59E0B]');
content = content.replace(/bg-orange-500/g, 'bg-[#F59E0B]');
content = content.replace(/text-yellow-500/g, 'text-[#F59E0B]');
content = content.replace(/bg-yellow-500/g, 'bg-[#F59E0B]');

// Border radius
// 24-32px
content = content.replace(/rounded-2xl/g, 'rounded-[24px]');
content = content.replace(/rounded-xl/g, 'rounded-[24px]');
content = content.replace(/rounded-lg/g, 'rounded-[24px]');

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('Done');
