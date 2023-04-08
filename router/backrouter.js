const express = require("express")
const router = express.Router()

const {  
    getArticuloAutor, 
    getArticulos, 
    getArticulo, 
    createArticulo, 
    updateArticulo, 
    deleteArticulo, 
    searchArticulo
} = require("../controllers/autorArticulos")

router.get("/entries/:author/:limit/:skip", getArticuloAutor)


router.get("/all-entries/:limit/:skip", getArticulos)


router.get("/entry/:title/:author", getArticulo)


router.post("/create/:author", createArticulo)


router.put("/update/:title/:author", updateArticulo)


router.delete("/delete", deleteArticulo)


router.get("/search/:search/:limit/:skip", searchArticulo)


module.exports = router