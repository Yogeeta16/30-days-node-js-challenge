// *******************************************************************************************
// Problem 3: Execute Command
// Problem Statement: Create a function executeCommand(command) that takes a shell command as input and executes it using the child_process module. The function should print the output of the command to the console.

// Function Signature:

// function executeCommand(command) {
//     // Implementation
// }
// Expected Output:

// Command Output:
// File1.txt
// File2.txt
// Test Cases:

// executeCommand('ls -la');
// // Expected Output: (output of ls -la)

// executeCommand('echo "Hello, Node.js!"');
// // Expected Output: Hello, Node.js!
// *******************************************************************************************

const { exec } = require("child_process");

function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error output: ${stderr}`);
      return;
    }
    console.log("Command Output:");
    console.log(stdout);
  });
}

// Test Cases

// Lists files in the current directory (Linux hence gives error)
executeCommand("ls -la");
// Lists files in the current directory (Windows)
executeCommand("dir");
// Outputs "Hello, Node.js!"
executeCommand('echo "Hello, Node.js!"');
// Displays the current date and time
executeCommand("date");
// Displays network configuration (Windows)
executeCommand("ipconfig");
// Prints the current working directory (Linux hence gives error)
executeCommand("pwd");

// node executeCommand.js
