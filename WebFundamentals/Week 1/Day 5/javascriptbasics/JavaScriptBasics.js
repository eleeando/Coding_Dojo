//comment ctrl+/
//we have 2types of comments: line comment and multi line comment/
//var keyword --- variable name --- value
//.!.follow.naming.convention.camelCaseConvention
var firstName="Alex" // we made 2 operations: creation of var+firstName, firstName="Alex"
// var firstName
    //firstName="Alex"

var i // value is optional
i="yes"

//1-I string
var lastName="Smith"
var y="12"

//2- Number
var age=35
var bmi=1.74 

//3- Boolean: it can be true or false (rq: false+true=>false)
var hasCovid=false
var isAdmin= true

//4- Null vs Undefined vs not defined

//*null: it's value which if we add, multiply it with any value stays the same 
var bestSinger= null //null is a valied value; it's a value

//*Undefined: it means the variable is found in the program but we don't have a value for it
var favFood
console.log("Fav Food = ", favFood)
console.log('User Full Nameis ${firstName} ${lastName} and he is {age} years old')

//Conditionals
var number=12
if(isAdmin==true){
    console.log("you are welcome");
}
else{
    console.log("Not Authorized")
}
if (number==y){
    console.log("Equal")
}
else{
    console.log("Not Equal")
}
//=:asseign
//==: compare values as strings
//===: compare values and types
