// const square=(n)=>n*n;

// function print(){
//     let id=setInterval(()=>{
//         console.log("Hello World");
//         setTimeout(()=>{
//             closeInterval(id)
//         },10000);
//     },2000);
    
// }


let id=setInterval(()=>{
    console.log("Hello World");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);