const userModel = require("../models/userModel")
const orderModel= require("../models/orderModel")
const productModel= require("../models/productModel")

const createOrder= async function (req, res) {
    let order = req.body
    let orderCreated = await orderModel.create(order)
    res.send({data: orderCreated})
}    

const getUserAndProduct = async function (req, res) {
    let specific= await orderModel.find().populate('user').populate('product')
    res.send({data: specific})
}
module.exports.createOrder= createOrder
module.exports.getUserAndProduct= getUserAndProduct
