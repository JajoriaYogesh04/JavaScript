// function isAdult(){
//     let age=13;
//     if(age>=18){
//         console.log("Adult");
//     }
//     else{
//         console.log("Not Adult");
//     }
// }
// isAdult();


// function info(name, age){
//     console.log(`${name}'s age is ${age}`);
// }
// info("Yogesh", 20);


// function sum(num1, num2){
//     return num1+num2;
//     console.log("Not be Executed");
// }


// const sum= function(a,b){
//     return a+b;
// }


// function multipleGreet(func,n){
//     for(let i=0; i<n;i++){
//         func();
//     }
// }
// let greet=function(){
//     console.log("Hello");
// }
// multipleGreet(greet,2);


// function oddEvenFactory(request){
//     if(request=='odd'){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(request=='even'){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("Wroen Request");
//     }
// }
// let request='odd';


// const calculator={
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// }


const calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
};