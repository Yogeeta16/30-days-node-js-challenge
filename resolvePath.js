// *******************************************************************************************
// Problem 4: Resolve Path
// Problem Statement: Create a function resolvePath(relativePath) that takes a relative path as input and resolves it to an absolute path using the path module. The function should print the resolved path to the console.

// Function Signature:

// function resolvePath(relativePath) {
//     // Implementation
// }
// Expected Output:

// Resolved Path: /Users/username/project/folder/file.txt
// Test Cases:

// resolvePath('../project/folder/file.txt');
// // Expected Output: Resolved Path: /Users/username/project/folder/file.txt

// resolvePath('nonexistent-folder/file.txt');
// // Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt
// *******************************************************************************************
const path = require("path");

function resolvePath(relativePath) {
  const absolutePath = path.resolve(__dirname, relativePath);
  console.log("Resolved Path:", absolutePath);
}

// Test Cases
resolvePath("test-files/file1.txt");
resolvePath("nonexistent-folder/file.txt");

// node resolvePath.js
