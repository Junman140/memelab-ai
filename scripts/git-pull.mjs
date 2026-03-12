import { execSync } from 'child_process';

const run = (cmd) => {
  console.log(`> ${cmd}`);
  const out = execSync(cmd, { cwd: '/vercel/share/v0-project', encoding: 'utf8' });
  if (out) console.log(out);
};

run('git fetch origin');
run('git pull origin v0/junman140-231cb0e4 --rebase');
run('git log --oneline -5');
console.log('Pull complete.');
