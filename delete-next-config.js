const fs = require('fs');
const path = require('path');
const project = path.resolve(__dirname);
const target = path.join(project, 'next.config.ts');
try {
  if (fs.existsSync(target)) {
    fs.unlinkSync(target);
    console.log('deleted');
  } else {
    console.log('missing');
  }
} catch (err) {
  console.error('error', err && err.message);
}
