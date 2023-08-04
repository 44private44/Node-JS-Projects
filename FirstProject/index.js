const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

// app.get('/api/contact', (req, res) => {

//     // res.send("Get all Contacts list"); // simple format
//     // res.json({message : "Get all contacts list"}); // json format
//     //res.status(200).json({message : "Get all contacts list"}); // with status 200 code 

// });

app.use(express.json()); // use as middleware to fetch the data from the client
app.use('/api/contact', require('./routes/contactsRoutes'));
app.use(errorHandler); // handle the Error.

app.listen(port, () => {
    console.log("hello this is my first project about the nodejs with express...");
    console.log(`run on the port of : ${port}`);
});