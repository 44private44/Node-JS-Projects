const express = require('express');
const router = express.Router();
const { getContacts, getOneContact, createContact, updateContact, deleteContact } = require('../controllers/contactController');

// Get all contact list as simple without controller
// router.route('/').get((req, res) => {
//     res.status(200).json({message : 'This is all contact list using routing in express'});
// });

// getallcontacts
router.route('/').get(getContacts); // simple way
// Create a new contact list
router.route('/').post(createContact); // simple way 

// For Save line combine both because it allmost same.
router.route('/').get(getContacts).post(createContact);

// getting the one contact list
// Update contact list
// Delete contact list
router.route('/:id').get(getOneContact).put(updateContact).delete(deleteContact);

module.exports = router;