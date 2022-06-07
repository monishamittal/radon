const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
    } ,
    year:{
        type:Number,
        default:2021,
    },
    authorName: String, 
    tags: [String],
    totalPages: Number,
    isPublished: Boolean,
    stockAvalibility:Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema) //users


