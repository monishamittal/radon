const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.bookList)

router.get("/getBooks", BookController.getBooks)

router.get("/getParticularBooks/:key", BookController.getParticularBooks)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.get("/getRandomBooks", BookController.getRandomBooks)
module.exports = router;