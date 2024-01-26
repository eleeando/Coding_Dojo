const Author = require('../models/author.model')

//CRUD
module.exports = {
    
    //CREATE
    createNewAuthor: (req,res) => {
        Author.create(req.body)
        .then(newCreatedAuthor => {res.status(201).json(newCreatedAuthor)})
        .catch(error => res.status(400).json(error))
    },

    //READ ALL
    findAllAuthors: (req,res) => {
        Author.find({})
        .then((objects) => {
            res.status(200).json(objects)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },

    //READ ONE
    findOneAuthor:(req,res) => {
        Author.findOne({_id: req.params.id})
        .then((object) => {
            res.status(200).json(object)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },

    //UPDATE
    updateOneAuthor: (req,res) => {
        Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then((updated) => {
            res.status(200).json(updated)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },


    //DELETE
    deleteAuthor: (req,res) => {
        Author.deleteOne({_id:req.params.id})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    }
    
}