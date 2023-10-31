function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["mozzarelle"], ["pepperoni", "sausage"]);
var p2= pizzaOven("hand tossed","marinara", ["mozzarella","feta"],["mashrooms","olives","onions"]);
var p3= pizzaOven("deep dish","traditional",["mozzarelle"],["tuna","olives"]);
var p4= pizzaOven("hand tossed","traditional",["feta"],["onion","pepper","olives"]);


console.log(p2);

