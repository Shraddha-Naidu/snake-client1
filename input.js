//Active TCP Connection object
let conn;

const setupInput = function (connection) {
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
    conn.write(`Move: up`)
  }
  if (key === 's') {
    conn.write(`Move: down`)
  }
  if (key === 'a') {
    conn.write(`Move: left`)
  }
  if (key === 'd') {
    conn.write(`Move: right`)
  }
};


module.exports = { setupInput };

/* SUPPORTED MOVE COMMANDS
  "Move: up" - move up one square (unless facing down)
  "Move: down" - move down one square (unless facing up)
  "Move: left" - move left one square (unless facing right)
  "Move: right" - move left one square (unless facing left)
*/
