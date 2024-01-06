const {Product} = require("../models/product.model")

//CRUD
module.exports = {
    //CREATE
    createNewProduct: (req, res) => {
        Product.create(req.body)
        .then((newlyCreatedProduct) => {
            res.status(200).json(newlyCreatedProduct);
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },

    //READ ALL
    findAllProducts: (res) => {
        Product.find({})
        .then((products) =>{
            res.status(200).json(products)
        } )
        .catch((err)=>{
            res.status(400).json(err)
        })
    },

    //READ ONE
    findOneProduct: (req,res) => {
        Product.findOne({_id: req.params.id})
        .then((oneProduct) => {
            res.status(200).json(oneProduct)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },

    //UPDATE
    updateOneProduct: (req,res) => {
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true} )
        .then((updateProduct) => {
            res.status(200).json(updateProduct)
        } )
        .catch((err) => {
            res.status(400).json(err)
        })
    },

    //DELETE
    deleteProduct: (req,res) => {
        Product.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    }

}