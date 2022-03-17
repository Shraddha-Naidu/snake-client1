/*
LIVE ZOOM LOCATION
IP: 165.227.47.243
PORT: 50541
*/

const { connect } = require('./client')

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => {
  handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) {
  const stdout = process.stdout;
  if (key ==='\u0003') {
    stdout.write(`Exiting 🐍. Bye...\n`);
    process.exit();
  }
};

setupInput();
handleUserInput();
