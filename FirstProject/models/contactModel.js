const mongoose = require('mongoose');

const contactScheme = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add the contact list"],

    },
    email: {
        type: String,
        require: [true, "Please add the contact email "],
    },
    phoneNo: {
        type: String,
        require: [true, "Please add the contact PhoneNo"]
    }
});

module.exports = mongoose.model("Contact", contactScheme);