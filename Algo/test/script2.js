
// we are manipulating our DOM


document.querySelector("#heroID").value;
// console.log(heroID);
async function asyncGetHero(){
    var response= await fetch( "http://akabab.github.io/superhero-api/api/id/1"+ heroID +".json"); // without the awit the result will be undefined because we don't know how much time it will take
    var heroData= await response.json();
    console.log(heroData);
    //select the h2
    document.querySelector("#heroName").innerText =heroData.name;
    console.log(heroData.name);
    console.log(heroData.image.md);
    document.querySelector("#heroImg").src


    console.log(heroData.name);

}