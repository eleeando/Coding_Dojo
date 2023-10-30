function Logout(element){
    if(element.innerText=="Login"){
        element.innerText = "Logout"
    }
    else{
        element.innerText = "Login"
    }
    
}
function remove(element){
    element.remove();
}

function popalert(){
    alert("Ninja was liked");
}