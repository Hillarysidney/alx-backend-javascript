console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (name) => {
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
