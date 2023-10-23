var userLogin = [55, 145, 89, 500]
greetSomeone(userLogin)

function greetSomeone(userLogin){
    for(var user = 0 ; user <= userLogin.length-1;user++){
        if (userLogin[user]==500){
            console.log("Congrtas " + userLogin[user])
        }else {
            console.log("next time " + userLogin[user])
        }
    }
} 
