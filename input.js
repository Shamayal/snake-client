// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // what happens when key pressed on keyboard
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  // what happens when "data" is received from stdin, meaning when a key is pressed on keyboard input
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {setupInput};