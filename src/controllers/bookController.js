const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const bookByAuthor=async function (req,res) {
    let data=await AuthorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1, _id:0})
    let requiredBook = await BookModel.find({author_id: data[0].author_id })
    res.send({msg:requiredBook})
}

const authorOfBook=async function(req,res) {
    let getBookAndAuthor=await BookModel.findOneAndUpdate({name:"Two states"},{$set:{prices:100}},{new:true})
    let requireAuthor=await AuthorModel.find({author_id:getBookAndAuthor.author_id}).select("author_name")
    res.send({msg:requireAuthor})
}

const getBook = async function (req, res) {
    let data= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    // let respectedBooks=await AuthorModel.find({author_name:data.price})
    res.send({msg : data})

    // let authorNewData = AuthorModel.find({  })
    // res.send({msg : authorNewData})
}
  
const bookByAuthorId=async function(req,res){
let data=await BookModel.find({author_id:req.params.key}).select({name:1,_id:0})
res.send({msg:data})
}

const authorByRating=async function (req,res) {
    let data1=await AuthorModel.find({age:{$gt:50}}).select({author_id:1,_id:0})
    let data2=await BookModel.find({$and:[{author_id:data1[0].author_id},{ratings:{$gt:5}}]})
    res.send({msg:data2})
}

module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.bookByAuthor=bookByAuthor
module.exports.authorOfBook=authorOfBook
module.exports.getBook=getBook
module.exports.bookByAuthorId= bookByAuthorId
module.exports.authorByRating=authorByRating


