//First Demo
console.log("Hello soham modi how are you ? ");

// const { error } = require('console');
// const { Socket } = require('dgram');
// Second Demos

// first import required module
// var http = require("http");

//  // client request
// http.createServer(function (request, response) {
//     // Send the HTTP header   
//     // HTTP Status: 200 : OK  
//     // Content Type: text/plain  
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     // Send the response body as "content"  
//     response.end('Hello Soham Modi How are you ?');
// }).listen(8082);
// // Console will print the message  
// console.log('Server running at http://127.0.0.1:8082/');

// // Global Object
// console.log(__dirname); // getting the directory path
// console.log(__filename); // getting the file name path

// Timer
// 1) setInterval() => automatically call when interval finish
// setInterval(() => {
//     console.log("Hello soham");
// }, 1000);

// 2) setTimeout() => calll when finish the timeout but only once 
// setTimeout(() => {
//     console.log("Hello Soham Modi");
// }, 5000);

// var recursive = () => {  
//     console.log("Hey! Soham Modi");   
//     setTimeout(recursive,5000);  
// }  
// recursive();   

// 3) setInterval(), setTimeout() and clearTimeout() or clearInterval() 
// var welcome = () => {
//     console.log("Welcome Soham");
// }
// var welcome2 = () => {
//     console.log("Modi");
//     // clearTimeout(id1); // Clear the SetTimeout object 
//     clearTimeout(id2);   // Clear the Interval() object

// }
// var id1 = setTimeout(welcome2, 5000);
// var id2 = setInterval(welcome, 1000);


// Node.js Errors
// 1) reference error
// try{
//   const ref1 = 10;
//   const result = ref1 + ref2;
//   console.log(result);
// }
// catch(err){
//   console.log(err);
// }
// output : ReferenceError: ref2 is not defined

// const fs = require('fs'); // impoer the module that you want to use 
// const fileCheck = (err, data) =>{
//   if(err){
//     console.log("The error is : ",err)
//   }
//   console.log(data);
// }

// fs.readFile('bjwbfjkwfw/fwlfnw/fwfbwf', fileCheck); // random file path
// fs.readFile('first.js', fileCheck); // Proper file path

// DNS

// 1) lookup
// const dns = require('dns');
// dns.lookup('www.google.com', (err, addresses, family) => {
//   console.log('addresses:', addresses);
//   console.log('family:', family);
// });

// 2) lookupService
// dns.lookupService('172.217.166.36', 22, (err, hostname, service) => {
//   console.log(hostname, service);
//   // Prints: localhost  
// });


// Net Socket programming // TCP Server

// Server side
//import the required module
// const net = require('net');

// // create the server
// var server = net.createServer((Socket) => {
//   // close the connection after send the data
//   Socket.end("ending \n");

//   //Error handler 
// }).on('error', (err) => {
//   console.log(err);
//   throw err;

// });

// // Start the server 
// // Dynamically pass the port without hardcode
// server.listen(0, () => {
//   // retrive the server address and port 
//   const address = server.address();
//   console.log("Address is:", address);


//   // output: Address is: { address: '::', family: 'IPv6', port: 52707 }

//   // Client side 
//   // const net = require('net');
//   const client = net.connect({ port: address.port }, () => {
//     console.log("connected to the server");
//     client.write("Soham \n");
//   });

//   client.on('data', (data) => {
//     console.log(data.toString());
//     client.end();
//   });

//   client.on('end', () => {
//     console.log("Disconnected to the server..");
//   });
// });

// output: Address is: { address: '::', family: 'IPv6', port: 53300 }
// connected to the server
// ending
// Disconnected to the server..


// Node.js Crypto
// 1) HashCode
// const crypto  = require('crypto');
// const secretKey = 'abcdefgh';
// const hashCode = crypto.createHmac('sha256', secretKey)
//                         .update("Hello Soham Modi")
//                         .digest('hex');
// console.log("HashCode is: ", hashCode);

// 2) Encryption Cipher

// const crypto = require('crypto');  
// const cipher = crypto.createCipher('aes192', 'a password');   // AES Advance encryption dtndard , key
// var encrypted = cipher.update('Hello Soham Modi', 'utf8', 'hex');  // plaintext , which you want to convert
// encrypted += cipher.final('hex');  
// console.log(encrypted);   

// 3) Decryption Decipher

// const crypto = require('crypto');
// const decipher = crypto.createDecipher('aes192', 'a password');
// var encrypted = '2c814e87c703fe9638233ccbbe66dd90f62874c09a1a99028eb65a5d872a9f99';
// var decrypted = decipher.update(encrypted, 'hex', 'utf8');
// decrypted += decipher.final('utf8');
// console.log(decrypted);

// Buffers 
//Writing to buffers
// buf = new Buffer(256);
// len = buf.write("Soham Modi");
// console.log("nubers is: ", len);

// // Reading to buffers
// buf = new Buffer(26);
// for (var i = 0; i < 26; i++) {
//   buf[i] = i + 97;
// }
// console.log(buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz  
// console.log(buf.toString('ascii', 0, 5));   // outputs: abcde  
// console.log(buf.toString('utf8', 0, 5));    // outputs: abcde  
// console.log(buf.toString(undefined, 0, 5)); // encoding defaults to 'utf8', outputs abcde    



// Stream
// 1) Read Data 

// var fs = require("fs");
// var data = '';
// // Create a readable stream  
// var readerStream = fs.createReadStream('input.txt');
// // Set the encoding to be utf8.   
// readerStream.setEncoding('UTF8');
// // Handle stream events --> data, end, and error  
// // data start the reading antil not end 
// readerStream.on('data', function (chunk) {
//   data += chunk;
// });
// // getting the data till end
// readerStream.on('end', function () {
//   console.log(data);
// });
// // if any error occur during the reading or writing 
// readerStream.on('error', function (err) {
//   console.log(err.stack);
// });

// console.log("Program Ended");


// 2) Write the data 

// var fs = require("fs");
// var data = 'A Solution of all Technology';
// // Create a writable stream  
// var writerStream = fs.createWriteStream('output.txt');
// // Write the data to stream with encoding to be utf8  
// writerStream.write(data, 'UTF8');
// // Mark the end of file  
// writerStream.end();
// // Handle stream events --> finish, and error  
// writerStream.on('finish', function () {
//   console.log("Write completed.");
// });
// writerStream.on('error', function (err) {
//   console.log(err.stack);
// });
// console.log("Program Ended");  

// 3) Piping Stream => Read And Write both in Different file.

// var fs = require("fs");  
// var readerStream = fs.createReadStream('input.txt');  
// var writerStream = fs.createWriteStream('output.txt');  
// readerStream.pipe(writerStream);  
// console.log("Program Ended");  

// 4) Chaining Stream a) => Compressed file

// var fs = require("fs");
// var zlib = require('zlib');
// // Compress the file input.txt to input.txt.gz  
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));
// console.log("File Compressed.");

//   b) => Decompressed file

// var fs = require("fs");
// var zlib = require('zlib');
// // Decompress the file input.txt.gz to input.txt  
// fs.createReadStream('input.txt.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('input.txt'));
// console.log("File Decompressed."); 


// fs => file system

// 1) Read the file
// var fs = require("fs");
// // Asynchronous read  
// fs.readFile('input.txt', function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Asynchronous read: " + data.toString());
// });
// // Synchronous read  
// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());
// console.log("Program Ended");  

// 2) Open a file

// var fs = require("fs");
// // Asynchronous - Opening File  
// console.log("Going to open file!");
// fs.open('input.txt', 'r+', function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(data);
//   console.log("File opened successfully!");
// });

// 3) fs.stats => get the information about the file
// var fs = require("fs");
// console.log("Going to get file info!");
// fs.stat('input.txt', function (err, stats) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(stats);
//   console.log("Got file info successfully!");
//   // Check file type  
//   console.log("isFile ? " + stats.isFile());
//   console.log("isDirectory ? " + stats.isDirectory());
// });  


// Nodejs Event Module => just like evenlistener in js

// const EventEmitter = require('node:events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');

//   setTimeout(() => {
//         console.log("Reminder Run after 3 seconds");
//   }, 3000);
// });
// myEmitter.emit('event'); // listern even trigger(call)
// console.log("continue working...");


// Url module

// const url = require('node:url');

// const myURL = new URL('https://example.org');
// myURL.pathname = '/a/b/c';
// myURL.search = '?d=e';
// myURL.hash = '#fgh'; 

// console.log(myURL);


// Http Module

// const http = require('http');

// const port = process.env.PORT || 301;

// const server = http.createServer((req, res) => {
    
//     res.statusCode = 200;
//     res.setHeader('content-type', 'text/html');
//     //console.log(req.url);
//     res.end('<h1> Hello TatvaSoft </h1> <p> hello Soham Modi</p>');
//     if (req.url == '/') {
//         res.statusCode = 200;
//         res.end('<h1> Hello TatvaSoft </h1> <p> This is Home Page</p>');
//     }
//     else if (req.url == '/about') {
//         res.statusCode = 200;
//         res.end('<h1> Hello TatvaSoft </h1> <p> This is about Page</p>');
//     }
//     else {
//         res.statusCode = 404;
//         res.end('<h1> Page not Found !</h1>');
//     }

// })

// server.listen(port, () => {
//     console.log(`server is on port ${port}`);
// }); // not use this because ir=t is so much complex so we use the express rather than this .


// Express node

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) =>{
    res.send('This is about Page.')
})
app.listen(port, () => {x
  console.log(`Example app listening on port ${port}`)
})