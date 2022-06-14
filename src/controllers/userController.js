const userModel = require("../models/userModel")
const orderModel= require("../models/orderModel")
const productModel= require("../models/productModel")

const createUser= async function (req, res) {
    let user = req.body
    let userCreated = await userModel.create(user)
    res.send({data: userCreated})
   
}

module.exports.createUser= createUser


