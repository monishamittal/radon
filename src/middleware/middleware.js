
const validateHeader= async function(req, res, next) {
    console.log(req.headers.isFreeAppUser)
    let data=req.headers.isFreeAppUser || req.headers.isfreeappuser
   console.log(data)
    if(data===undefined){
        res.send("The request is missing a mandatory header ")
    }
    else{
        next()
    }
}
module.exports.validateHeader= validateHeader

const validateUser= async function(req, res, next) {
    let demoStr="61951bfa4d9fe0d34da86344"
    let user=req.body['user']
    //let product_id=req.body['productId']
    if(user.length===demoStr.length){
        next()
    }
    else{
        res.send("Invalid User")
    }
}
module.exports.validateUser = validateUser

const validateProduct= async function(req, res, next) {
    let demoStr="61951bfa4d9fe0d34da86344"
    let product=req.body['product']
    //let product_id=req.body['productId']
    if(product.length===demoStr.length){
        next()
    }
    else{
        res.send("Invalid Product")
    }
}
module.exports.validateProduct= validateProduct
