const args = process.argv.slice(2);
const timerArray = args.sort((a, b) => a - b);

const timer = args => {
  for (const time of args) {
    if (Number.isInteger(time)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }
  }
};

timer(timerArray);
