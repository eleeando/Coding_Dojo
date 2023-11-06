var res= fetch("http:api.github.com/users/alaa-1");
console.log(res)
console.log(------After------)
console.log(res.json());

async function asyncGithub(){ // you can't work with await if the function is not async
    //send a request to the API
    var response=await fetch("http:api.github.com/users/alaa-1") // takes time to respond ==> returns promise
    var data= await response.json(); //==> returns promise
    console.log(data)
}
asyncGithub();
console.log("Hello API!");
// if the promise is fulfilled, that means that my folder is okay and i need just to wait for response
//pendding= en cours