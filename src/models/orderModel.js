const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const orderSchema = new mongoose.Schema( {
		user:{
            type:ObjectId,
            ref:"newUser",
            required:true
        },
		product: {
            type:ObjectId,
            ref:"newProduct",
            required:true
        },
        amount: Number,
	    isFreeAppUser:Boolean, 
	    date:{
            type:String,
            method:"DD-MM-YYYY"
                }

}, { timestamps: true });

module.exports = mongoose.model('newOrder', orderSchema)
