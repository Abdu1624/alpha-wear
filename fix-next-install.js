const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const project = path.resolve(__dirname);
const reportPath = path.join(project, 'fix-next-report.txt');
const log = [];
function append(line) {
  log.push(line);
}
function writeReport(code) {
  fs.writeFileSync(reportPath, log.join('\n') + '\nEXIT_CODE=' + code + '\n', 'utf8');
}
try {
  const tsConfig = path.join(project, 'next.config.ts');
  if (fs.existsSync(tsConfig)) {
    try {
      fs.renameSync(tsConfig, path.join(project, 'next.config.ts.disabled'));
      append('renamed next.config.ts to next.config.ts.disabled');
    } catch (err) {
      append('failed rename next.config.ts: ' + err.message);
    }
  } else {
    append('no next.config.ts found');
  }
  const nextDir = path.join(project, 'node_modules', 'next');
  if (fs.existsSync(nextDir)) {
    try {
      fs.rmSync(nextDir, { recursive: true, force: true });
      append('removed node_modules/next');
    } catch (err) {
      append('failed remove node_modules/next: ' + err.message);
    }
  } else {
    append('no node_modules/next directory');
  }
  append('running npm install');
  const child = spawn('npm', ['install'], { cwd: project, shell: true, stdio: ['ignore', 'pipe', 'pipe'] });
  child.stdout.on('data', data => append(data.toString().trim()));
  child.stderr.on('data', data => append(data.toString().trim()));
  child.on('close', code => writeReport(code));
} catch (err) {
  append('fatal error: ' + err.message);
  writeReport(1);
  process.exit(1);
}
