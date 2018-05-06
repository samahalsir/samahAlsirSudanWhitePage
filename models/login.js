var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var loginSchema = new Schema({
    _id: {
        type: objectId,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

var login = mongoose.model('login', loginSchema);

module.exports = login;