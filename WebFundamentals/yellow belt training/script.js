// console.log("linked !!!")
// clicking on 
function remove(){
    Element.remove
    document.querySelector("#removeMe").remove();
}
function upVote(elementNumber){
    if(elementNumber===1){
        document.querySelector("#vote1").innerHTML++;
    }
    else{
        document.querySelector("#vote2").innerHTML++;
    }
    
}
//

function alertMe(){
    var inputElement= document.querySelector("#searchinput");
    alert('Your search for: ${inputElement.value}')
}