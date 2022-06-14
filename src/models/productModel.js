const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    
        
        name:String,
        category:String,
        price:{
            type:Number,
            default:100
        }  //mandatory property
    
}, { timestamps: true });

module.exports = mongoose.model('newProduct', productSchema)
