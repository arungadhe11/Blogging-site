const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        enum: ["mr", "mrs", "miss"]
        
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

},{ timestamps: true });

module.exports = mongoose.model("author", authorSchema);