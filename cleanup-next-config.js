const fs = require('fs');
const path = require('path');
const project = path.resolve(__dirname);
const tsConfigPath = path.join(project, 'next.config.ts');
const disabledPath = path.join(project, 'next.config.ts.disabled');
const reportPath = path.join(project, 'cleanup-report.txt');
const lines = [];
function log(msg) { lines.push(msg); }
try {
  if (fs.existsSync(tsConfigPath)) {
    fs.renameSync(tsConfigPath, disabledPath);
    log('renamed next.config.ts to next.config.ts.disabled');
  } else {
    log('no next.config.ts found');
  }
  fs.writeFileSync(reportPath, lines.join('\n'), 'utf8');
} catch (err) {
  fs.writeFileSync(reportPath, 'error: ' + err.message, 'utf8');
  process.exit(1);
}
