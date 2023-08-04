const asyncHandler = require('express-async-handler');
// so we use this we not need to use the try catch exception it automatically handle by itself...

const Contact = require('../models/contactModel');
const contactModel = require('../models/contactModel');
// GetContacts
const getContacts = asyncHandler (async (req, res) => {
    const contacts = await Contact.find();
    // res.status(200).json({ message: 'This is all Contact list by controller' });
    res.status(200).json(contacts);
});

// getOneContact
const getOneContact = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Get the contact for : ${req.params.id}` });
});

// createContact
const createContact = asyncHandler (async (req, res) => {
    console.log('the client new data is : ', req.body); // ptint the new user data
    const { name, email, phoneNo } = req.body;
    if (!req.name || !req.email || !req.phoneNo) {
        res.status(400);
        throw new Error("All fields are manadatory !");
    }
    const contact = await Contact.create({
        name, email, phoneNo
    });
    res.status(200).json(contact);
});

// updateContact
const updateContact = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Update Contact for : ${req.params.id}` });
});

// deleteContact    
const deleteContact = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Delete Contact for : ${req.params.id}` });
})  ;

module.exports = { getContacts, getOneContact, createContact, updateContact, deleteContact };