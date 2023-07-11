process.stdout.write('What is your name?\n > ')
process.stdin.on('data', (data) => {
  process.stdout.write(`Hi ${data.toString().trim()}!\n`);
  process.exit();
});