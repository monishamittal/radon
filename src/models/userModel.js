const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
   bookName: {
        type: String,
        unique: true,
        required: true
    },
    authorName: String,
    category: String,
    year: Number,
   
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //book



// String, Number
// Boolean, Object/json, array