//connect function sets up a connection and returns an object
const net = require("net");//States tha net package is reguired to run. built in
const { IP,PORT } = require('./constants');

//establishes connection with game server
const connect =  function() {
  const connection = net.createConnection({
    host: IP,//IP address here in ""
    port: PORT//PORT Number here
  });

  // interprets incoming data to text (decodes)
  connection.setEncoding("utf-8");

  connection.on("connect", () => {
    console.log(`Connected to 🐍 game server!`);
    connection.write(`Name: SN`);//Does not recognise all caps Name or Move, returns with "Huh!"
    //connection.write("Move: up");
  });

  connection.on("data", message => {
    console.log(message);
  });

  return connection;
};


//EXPORT
module.exports = { connect };
