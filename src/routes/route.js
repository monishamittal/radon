const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")
const middleware=require("../middleware/middleware")


router.post("/createUser",middleware.validateHeader, userController.createUser )

router.post("/createProduct",productController.createProduct  )

router.post("/createOrder",middleware.validateUser, middleware.validateProduct, orderController.createOrder  )





router.get("/getUserAndProduct", orderController.getUserAndProduct  )


module.exports = router;