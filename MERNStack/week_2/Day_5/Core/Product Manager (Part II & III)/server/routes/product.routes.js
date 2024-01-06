const ProductController = require("../controllers/product.controller")

module.exports = (app) => {  //il faut mettre l'app entre parenthese puisqu'on est dans le cas d'arrow function et elle represente un paramétre
    app.get("/api/products", ProductController.findAllProducts)
    app.get("/api/product/:id", ProductController.findOneProduct)
    app.post("/api/product/new", ProductController.createNewProduct)
    app.put("/api/product/update/:id", ProductController.updateOneProduct)
    app.delete("/api/product/delete/:id", ProductController.deleteProduct)
}