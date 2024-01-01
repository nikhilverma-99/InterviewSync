const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/execute', (req, res) => {
  const { code, language } = req.body;

  let command;
  let extension;

  switch (language) {
    case 'java':
      command = 'javac -d . code.java && java code';
      extension = 'java';
      break;
    case 'c':
      command = 'gcc code.c -o code && ./code';
      extension = 'c';
      break;
    case 'cpp':
      command = 'g++ code.cpp -o code && ./code';
      extension = 'cpp';
      break;
    case 'python':
      command = 'python code.py';
      extension = 'py';
      break;
    case 'javascript':
      command = 'node code.js';
      extension = 'js';
      break;
    default:
      return res.status(400).json({ error: 'Unsupported language' });
  }

  const fileName = `code.${extension}`;

  // Create a temporary file with the code
  const fs = require('fs');
  fs.writeFileSync(fileName, code);

  // Execute the code in a child process
  exec(command, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr.toString() });
    }

    res.json({ output: stdout.toString() });

    // Clean up the temporary file
    fs.unlinkSync(fileName);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
