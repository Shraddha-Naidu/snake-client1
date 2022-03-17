//Active TCP Connection object
let conn;

const setupInput = function(connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write(`Exiting 🐍 - Bye for now.\n`);
    process.exit();
  }
  if (key === 'w') {
    conn.write(`Move: up`);
  }
  if (key === 's') {
    conn.write(`Move: down`);
  }
  if (key === 'a') {
    conn.write(`Move: left`);
  }
  if (key === 'd') {
    conn.write(`Move: right`);
  }
  if (key === 'g') {
    conn.write(`Say: What's good?`);
  }
  if (key === 'b') {
    conn.write(`Say: Bye Y'all.`);
  }
};


module.exports = { setupInput };
