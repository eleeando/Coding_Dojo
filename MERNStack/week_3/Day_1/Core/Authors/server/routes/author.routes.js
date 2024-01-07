const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.post('/api/author', AuthorController.createNewAuthor)
    app.get('/api/authors', AuthorController.findAllAuthors)
    app.get('/api/author/:id', AuthorController.findOneAuthor)
    app.put('/api/author/update/:id', AuthorController.updateOneAuthor)
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor)
}



