const {Product} = require("../models/product.model")

//CRUD
module.exports = {
    //CREATE
    createNewProduct: (req, res) => {
        Product.create(req.body)
        .then((object) => {
            res.status(200).json(object);
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },

    //READ ALL
    findAllProducts: (req, res) => {
        Product.find({})
        .then((objects) =>{
            res.status(200).json(objects)
        } )
        .catch((err)=>{
            res.status(400).json(err)
        })
    },

    //READ ONE
    findOneProduct: (req,res) => {
        Product.findOne({_id: req.params.id})
        .then((object) => {
            res.status(200).json(object)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },

    //UPDATE
    updateOneProduct: (req,res) => {
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true} )
        .then((updated) => {
            res.status(200).json(updated)
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