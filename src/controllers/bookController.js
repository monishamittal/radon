const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    if(!book.author){
    return res.send({msg:"author is not present"})}
    if(!book.publisher){
        return res.send({msg:"publisher is not present"})}
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}

// const putBooks=async function (req,res) {
//     let specificAuthor = await publisherModel.findByIdAndUpdate({name:req.param.name},{
//         $set:{
//             isHARDCOVER:false
//         }
//     })
//     let newPrice= await bookModel.updateOne({})
//  res.send({data:specificAuthor,})

// }


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
// module.exports.putBooks=putBooks