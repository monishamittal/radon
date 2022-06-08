const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel.js")
const AuthorModel= require("../models/authorModel.js")
const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook  )
router.post("/createAuthor", BookController.createAuthor)
router.get("/bookByAuthor", BookController.bookByAuthor)
router.get("/authorOfBook", BookController.authorOfBook)
router.get("/getBook", BookController.getBook)
router.get("/bookByAuthorId/:key", BookController.bookByAuthorId)
router.get("/authorByRating", BookController.authorByRating)

module.exports = router;