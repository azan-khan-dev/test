//write add function
function add(a, b) {
    return a + b;
}
//write subtract function
function subtract(a, b) {
    return a - b;
}
//write multiply function   
function multiply(a, b) {
    return a * b;
}
//write divide function
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
//Call
console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 6)); // 24
console.log(divide(10, 2)); // 5
try {
    console.log(divide(10, 0)); // Error: Cannot divide by zero
} catch (error) {    console.error(error.message);
}
//make a server
const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});
server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});

 PORT=3000;//make a server using express
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
}); 

//make a server using Koa
const Koa = require('koa');