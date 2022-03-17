//connect function sets up a connection and returns an object
const net = require("net");//States tha net package is reguired to run. built in

//establishes connection with game server
const connect =  function () {
  const connection = net.createConnection({
    host: "165.227.47.243",//IP address here in ""
    port: 50541//PORT Number here
  });

  // interprets incoming data to text (decodes)
  connection.setEncoding("utf-8");
  
  
  connection.on("connect", () => {
    console.log(`Connected to 🐍 game server!`);
    connection.write("Name: SN");
    connection.write("Move: up");
  });

  connection.on("data", message => {
    console.log(message)
  });//on to receive data

  return connection;
};

console.log("Connecting ... ⏳")//Prints to console indicating that connection to server is being made
connect();

//EXPORT
module.exports = { connect };
