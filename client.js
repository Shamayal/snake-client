const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Idling message from server
  conn.on("data", (data) => {
    console.log(data);
  });

  // server connection message
  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    // name displayed on snake 
    conn.write("Name: SHA");
    // move snake
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 50)
  });

  return conn;

};

module.exports = {connect};