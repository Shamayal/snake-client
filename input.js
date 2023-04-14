const {connect} = require("./client");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // what happens when key pressed on keyboard
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  let conn = connection;
  // what happens when "data" is received from stdin, meaning when a key is pressed on keyboard input
  if (key === "\u0003") {
    console.log("Game Over")
    process.exit();
  } else if (key === "w") {
    console.log("Moved up")
    conn.write("Move: up");
  } else if (key === "a") {
    console.log("Moved left")
    conn.write("Move: left");
  } else if (key === "s") {
    console.log("Moved down")
    conn.write("Move: down");
  } else if (key === "d") {
    console.log("Moved right")
    conn.write("Move: right");
  } else {
    console.log("Press a WASD key to move!")
  }

};

module.exports = {setupInput};