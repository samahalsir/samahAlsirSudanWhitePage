var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var ContactsSchema = new Schema({
    _id: {
        type: objectId,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

var Contacts = mongoose.model('Contacts', ContactsSchema);

module.exports = Contacts;