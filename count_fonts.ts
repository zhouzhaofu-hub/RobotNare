import fs from 'fs';
const code = fs.readFileSync('src/App.tsx', 'utf8');
const counts = {};
for (const match of code.matchAll(/font-[a-zA-Z0-9]+/g)) {
  counts[match[0]] = (counts[match[0]] || 0) + 1;
}
console.log(counts);
