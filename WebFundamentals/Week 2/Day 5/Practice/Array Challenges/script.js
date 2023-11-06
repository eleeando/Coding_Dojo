// 1- Always Hungry
// function alwaysHungry(arr) {
//     var foody= false;
//     for (var i=0; i<= arr.length-1; i++){
//         if (arr[i]=== "food"){
//         console.log("yummy");
//         foody= true;
//     }
// }
//         if (!foody){
//             console.log("I'm hungry");
//         }
    
// }
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // // this should console log "I'm hungry"

//2- High Pass Filter
// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for (var i=0; i<=arr.length-1;i++){
//         if (arr[i]>cutoff){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// 3-Better than average
// function betterThanAverage(arr) {
//     var sum = 0;
//     for(var i=0;i<=arr.length-1;i++){
//         sum=sum+arr[i];
//     }
//     sum=sum/arr.length;
//     var count = 0
//     for (var i=0;i<=arr.length-1;i++){
//         if(arr[i]>sum){
//             count=count+1;
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

// 4- Array Reverse
// function reverse(arr) {
//     var reversed=[];
//     for(var i= arr.length-1; i>=0; i--){
//                 reversed.push(arr[i])
//             }
//             return reversed;
//         }
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// 5-Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i=2;i<n;i++){
        var newArr= fibArr [i-1]+ fibArr [i-2];
        fibArr.push(newArr)
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]







