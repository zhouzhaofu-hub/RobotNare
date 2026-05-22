const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(/>✕<\/button>/g, '><ChevronLeft size={24} strokeWidth={1.5} /></button>');
code = code.replace(/>\s*✕\s*<\/button>/g, '><ChevronLeft size={24} strokeWidth={1.5} /></button>');
code = code.replace(/>\s*❮\s*<\/button>/g, '><ChevronLeft size={24} strokeWidth={1.5} /></button>');
code = code.replace(/生成健康趋势报告/g, '查看健康评估报告');
fs.writeFileSync('src/App.tsx', code);
console.log('done');
