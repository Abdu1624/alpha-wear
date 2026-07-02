const { spawn } = require('child_process');
const fs = require('fs');
const args = process.argv.slice(2);
const [cmd, ...cmdArgs] = args;
const outPath = 'run-cmd-output.txt';
const out = fs.createWriteStream(outPath, { flags: 'w' });
const child = spawn(cmd, cmdArgs, { shell: true });
child.stdout.pipe(out);
child.stderr.pipe(out);
child.on('close', code => {
  out.end(`\nEXIT_CODE=${code}`);
});
